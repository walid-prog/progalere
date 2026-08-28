export const services = [
  { key: "compta", number: "01", title: "Comptabilité opérationnelle", short: "Des chiffres clairs pour décider sans hésiter.", points: ["Tenue de livres", "TPS / TVQ", "Rapports clairs"] },
  { key: "auto", number: "02", title: "Automatisation & digitalisation", short: "Moins de répétition. Plus de temps utile.", points: ["Processus", "Intégrations", "Rapports automatisés"] },
  { key: "strategie", number: "03", title: "Stratégie & marketing", short: "Une direction nette, activée et mesurée.", points: ["Positionnement", "Acquisition", "Analyse"] },
  { key: "formation", number: "04", title: "Formations professionnelles", short: "Des équipes autonomes et mieux outillées.", points: ["Comptabilité", "Productivité & IA", "Performance"] },
] as const;

export type ServiceKey = (typeof services)[number]["key"];
