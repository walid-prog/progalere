"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BrandLogo from "./BrandLogo";
import ThemeToggle from "./ThemeToggle";

const links = [["Accueil", "/"], ["Services", "/services"], ["À propos", "/a-propos"], ["Réservation", "/reservation"]];

export default function SiteHeader(){
  const pathname=usePathname();
  const [open,setOpen]=useState(false);
  return <header className="site-header"><div className="nav-shell">
    <Link className="brand-logo" href="/" aria-label="Wavora — Accueil" onClick={()=>setOpen(false)}><BrandLogo /></Link>
    <nav className={open?"nav-links open":"nav-links"} aria-label="Navigation principale">{links.map(([label,href])=><Link key={href} href={href} className={pathname===href?"active":""} onClick={()=>setOpen(false)}><span className="nav-label">{label}</span></Link>)}<div className="lang-switch" aria-label="Langue"><span>FR</span><span aria-disabled="true" title="Version anglaise à venir">EN</span></div></nav>
    <div className="header-actions"><ThemeToggle/><button className="menu-toggle" aria-label="Afficher le menu" aria-expanded={open} onClick={()=>setOpen(!open)}><span/><span/></button></div>
  </div></header>
}
