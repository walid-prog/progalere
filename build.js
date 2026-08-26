#!/usr/bin/env node
'use strict';

/**
 * Build minimal du site Wavora.
 *
 * Lit les pages sources dans src/ (contenant des marqueurs
 * <!-- include:partials/xxx.html -->), y injecte le contenu des partials
 * correspondants, puis écrit le HTML final à la racine du projet — au même
 * endroit et sous le même nom que les fichiers déployés aujourd'hui.
 *
 * Zéro dépendance : uniquement les modules natifs de Node (fs, path).
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC_DIR = path.join(ROOT, 'src');
const OUT_DIR = ROOT;

const INCLUDE_RE = /<!--\s*include:(\S+)\s*-->/g;

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

function buildFile(srcPath, outPath) {
  const src = fs.readFileSync(srcPath, 'utf8');
  const out = src.replace(INCLUDE_RE, (_match, relPath) => readPartial(relPath, srcPath));
  fs.writeFileSync(outPath, out, 'utf8');
  console.log(`  ${path.relative(ROOT, srcPath)} -> ${path.relative(ROOT, outPath)}`);
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

  console.log('Build des pages Wavora :');
  for (const page of pages) {
    buildFile(path.join(SRC_DIR, page), path.join(OUT_DIR, page));
  }
  console.log(`Terminé — ${pages.length} page(s) générée(s).`);
}

try {
  main();
} catch (err) {
  console.error(`Échec du build : ${err.message}`);
  process.exit(1);
}
