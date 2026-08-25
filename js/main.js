/* =========================================================
   Wavora — interactions : thème clair/sombre, i18n, nav, reveal
   ========================================================= */

/* ---------- i18n ---------- */
const I18N = {
  fr: {
    "nav.home": "Accueil", "nav.services": "Services",
    "nav.booking": "Réservation", "nav.about": "À propos",
    "cta.book": "Réserver une consultation", "cta.bookShort": "Réserver",
    "cta.services": "Voir les services",
    "cta.tagline": "On vous amène, tranquillement, vers plus de temps libre.",

    "footer.tagline": "Services professionnels pour les PME, travailleurs autonomes et organisations.",
    "footer.navHeading": "Navigation", "footer.servicesHeading": "Services", "footer.contactHeading": "Contact",
    "footer.bookLink": "Planifier une consultation", "footer.rights": "© 2025 Wavora. Tous droits réservés.", "footer.country": "Canada",

    "svc.compta.title": "Comptabilité opérationnelle", "svc.compta.short": "Vos chiffres à jour et lisibles, sans friction.",
    "svc.auto.title": "Automatisation &amp; digitalisation", "svc.auto.short": "Moins de tâches manuelles, plus d'impact.",
    "svc.strat.title": "Stratégie &amp; marketing", "svc.strat.short": "Une direction claire, des résultats mesurables.",
    "svc.form.title": "Formations professionnelles", "svc.form.short": "Des équipes autonomes et outillées.",

    "home.eyebrow": "PME · Travailleurs autonomes · Organisations",
    "home.h1": "Vos opérations, <em>plus claires</em> et plus modernes.",
    "home.promise": "Comptabilité, automatisation, stratégie et formations, réunies sous un même toit.",
    "home.services.eyebrow": "Nos services", "home.services.h2": "Quatre expertises, un seul partenaire.",

    "platform.eyebrow": "Notre approche", "platform.h2": "Des solutions sur mesure, propulsées par l'IA, guidées par des humains.",
    "platform.lead": "Chaque service est personnalisé et peut être connecté à vos outils. L'IA optimise le travail répétitif, l'expertise humaine reste derrière chaque décision.",
    "flow.doc.title": "Nouveau document", "flow.doc.desc": "Une facture, un reçu, une donnée qui entre dans le système.",
    "flow.ai.title": "Analyse par l'IA", "flow.ai.desc": "Catégorisation, validation et priorisation automatiques.",
    "flow.tag1": "Routine", "flow.entry.title": "Écriture comptable", "flow.entry.desc": "Classée et rapprochée sans intervention.",
    "flow.tag2": "À valider", "flow.notif.title": "Notification à l'équipe", "flow.notif.desc": "Un message clair, au bon moment.",
    "platform.modules.caption": "Des modules classiques, connectés selon vos besoins",
    "platform.module1": "Factures", "platform.module2": "Marketing", "platform.module3": "Courriels", "platform.module4": "Documents",

    "kpi.eyebrow": "Pourquoi maintenant", "kpi.h2": "Ce que l'IA change déjà pour les PME.",
    "kpi.item1.label": "du temps d'un dirigeant part en tâches administratives. On vous le rend.",
    "kpi.item2.label": "de productivité dès la première année d'automatisation.",
    "kpi.item3.label": "de chiffre d'affaires pour 2 PME sur 3 qui adoptent l'IA.",
    "kpi.item4.label": "de coûts opérationnels grâce aux bons outils et processus.",
    "kpi.note": "Indicateurs de marché 2024 et 2025&nbsp;: le potentiel d'une organisation qui digitalise et intègre l'IA.",

    "home.cta.title": "Prêt à y voir plus clair&nbsp;?", "home.cta.desc": "Une première consultation pour cerner vos besoins, sans engagement.",

    "services.eyebrow": "Services", "services.h2": "Tout ce dont votre entreprise a besoin, réuni.",
    "services.lead": "Quatre expertises complémentaires, chacune avec sa propre couleur, pensées pour travailler ensemble.",

    "svc1.tag": "Service 01 · Comptabilité", "svc1.h2": "Comptabilité opérationnelle",
    "svc1.desc": "De la tenue de livres aux déclarations, en passant par la paie et le conseil&nbsp;: vos chiffres tenus à jour, pour décider sur des bases solides.",
    "svc1.p1": "Tenue de livres", "svc1.p2": "Rapprochements", "svc1.p3": "TPS &amp; TVQ", "svc1.p4": "Paie",
    "svc1.p5": "Déclarations personnelles", "svc1.p6": "Déclarations de société", "svc1.p7": "Fiducies", "svc1.p8": "Service conseil",

    "svc2.tag": "Service 02 · Automatisation", "svc2.h2": "Automatisation &amp; digitalisation",
    "svc2.desc": "On connecte vos logiciels, on automatise la facturation et le traitement de documents, et on déploie des assistants IA, avec une expertise terrain acquise sur des dizaines de PME.",
    "svc2.p1": "Flux automatisés", "svc2.p2": "Intégrations", "svc2.p3": "Facturation automatisée",
    "svc2.p4": "Traitement de documents", "svc2.p5": "Tableaux de bord", "svc2.p6": "Assistants IA",

    "svc3.tag": "Service 03 · Stratégie", "svc3.h2": "Stratégie &amp; marketing",
    "svc3.desc": "Positionnement, contenu, publicité et visibilité&nbsp;: une direction claire et des actions concrètes pour attirer les bons clients.",
    "svc3.p1": "Positionnement", "svc3.p2": "Image de marque", "svc3.p3": "Création de contenu",
    "svc3.p4": "Publicité", "svc3.p5": "SEO", "svc3.p6": "Visibilité sur les IA",

    "svc4.tag": "Service 04 · Formations", "svc4.h2": "Formations professionnelles",
    "svc4.desc": "En ligne ou en présentiel, on outille vos équipes pour qu'elles deviennent autonomes sur leurs outils, leurs chiffres et leurs processus.",
    "svc4.p1": "Comptabilité", "svc4.p2": "Outils numériques", "svc4.p3": "IA &amp; productivité",
    "svc4.p4": "En ligne", "svc4.p5": "En présentiel", "svc4.p6": "Sur mesure",

    "services.cta.title": "Un besoin précis en tête&nbsp;?", "services.cta.desc": "Parlons-en. On identifie ensemble le service, seul ou combiné, qui vous convient.",

    "booking.eyebrow": "Réservation", "booking.h1": "Planifions une consultation.",
    "booking.lead": "Choisissez un créneau qui vous convient. Simple, direct, sans engagement.",
    "booking.step1.title": "Choisissez un moment", "booking.step1.desc": "Un premier échange de 30 minutes, en visio ou par téléphone.",
    "booking.step2.title": "On cerne vos besoins", "booking.step2.desc": "On écoute votre contexte et on identifie les priorités.",
    "booking.step3.title": "Vous repartez avec un plan", "booking.step3.desc": "Des pistes concrètes, adaptées à votre réalité.",
    "booking.calendarBtn": "Ouvrir le calendrier",
    "booking.note": "Vous préférez écrire&nbsp;? <a href=\"mailto:bonjour@wavora.ca\" style=\"color:var(--c-auto);font-weight:600\">bonjour@wavora.ca</a>",

    "about.eyebrow": "À propos", "about.h1": "Un duo, une même exigence de qualité.",
    "about.lead": "Wavora, c'est la rencontre de deux mondes&nbsp;: la <strong>finance</strong> et la <strong>marque</strong>. Un ancien auditeur passé au service direct des PME et une stratège issue du marketing. Cofondateurs, épaulés par une équipe de spécialistes.",
    "about.who.eyebrow": "Qui sommes-nous", "about.who.h2": "La finance et la marque, sous un même toit.",
    "about.walid.role": "Comptabilité &amp; automatisation", "about.walid.name": "Walid B.",
    "about.walid.desc": "En voie d'être <strong>CPA</strong> et ancien auditeur en cabinet, il a accompagné des PME de secteurs variés (construction, commerce, services, santé, tech, OBNL, e-commerce…) en comptabilité comme en automatisation, une expertise forgée en freelance sur des mandats d'optimisation de processus. Tenue de livres, intégrations sur mesure, rigueur scientifique et goût d'expliquer chaque étape.",
    "about.rayane.role": "Stratégie &amp; projets", "about.rayane.name": "Rayane B.",
    "about.rayane.desc": "À la tête d'une agence marketing, elle a accompagné des dizaines d'entreprises&nbsp;: positionnement de marque, campagnes, contenu, publicité digitale, sites et CRM. Diplômée de <strong>HEC</strong> (gestion de projets &amp; marketing). Claire, structurée et orientée résultats.",
    "about.combo.role": "Notre complémentarité", "about.combo.title": "Finance + marque.",
    "about.combo.desc": "Des décisions appuyées sur les données, une exécution cohérente, et un seul duo de proximité pour avancer plus vite, sans jongler entre plusieurs prestataires.",
    "about.network.role": "Notre réseau", "about.network.title": "Une expertise élargie.",
    "about.network.desc": "Selon le besoin, nous collaborons avec des CPA, fiscalistes, informaticiens et développeurs partenaires. Vous gardez un point de contact unique chez Wavora, et des livrables documentés.",
    "about.approach.eyebrow": "L'approche", "about.approach.h2": "Trois principes, appliqués partout.",
    "about.value1.title": "Clarté", "about.value1.desc": "Des chiffres et des décisions que vous comprenez, sans jargon.",
    "about.value2.title": "Efficacité", "about.value2.desc": "Moins de temps perdu, plus d'énergie sur ce qui fait avancer.",
    "about.value3.title": "Solutions concrètes", "about.value3.desc": "Des recommandations applicables dès demain, pas de théorie.",
    "about.cta.title": "Faisons connaissance.", "about.cta.desc": "Le meilleur moyen de voir si nous sommes faits pour travailler ensemble&nbsp;: en parler.",
  },
  en: {
    "nav.home": "Home", "nav.services": "Services",
    "nav.booking": "Booking", "nav.about": "About",
    "cta.book": "Book a consultation", "cta.bookShort": "Book",
    "cta.services": "See our services",
    "cta.tagline": "We guide you, gently, toward more free time.",

    "footer.tagline": "Professional services for SMBs, self-employed professionals, and organizations.",
    "footer.navHeading": "Navigation", "footer.servicesHeading": "Services", "footer.contactHeading": "Contact",
    "footer.bookLink": "Schedule a consultation", "footer.rights": "© 2025 Wavora. All rights reserved.", "footer.country": "Canada",

    "svc.compta.title": "Operational accounting", "svc.compta.short": "Your numbers, current and clear, without friction.",
    "svc.auto.title": "Automation &amp; digitalization", "svc.auto.short": "Fewer manual tasks, more impact.",
    "svc.strat.title": "Strategy &amp; marketing", "svc.strat.short": "A clear direction, measurable results.",
    "svc.form.title": "Professional training", "svc.form.short": "Autonomous, well-equipped teams.",

    "home.eyebrow": "SMBs · Self-employed · Organizations",
    "home.h1": "Your operations, <em>clearer</em> and more modern.",
    "home.promise": "Accounting, automation, strategy, and training, brought together under one roof.",
    "home.services.eyebrow": "Our services", "home.services.h2": "Four areas of expertise, one partner.",

    "platform.eyebrow": "Our approach", "platform.h2": "Custom solutions, powered by AI, guided by people.",
    "platform.lead": "Every service is personalized and can be connected to your tools. AI optimizes repetitive work, human expertise stays behind every decision.",
    "flow.doc.title": "New document", "flow.doc.desc": "An invoice, a receipt, a piece of data entering the system.",
    "flow.ai.title": "AI analysis", "flow.ai.desc": "Automatic categorization, validation, and prioritization.",
    "flow.tag1": "Routine", "flow.entry.title": "Accounting entry", "flow.entry.desc": "Classified and reconciled with no manual work.",
    "flow.tag2": "Needs review", "flow.notif.title": "Team notification", "flow.notif.desc": "A clear message, at the right moment.",
    "platform.modules.caption": "Classic modules, connected to fit your needs",
    "platform.module1": "Invoices", "platform.module2": "Marketing", "platform.module3": "Emails", "platform.module4": "Documents",

    "kpi.eyebrow": "Why now", "kpi.h2": "What AI is already changing for SMBs.",
    "kpi.item1.label": "of a leader's time goes to admin tasks. We give it back.",
    "kpi.item2.label": "productivity gain in the first year of automation.",
    "kpi.item3.label": "revenue growth for 2 out of 3 SMBs adopting AI.",
    "kpi.item4.label": "lower operating costs with the right tools and processes.",
    "kpi.note": "Market indicators, 2024 and 2025&nbsp;: the potential of an organization that digitalizes and adopts AI.",

    "home.cta.title": "Ready for more clarity&nbsp;?", "home.cta.desc": "A first consultation to understand your needs, no commitment.",

    "services.eyebrow": "Services", "services.h2": "Everything your business needs, in one place.",
    "services.lead": "Four complementary areas of expertise, each with its own color, designed to work together.",

    "svc1.tag": "Service 01 · Accounting", "svc1.h2": "Operational accounting",
    "svc1.desc": "From bookkeeping to tax filings, payroll, and advisory&nbsp;: your numbers kept current, so you can decide on solid ground.",
    "svc1.p1": "Bookkeeping", "svc1.p2": "Reconciliations", "svc1.p3": "GST &amp; QST", "svc1.p4": "Payroll",
    "svc1.p5": "Personal tax returns", "svc1.p6": "Corporate tax returns", "svc1.p7": "Trusts", "svc1.p8": "Advisory",

    "svc2.tag": "Service 02 · Automation", "svc2.h2": "Automation &amp; digitalization",
    "svc2.desc": "We connect your software, automate invoicing and document processing, and deploy AI assistants, backed by hands-on experience across dozens of SMBs.",
    "svc2.p1": "Automated workflows", "svc2.p2": "Integrations", "svc2.p3": "Automated invoicing",
    "svc2.p4": "Document processing", "svc2.p5": "Dashboards", "svc2.p6": "AI assistants",

    "svc3.tag": "Service 03 · Strategy", "svc3.h2": "Strategy &amp; marketing",
    "svc3.desc": "Positioning, content, advertising, and visibility&nbsp;: a clear direction and concrete actions to attract the right clients.",
    "svc3.p1": "Positioning", "svc3.p2": "Brand identity", "svc3.p3": "Content creation",
    "svc3.p4": "Advertising", "svc3.p5": "SEO", "svc3.p6": "AI search visibility",

    "svc4.tag": "Service 04 · Training", "svc4.h2": "Professional training",
    "svc4.desc": "Online or in person, we equip your teams to become autonomous with their tools, numbers, and processes.",
    "svc4.p1": "Accounting", "svc4.p2": "Digital tools", "svc4.p3": "AI &amp; productivity",
    "svc4.p4": "Online", "svc4.p5": "In person", "svc4.p6": "Custom-built",

    "services.cta.title": "Got something specific in mind&nbsp;?", "services.cta.desc": "Let's talk. Together we'll identify the service, or combination, that fits.",

    "booking.eyebrow": "Booking", "booking.h1": "Let's plan a consultation.",
    "booking.lead": "Pick a time that works for you. Simple, direct, no commitment.",
    "booking.step1.title": "Choose a time", "booking.step1.desc": "A first 30-minute conversation, by video or phone.",
    "booking.step2.title": "We identify your needs", "booking.step2.desc": "We listen to your context and pinpoint the priorities.",
    "booking.step3.title": "You leave with a plan", "booking.step3.desc": "Concrete next steps, adapted to your reality.",
    "booking.calendarBtn": "Open the calendar",
    "booking.note": "Prefer to write&nbsp;? <a href=\"mailto:bonjour@wavora.ca\" style=\"color:var(--c-auto);font-weight:600\">bonjour@wavora.ca</a>",

    "about.eyebrow": "About", "about.h1": "A duo, one shared standard of quality.",
    "about.lead": "Wavora is where two worlds meet&nbsp;: <strong>finance</strong> and <strong>brand</strong>. A former auditor now working directly with SMBs, and a strategist with a marketing background. Co-founders, backed by a team of specialists.",
    "about.who.eyebrow": "Who we are", "about.who.h2": "Finance and brand, under one roof.",
    "about.walid.role": "Accounting &amp; automation", "about.walid.name": "Walid B.",
    "about.walid.desc": "On track to become a <strong>CPA</strong> and a former audit firm auditor, he has supported SMBs across many industries (construction, retail, services, health, tech, non-profits, e-commerce…) in both accounting and automation, an expertise built freelance on process-optimization mandates. Bookkeeping, custom integrations, scientific rigor, and a knack for explaining every step.",
    "about.rayane.role": "Strategy &amp; projects", "about.rayane.name": "Rayane B.",
    "about.rayane.desc": "Having led a marketing agency, she has supported dozens of businesses&nbsp;: brand positioning, campaigns, content, digital advertising, websites, and CRM. A graduate of <strong>HEC</strong> (project management &amp; marketing). Clear, structured, and results-driven.",
    "about.combo.role": "Our complementarity", "about.combo.title": "Finance + brand.",
    "about.combo.desc": "Decisions backed by data, consistent execution, and a single close-knit duo to help you move faster, without juggling multiple providers.",
    "about.network.role": "Our network", "about.network.title": "Expertise that extends further.",
    "about.network.desc": "When needed, we collaborate with partner CPAs, tax specialists, IT professionals, and developers. You keep a single point of contact at Wavora, and documented deliverables.",
    "about.approach.eyebrow": "Our approach", "about.approach.h2": "Three principles, applied everywhere.",
    "about.value1.title": "Clarity", "about.value1.desc": "Numbers and decisions you actually understand, no jargon.",
    "about.value2.title": "Efficiency", "about.value2.desc": "Less time wasted, more energy on what moves things forward.",
    "about.value3.title": "Concrete solutions", "about.value3.desc": "Recommendations you can apply tomorrow, not theory.",
    "about.cta.title": "Let's get to know each other.", "about.cta.desc": "The best way to see if we're a fit&nbsp;: talk about it.",
  },
};
const LANG_KEY = "wavora-lang";
const THEME_KEY = "wavora-theme";

