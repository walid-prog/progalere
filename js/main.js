/* =========================================================
   Wavora — interactions : thème clair/sombre, i18n, nav, reveal
   ========================================================= */

/* ---------- i18n (structure bilingue-ready) ---------- */
const I18N = {
  fr: {
    "nav.home": "Accueil", "nav.services": "Services",
    "nav.booking": "Réservation", "nav.about": "À propos",
    "cta.book": "Réserver une consultation", "cta.bookShort": "Réserver",
    "cta.services": "Voir les services",
  },
  en: { // à compléter plus tard (fallback automatique vers le FR)
    "nav.home": "Home", "nav.services": "Services",
    "nav.booking": "Booking", "nav.about": "About",
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
    if (dict[key] != null) el.textContent = dict[key];
    else if (I18N.fr[key] != null) el.textContent = I18N.fr[key];
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
  const themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () =>
      setTheme(currentTheme() === "dark" ? "light" : "dark")
    );
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
