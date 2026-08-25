/* =========================================================
   Wavora — interactions + i18n (structure bilingue-ready)
   Le français est complet. L'anglais est prévu : ajouter les
   clés dans I18N.en ci-dessous suffira à l'activer.
   ========================================================= */

const I18N = {
  fr: {
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.booking": "Réservation",
    "nav.about": "À propos",
    "cta.book": "Réserver une consultation",
    "cta.bookShort": "Réserver",
    "cta.services": "Voir les services",
  },
  // --- Anglais : à compléter plus tard (fallback automatique vers le FR) ---
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.booking": "Booking",
    "nav.about": "About",
  },
};

const STORAGE_KEY = "wavora-lang";

function getLang() {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === "fr" || s === "en") return s;
  } catch (e) {}
  return "fr";
}

function setLang(lang) {
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  document.documentElement.setAttribute("lang", lang);

  // Applique les traductions disponibles, sinon garde le FR (fallback)
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const dict = I18N[lang] || {};
    if (dict[key] != null) el.textContent = dict[key];
    else if (I18N.fr[key] != null) el.textContent = I18N.fr[key];
  });

  document.querySelectorAll(".lang button").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.lang === lang);
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // ---- Langue ----
  setLang(getLang());
  document.querySelectorAll(".lang button").forEach((b) => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
  });

  // ---- Nav mobile ----
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

  // ---- Lien actif (basé sur le fichier courant) ----
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a").forEach((a) => {
    if (a.getAttribute("href") === here) a.classList.add("is-active");
  });

  // ---- Révélation au défilement ----
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
});
