import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: { default: "Wavora | Faites avancer l’entreprise", template: "%s | Wavora" },
  description: "Comptabilité, automatisation, stratégie et formations pour les PME, travailleurs autonomes et organisations.",
  icons: { icon: "/wavora-mark.svg", shortcut: "/wavora-mark.svg" },
  openGraph: { title: "Wavora | Faites avancer l’entreprise", description: "Wavora connecte vos chiffres, vos outils et vos décisions pour créer une entreprise plus fluide.", type: "website", locale: "fr_CA", siteName: "Wavora", url: "https://wavora.rayannebly.chatgpt.site", images: [{ url: "https://wavora.rayannebly.chatgpt.site/og.png", width: 1200, height: 630, alt: "Wavora — Faites avancer l’entreprise. Pas l’administration." }] },
  twitter: { card: "summary_large_image", title: "Wavora | Faites avancer l’entreprise", description: "Wavora connecte vos chiffres, vos outils et vos décisions pour créer une entreprise plus fluide.", images: ["https://wavora.rayannebly.chatgpt.site/og.png"] },
};

const themeScript=`(function(){try{var t=localStorage.getItem('wavora-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){document.documentElement.dataset.theme='light'}})()`;

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:themeScript}}/></head><body><SiteHeader/>{children}<SiteFooter/></body></html>}
