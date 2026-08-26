#!/usr/bin/env node
'use strict';

/**
 * Build bilingue du site Wavora.
 *
 * Lit les pages sources dans src/ (contenant des marqueurs
 * <!-- include:partials/xxx.html -->), y injecte le contenu des partials
 * correspondants, puis écrit deux versions de chaque page :
 *
 *   - la version française à la racine (comportement historique, inchangé
 *     dans son mécanisme : aucune substitution de contenu, le HTML source
 *     est déjà rédigé en français et sert de sortie directe) ;
 *   - la version anglaise dans en/, en substituant statiquement, pour
 *     chaque élément portant un attribut data-i18n, le texte correspondant
 *     de I18N.en (lu directement dans js/main.js — source de vérité unique,
 *     jamais dupliquée), en réécrivant les liens internes vers leurs
 *     équivalents /en/..., et en ajustant <html lang>, le canonical,
 *     og:url et og:locale.
 *
 * Les deux versions reçoivent en plus un bloc <link rel="alternate"
 * hreflang="..."> (identique dans les deux langues) à l'emplacement du
 * marqueur <!-- hreflang --> de chaque page source.
 *
 * Zéro dépendance : uniquement les modules natifs de Node (fs, path).
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC_DIR = path.join(ROOT, 'src');
const OUT_DIR = ROOT;
const OUT_DIR_EN = path.join(ROOT, 'en');
const SITE_ORIGIN = 'https://wavora.ca';

const INCLUDE_RE = /<!--\s*include:(\S+)\s*-->/g;
const HREFLANG_MARKER = '<!-- hreflang -->';

// Pages connues du site — sert à la fois de whitelist pour la réécriture
// des liens internes (on ne touche à rien d'autre) et à la génération du
// sitemap / des clusters hreflang.
const PAGES = ['index.html', 'services.html', 'reservation.html', 'about.html', 'confidentialite.html'];
const PAGE_BASENAME_RE = new RegExp(
  `href="(${PAGES.map((p) => p.replace('.html', '')).join('|')})\\.html(#[^"]*)?"`,
  'g'
);

/* ---------- I18N : extraction depuis js/main.js (source de vérité unique) ---------- */

function extractI18N() {
  const mainJsPath = path.join(ROOT, 'js', 'main.js');
  const src = fs.readFileSync(mainJsPath, 'utf8');
  const declIdx = src.indexOf('const I18N');
  if (declIdx === -1) {
    throw new Error('Déclaration "const I18N" introuvable dans js/main.js');
  }
  const braceStart = src.indexOf('{', declIdx);
  let depth = 0;
  let i = braceStart;
  for (; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') {
      depth--;
      if (depth === 0) {
        i++;
        break;
      }
    }
  }
  const literal = src.slice(braceStart, i);
  // Le littéral est un objet JS valide (clés/valeurs entre guillemets doubles,
  // échappements JSON-compatibles) : on l'évalue directement, sans dépendance.
  const I18N = new Function(`return (${literal});`)();
  if (!I18N.fr || !I18N.en) {
    throw new Error('I18N.fr ou I18N.en introuvable après extraction depuis js/main.js');
  }
  return I18N;
}

/* ---------- Partials ---------- */

function readPartial(relPath, fromFile) {
  const full = path.join(ROOT, relPath);
  if (!fs.existsSync(full)) {
    throw new Error(
      `Partial introuvable : "${relPath}" (référencé depuis ${path.relative(ROOT, fromFile)})`
    );
  }
  const content = fs.readFileSync(full, 'utf8');
  // Le marqueur dans le fichier source porte déjà son propre saut de ligne ;
  // on retire celui de fin de partial pour ne pas en dupliquer un à l'injection.
  return content.endsWith('\n') ? content.slice(0, -1) : content;
}

function includePartials(src, srcPath) {
  return src.replace(INCLUDE_RE, (_match, relPath) => readPartial(relPath, srcPath));
}

/* ---------- hreflang ---------- */

function hreflangBlock(page) {
  const frUrl = `${SITE_ORIGIN}/${page}`;
  const enUrl = `${SITE_ORIGIN}/en/${page}`;
  return [
    `<link rel="alternate" hreflang="fr" href="${frUrl}" />`,
    `<link rel="alternate" hreflang="en" href="${enUrl}" />`,
    `<link rel="alternate" hreflang="x-default" href="${frUrl}" />`,
  ].join('\n  ');
}

function injectHreflang(html, page) {
  if (!html.includes(HREFLANG_MARKER)) {
    throw new Error(`Marqueur "${HREFLANG_MARKER}" introuvable pour la page ${page}`);
  }
  return html.replace(HREFLANG_MARKER, hreflangBlock(page));
}

/* ---------- Sélecteur de langue (liens FR/EN) ---------- */

function injectLangLinks(html, page, targetLang) {
  const frUrl = targetLang === 'fr' ? page : `/${page}`;
  const enUrl = `/en/${page}`;
  if (!html.includes('__FR_URL__') || !html.includes('__EN_URL__')) {
    throw new Error(`Marqueurs de sélecteur de langue introuvables pour la page ${page}`);
  }
  return html.split('__FR_URL__').join(frUrl).split('__EN_URL__').join(enUrl);
}

/* ---------- Substitution statique data-i18n (build-time, pour l'anglais) ---------- */

