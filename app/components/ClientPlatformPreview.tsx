import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import BrandLogo from "./BrandLogo";

type ModuleIconName = "overview" | "invoice" | "accounting" | "marketing" | "email";

function ModuleIcon({name}:{name:ModuleIconName}){
  if(name==="overview") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></svg>;
  if(name==="invoice") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10l3 3v15H7zM17 3v4h3M10 11h7M10 15h7M10 19h4"/></svg>;
  if(name==="accounting") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h16M6 20V9h12v11M9 13v3M12 11v5M15 8v8M5 9l7-5 7 5"/></svg>;
  if(name==="marketing") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 14 11-5v10L4 14Zm11-5 4-2v14l-4-2M7 15l1 5h4l-2-4"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v13H3zM3 7l9 7 9-7"/></svg>;
}

const modules=[
  {name:"Vue d’ensemble",icon:"overview" as const,active:true},
  {name:"Facturation",icon:"invoice" as const,count:"3"},
  {name:"Comptabilité",icon:"accounting" as const,count:"18"},
  {name:"Automatisations",icon:"marketing" as const,count:"4"},
  {name:"Marketing",icon:"email" as const,count:"2"},
];

export default function ClientPlatformPreview(){return <section className="platform-section" data-atmosphere="3">
  <ContainerScroll titleComponent={
    <div className="shell platform-intro">
      <div><p className="kicker">Espace client intégré</p><h2>Tout votre quotidien.<br/><em>Une seule vue.</em></h2></div>
      <div><p>Facturation, comptabilité, marketing et courriels travaillent enfin ensemble. Vous voyez ce qui avance, ce qui demande votre attention et ce qui peut être automatisé.</p><span className="preview-disclaimer">Aperçu illustratif de l’expérience Wavora</span></div>
    </div>
  }>
    <div className="platform-window" aria-label="Aperçu illustratif de la plateforme client Wavora">
      <div className="platform-topbar"><div className="platform-product"><BrandLogo label={false}/><span className="platform-concept-badge">Aperçu conceptuel</span></div><div className="sync-state"><i/>Une vision, plusieurs expertises</div></div>
      <div className="platform-body">
        <aside className="platform-nav"><span className="workspace-label">Mon entreprise</span><nav aria-label="Modules de la plateforme">{modules.map(module=><div className={`platform-nav-item${module.active?" active":""}`} key={module.name}><ModuleIcon name={module.icon}/><span>{module.name}</span>{module.count&&<b>{module.count}</b>}</div>)}</nav><div className="platform-help"><i>?</i><span><b>Besoin d’aide?</b>Votre équipe Wavora</span></div></aside>
        <div className="platform-dashboard">
          <header className="dashboard-head"><div><span>Bonjour, Marie.</span><h3>Voici votre journée.</h3><p>Les éléments qui demandent votre attention, réunis au même endroit.</p></div><div className="dashboard-date"><i/><span>Données fictives</span></div></header>
          <div className="dashboard-stats">
            <article><span>À recevoir</span><strong>12 480 $</strong><small><i className="trend-up">↗</i> 3 paiements attendus</small></article>
            <article><span>Dépenses à classer</span><strong>18</strong><small><i className="trend-good">✓</i> 94 % déjà rapprochées</small></article>
            <article><span>Tâches à valider</span><strong>6</strong><small><i className="trend-up">↗</i> 2 prioritaires aujourd’hui</small></article>
          </div>
          <div className="dashboard-grid">
            <article className="cashflow-card"><div className="card-heading"><div><span>Trésorerie</span><strong>Entrées et sorties</strong></div><small>6 derniers mois</small></div><div className="chart-wrap"><div className="chart-scale" aria-hidden="true"><span>30 k</span><span>20 k</span><span>10 k</span><span>0</span></div><svg viewBox="0 0 560 180" role="img" aria-label="Courbe de trésorerie ascendante sur six mois"><g className="platform-chart-grid"><path d="M20 20H545M20 65H545M20 110H545M20 155H545"/></g><path className="platform-chart-area" d="M20 136C72 125 97 135 143 111s84-8 127-23 70 4 112-30 91-18 163-42V155H20Z"/><path className="platform-chart-line" d="M20 136C72 125 97 135 143 111s84-8 127-23 70 4 112-30 91-18 163-42"/><g className="platform-chart-points"><circle cx="143" cy="111" r="5"/><circle cx="270" cy="88" r="5"/><circle cx="382" cy="58" r="5"/><circle cx="545" cy="16" r="6"/></g></svg><div className="chart-months"><span>Avr.</span><span>Mai</span><span>Juin</span><span>Juil.</span><span>Août</span><span>Sept.</span></div></div></article>
            <article className="inbox-card"><div className="card-heading"><div><span>À traiter</span><strong>Activité récente</strong></div><small>Exemples fictifs</small></div><div className="activity-list"><div className="activity-item active"><i className="activity-invoice"><ModuleIcon name="invoice"/></i><span><b>Facture #1048 payée</b><small>Classée automatiquement</small></span><time>Aujourd’hui</time></div><div className="activity-item"><i className="activity-email"><ModuleIcon name="email"/></i><span><b>8 dépenses à classer</b><small>Reçus importés depuis Outlook</small></span><time>À valider</time></div><div className="activity-item"><i className="activity-marketing"><ModuleIcon name="marketing"/></i><span><b>Campagne Instagram prête</b><small>Validation requise</small></span><time>À valider</time></div></div></article>
          </div>
          <div className="automation-strip"><div className="automation-title"><i>✦</i><span><b>Automatisations actives</b>3 scénarios en cours</span></div><div className="automation-flow"><span className="flow-node complete"><ModuleIcon name="invoice"/><b>Facture reçue</b><i>✓</i></span><em/><span className="flow-node processing"><ModuleIcon name="accounting"/><b>Classée</b><i/></span><em/><span className="flow-node"><ModuleIcon name="email"/><b>Avis envoyé</b></span></div></div>
        </div>
      </div>
    </div>
  </ContainerScroll>
</section>}
