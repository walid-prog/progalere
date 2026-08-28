import Link from "next/link";
import ClientPlatformPreview from "./components/ClientPlatformPreview";
import ScrollAtmosphere from "./components/ScrollAtmosphere";
import ServiceIcon from "./components/ServiceIcon";
import ToolLogo from "./components/ToolLogo";
import { services } from "./service-data";

const tools=[
  {name:"Claude",icon:"claude",className:"tool-claude"},
  {name:"ChatGPT",icon:"openai",className:"tool-openai"},
  {name:"Sage",icon:"sage",className:"tool-sage"},
  {name:"QuickBooks",icon:"quickbooks",className:"tool-quickbooks"},
  {name:"Microsoft Excel",icon:"excel",className:"tool-excel"},
  {name:"Gmail",icon:"gmail",className:"tool-gmail"},
  {name:"Teams",icon:"teams",className:"tool-teams"},
  {name:"Outlook",icon:"outlook",className:"tool-outlook"},
  {name:"Instagram",icon:"instagram",className:"tool-instagram"},
  {name:"Framer",icon:"framer",className:"tool-framer"},
] as const;

const outcomes=[
  {value:"↓",title:"Tâches manuelles",text:"Chaque étape supprimée est identifiée et documentée."},
  {value:"↑",title:"Temps à valeur",text:"Le temps récupéré est mesuré avant et après la solution."},
  {value:<svg className="outcome-flow-mark" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8.5c3-3 6 3 9 0s6-3 9 0"/><path d="M3 15.5c3-3 6 3 9 0s6-3 9 0"/></svg>,title:"Flux simplifié",text:"Des opérations qui s’enchaînent naturellement, sans friction ni complexité inutile."},
  {value:"↗",title:"Décisions accélérées",text:"Des indicateurs clairs pour agir au bon moment."},
];

export default function Home(){return <main className="home-experience">
  <ScrollAtmosphere/>
  <section className="home-hero" data-atmosphere="0">
    <div className="hero-scene" aria-hidden="true"/><div className="hero-starfield" aria-hidden="true"/>
    <div className="shell hero-grid"><div className="hero-copy"><p className="kicker hero-kicker">Opérations · Technologie · Croissance</p><h1>Faites avancer<br/><span>l’entreprise.</span><br/><em>Sur une même vague.</em></h1><p>Wavora relie vos chiffres, vos outils et vos décisions pour que toute l’entreprise avance avec plus de clarté.</p><Link className="primary-button" href="/reservation">Réserver une consultation <span>↗</span></Link></div><div className="hero-scroll-cue" aria-hidden="true"><span>Découvrir Wavora</span><i>↓</i></div></div>
    <svg className="hero-wave-seam" viewBox="0 0 1600 180" preserveAspectRatio="none" aria-hidden="true"><path d="M-80 105C194 4 379 202 665 88s457-31 703 30 318-16 360-54"/><path d="M-80 143C202 51 395 224 683 127s448-25 688 29 307-13 357-45"/></svg>
  </section>
  <section className="shell services-preview" data-atmosphere="1"><div className="section-title"><div><p className="kicker">Quatre leviers</p><h2>Un système qui<br/><em>avance avec vous.</em></h2></div><p>Des expertises connectées.<br/>Aucun service isolé.</p></div><div className="preview-grid">{services.map(service=><Link href="/services" className={`mini-service ${service.key}`} key={service.key}><div className="service-card-head"><span>{service.number}</span><div className="icon-box"><ServiceIcon type={service.key}/></div></div><div className="service-card-copy"><h3>{service.title}</h3><p>{service.short}</p><ul>{service.points.slice(0,2).map(point=><li key={point}>{point}</li>)}</ul></div><b>Explorer <i>↗</i></b></Link>)}</div></section>
  <section className="home-tools" data-atmosphere="2"><div className="shell"><p className="kicker">Votre écosystème</p><div className="home-tools-heading"><h2>On intègre les outils<br/><span>que vous utilisez déjà.</span></h2><p>Des plateformes qui s’alignent autour de votre façon de travailler, sans ajouter une couche de complexité.</p></div><div className="tool-marquee" aria-label="Outils utilisés et intégrés"><div className="tool-track"><div className="tool-set">{tools.map(tool=><div className={`tool-chip ${tool.className}`} aria-label={tool.name} key={tool.name}><ToolLogo tool={tool.icon}/></div>)}</div><div className="tool-set" aria-hidden="true">{tools.map(tool=><div className={`tool-chip ${tool.className}`} key={`loop-${tool.name}`}><ToolLogo tool={tool.icon}/></div>)}</div></div></div><p className="brand-note">Les marques et logos appartiennent à leurs propriétaires respectifs. Leur présence indique uniquement les outils avec lesquels Wavora peut travailler.</p></div></section>
  <ClientPlatformPreview/>
  <section className="impact-section" data-atmosphere="4"><div className="shell impact-heading"><div><p className="kicker">Résultats visés</p><h2>La performance<br/>se mesure.</h2></div><p>Pas de pourcentage inventé. Les objectifs sont chiffrés après un diagnostic de vos opérations.</p></div><div className="shell outcome-grid">{outcomes.map(item=><article key={item.title}><strong>{item.value}</strong><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
  <section className="booking-cta" data-atmosphere="5"><div className="shell"><p className="kicker">Le vrai résultat</p><h2>Du temps retrouvé.<br/><em>Pour ce qui compte.</em></h2><Link className="primary-button" href="/reservation">Réserver une consultation <span>↗</span></Link></div></section>
</main>}