function getLang() {
  try { const s = localStorage.getItem(LANG_KEY); if (s === "fr" || s === "en") return s; } catch (e) {}
  return "fr";
}
function setLang(lang) {
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const dict = I18N[lang] || {};
    if (dict[key] != null) el.innerHTML = dict[key];
    else if (I18N.fr[key] != null) el.innerHTML = I18N.fr[key];
  });
  document.querySelectorAll(".lang button").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.lang === lang);
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
}

/* ---------- Thème ---------- */
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
}
function currentTheme() {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr) return attr;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

document.addEventListener("DOMContentLoaded", () => {
  setLang(getLang());
  document.querySelectorAll(".lang button").forEach((b) =>
    b.addEventListener("click", () => setLang(b.dataset.lang))
  );

  // Interrupteur clair/sombre
  const themeBtn = document.querySelector(".switch");
  if (themeBtn) {
    themeBtn.setAttribute("aria-checked", String(currentTheme() === "dark"));
    themeBtn.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      setTheme(next);
      themeBtn.setAttribute("aria-checked", String(next === "dark"));
    });
  }

  // Nav mobile
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll(".nav__links a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  // Lien actif
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a").forEach((a) => {
    if (a.getAttribute("href") === here) a.classList.add("is-active");
  });

  // Révélation au défilement
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
});
