import type { Metadata } from "next";
import Link from "next/link";
import ServiceIcon from "../components/ServiceIcon";
import { services } from "../service-data";
export const metadata: Metadata={title:"Services",description:"Les quatre expertises Wavora, de la comptabilité à la formation."};
const details={
  compta:"Une comptabilité tenue, comprise et utilisée pour mieux piloter l’entreprise.",
  auto:"Des processus plus fluides et des outils qui travaillent réellement ensemble.",
  strategie:"Une stratégie claire, mesurée et transformée en actions concrètes.",
  formation:"Des formations courtes et pratiques pour renforcer l’autonomie des équipes."
};
export default function ServicesPage(){return <main><section className="page-intro"><div className="shell"><p className="kicker">Quatre expertises</p><h1>Une expertise complète.<br/><em>Sans la complexité.</em></h1><p>Choisissez un besoin. Nous construisons la suite avec vous.</p></div></section><section className="shell service-showcase">{services.map(service=><article className={`service-row ${service.key}`} key={service.key}><div className="service-number">{service.number}</div><div className="service-visual"><ServiceIcon type={service.key}/><span className="visual-pulse"/></div><div className="service-content"><h2>{service.title}</h2><p>{details[service.key]}</p><ul>{service.points.map(point=><li key={point}>{point}</li>)}</ul></div></article>)}</section><section className="bottom-cta"><div className="shell"><h2>Besoin de clarifier<br/>la meilleure prochaine étape?</h2><Link className="primary-button" href="/reservation">Planifier une consultation <span>↗</span></Link></div></section></main>}