function applyI18nStatic(html, dict, page) {
  const tagRe = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)((?:\s+[^<>]*)?)>/g;
  const out = [];
  let cursor = 0;
  let m;

  while ((m = tagRe.exec(html)) !== null) {
    const [full, closing, tagName, attrs] = m;
    if (closing) continue;
    const dataI18nMatch = /\sdata-i18n="([^"]+)"/.exec(attrs);
    if (!dataI18nMatch) continue;

    const key = dataI18nMatch[1];
    const openEnd = m.index + full.length;

    // Cherche la balise fermante correspondante (même nom de balise),
    // en tenant compte d'une éventuelle imbrication du même nom.
    let depth = 1;
    tagRe.lastIndex = openEnd;
    let closeStart = -1;
    let closeEnd = -1;
    let inner;
    while ((inner = tagRe.exec(html)) !== null) {
      if (inner[2].toLowerCase() !== tagName.toLowerCase()) continue;
      if (inner[1] === '/') {
        depth--;
        if (depth === 0) {
          closeStart = inner.index;
          closeEnd = inner.index + inner[0].length;
          break;
        }
      } else {
        depth++;
      }
    }
    if (closeStart === -1) {
      throw new Error(`Balise fermante introuvable pour data-i18n="${key}" (<${tagName}>) — page ${page}`);
    }

    const value = dict[key];
    if (value == null) {
      throw new Error(`Clé i18n manquante dans I18N.en : "${key}" (page ${page})`);
    }

    out.push(html.slice(cursor, openEnd));
    out.push(value);
    cursor = closeStart;
    tagRe.lastIndex = closeEnd;
  }
  out.push(html.slice(cursor));
  return out.join('');
}

/* ---------- Réécriture pour la version anglaise ---------- */

function replaceOnce(html, search, replacement, label, page) {
  if (!html.includes(search)) {
    throw new Error(`Motif introuvable ("${label}") pour la page ${page} : ${search}`);
  }
  return html.replace(search, replacement);
}

function rewriteForEnglish(html, page) {
  let out = html;

  out = replaceOnce(out, '<html lang="fr">', '<html lang="en">', 'html lang', page);

  const frUrl = `${SITE_ORIGIN}/${page}`;
  const enUrl = `${SITE_ORIGIN}/en/${page}`;
  out = replaceOnce(
    out,
    `<link rel="canonical" href="${frUrl}" />`,
    `<link rel="canonical" href="${enUrl}" />`,
    'canonical',
    page
  );
  out = replaceOnce(
    out,
    `<meta property="og:url" content="${frUrl}" />`,
    `<meta property="og:url" content="${enUrl}" />`,
    'og:url',
    page
  );
  out = replaceOnce(
    out,
    `<meta property="og:locale" content="fr_CA" />`,
    `<meta property="og:locale" content="en_CA" />`,
    'og:locale',
    page
  );

  out = replaceOnce(out, 'href="css/styles.css"', 'href="/css/styles.css"', 'css path', page);
  out = replaceOnce(out, 'src="js/main.js"', 'src="/js/main.js"', 'js path', page);

  // Liens internes (nav, footer, boutons, liens intégrés dans le contenu
  // i18n comme la réponse FAQ pointant vers la politique de confidentialité)
  // vers leur équivalent /en/....
  out = out.replace(PAGE_BASENAME_RE, (_m, base, anchor) => `href="/en/${base}.html${anchor || ''}"`);

  return out;
}

/* ---------- Build d'une page ---------- */

function buildPage(page, I18N) {
  const srcPath = path.join(SRC_DIR, page);
  const raw = fs.readFileSync(srcPath, 'utf8');
  const assembled = includePartials(raw, srcPath);
  const withHreflang = injectHreflang(assembled, page);

  // Français — sortie à la racine, comportement inchangé : aucune
  // substitution de contenu (le HTML source est déjà en français).
  const fr = injectLangLinks(withHreflang, page, 'fr');
  fs.writeFileSync(path.join(OUT_DIR, page), fr, 'utf8');
  console.log(`  src/${page} -> ${page}`);

  // Anglais — sortie dans en/, contenu i18n substitué statiquement puis
  // liens internes et champs de tête réécrits pour la version anglaise.
  let en = injectLangLinks(withHreflang, page, 'en');
  en = applyI18nStatic(en, I18N.en, page);
  en = rewriteForEnglish(en, page);
  fs.writeFileSync(path.join(OUT_DIR_EN, page), en, 'utf8');
  console.log(`  src/${page} -> en/${page}`);
}

function main() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error(`Dossier introuvable : ${path.relative(ROOT, SRC_DIR)}/`);
    process.exit(1);
  }

  const pages = fs.readdirSync(SRC_DIR).filter((f) => f.endsWith('.html'));
  if (pages.length === 0) {
    console.warn(`Aucune page .html trouvée dans ${path.relative(ROOT, SRC_DIR)}/.`);
    return;
  }

  const missing = pages.filter((p) => !PAGES.includes(p));
  if (missing.length > 0) {
    throw new Error(
      `Page(s) présente(s) dans src/ mais absente(s) de la liste PAGES de build.js : ${missing.join(', ')}`
    );
  }

  fs.mkdirSync(OUT_DIR_EN, { recursive: true });

  const I18N = extractI18N();

  console.log('Build bilingue des pages Wavora :');
  for (const page of pages) {
    buildPage(page, I18N);
  }
  console.log(`Terminé — ${pages.length} page(s) générée(s) x 2 langues (fr, en).`);
}

try {
  main();
} catch (err) {
  console.error(`Échec du build : ${err.message}`);
  process.exit(1);
}
