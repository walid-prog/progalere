"use client";

import { useEffect } from "react";

export default function ScrollAtmosphere(){
  useEffect(()=>{
    const root=document.documentElement;
    const sections=Array.from(document.querySelectorAll<HTMLElement>("[data-atmosphere]"));
    root.dataset.homeStage="0";
    const observer=new IntersectionObserver(entries=>{
      for(const entry of entries){
        if(entry.isIntersecting){
          root.dataset.homeStage=(entry.target as HTMLElement).dataset.atmosphere||"0";
        }
      }
    },{rootMargin:"-42% 0px -47% 0px",threshold:0});
    sections.forEach(section=>observer.observe(section));
    return ()=>{observer.disconnect();delete root.dataset.homeStage};
  },[]);

  return <div className="atmosphere-art" aria-hidden="true">
    <div className="atmosphere-depth-grid"/>
    <div className="atmosphere-glow"/>
    <div className="atmosphere-night-sky">
      {Array.from({length:24},(_,index)=><span key={index}/>) }
    </div>
    <svg className="atmosphere-waves" viewBox="0 0 1600 300" preserveAspectRatio="none">
      <path d="M-80 150C180 38 360 250 640 133s460-50 720 16 338-21 390-59"/>
      <path d="M-80 205C190 92 380 284 650 188s456-37 710 18 330-19 390-56"/>
      <path d="M-80 260C210 154 400 315 680 242s450-31 700 18 316-15 370-45"/>
    </svg>
  </div>;
}
