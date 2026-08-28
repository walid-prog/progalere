import ServiceIcon from "./ServiceIcon";
import { services } from "../service-data";

export default function ConnectedFlow(){return <section className="connected-flow-section" data-atmosphere="2">
  <div className="shell connected-flow-intro"><div><p className="kicker">Un seul mouvement</p><h2>Quatre expertises.<br/>Un même flux.</h2></div><p>Les chiffres éclairent les décisions. Les outils accélèrent l’exécution. La formation rend l’équipe autonome.</p></div>
  <div className="shell flow-console"><div className="flow-console-head"><span>Wavora · Système opérationnel</span><span className="flow-live"><i/>Flux actif</span></div><div className="flow-ribbon" aria-label="Les quatre expertises Wavora travaillent ensemble">
    {services.map(service=><div className="flow-unit-wrap" key={service.key}><div className={`flow-unit ${service.key}`}><span><ServiceIcon type={service.key}/></span><div><small>{service.number}</small><strong>{service.title}</strong></div></div></div>)}
    <svg className="flow-current" viewBox="0 0 1200 250" preserveAspectRatio="none" aria-hidden="true">
      <path className="flow-current-base" d="M-30 132C108 36 224 221 374 122s251-41 377 25 246 32 361-29 139-21 158-6"/>
      <path className="flow-current-motion" d="M-30 132C108 36 224 221 374 122s251-41 377 25 246 32 361-29 139-21 158-6"/>
      <path className="flow-current-base flow-current-base-secondary" d="M-30 178C128 89 235 234 389 164s244-29 372 15 237 14 352-33 137-9 157 0"/>
      <path className="flow-current-motion flow-current-motion-secondary" d="M-30 178C128 89 235 234 389 164s244-29 372 15 237 14 352-33 137-9 157 0"/>
    </svg>
  </div>
</div>
</section>}
