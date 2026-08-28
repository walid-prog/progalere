"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const themeChangeEvent = "wavora-theme-change";

function readTheme():Theme{
  return document.documentElement.dataset.theme==="dark"?"dark":"light";
}

function subscribeToTheme(onStoreChange:()=>void){
  window.addEventListener(themeChangeEvent,onStoreChange);
  window.addEventListener("storage",onStoreChange);
  return ()=>{
    window.removeEventListener(themeChangeEvent,onStoreChange);
    window.removeEventListener("storage",onStoreChange);
  };
}

export default function ThemeToggle(){
  const theme=useSyncExternalStore(subscribeToTheme,readTheme,()=>"light");

  function toggleTheme(){
    const next:Theme=theme==="dark"?"light":"dark";
    document.documentElement.dataset.theme=next;
    document.documentElement.style.colorScheme=next;
    localStorage.setItem("wavora-theme",next);
    window.dispatchEvent(new Event(themeChangeEvent));
  }

  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={theme==="dark"?"Activer le mode jour":"Activer le mode nuit"} aria-pressed={theme==="dark"} title={theme==="dark"?"Mode jour":"Mode nuit"}>
    <span className="theme-toggle-track" aria-hidden="true"><span className="theme-horizon-sky"><i/><b/><b/><b/></span><span className="theme-horizon-water"/><span className="theme-toggle-thumb"/></span><span className="theme-toggle-label">{theme==="dark"?"Nuit":"Jour"}</span>
  </button>;
}
