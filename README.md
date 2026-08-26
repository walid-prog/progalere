# Wavora — Site web

Site vitrine de **Wavora**, entreprise de services professionnels pour les PME,
travailleurs autonomes et organisations au Québec.

Site statique (HTML / CSS / JS, sans framework front-end), avec une seule étape
de build — sans dépendance npm — qui assemble le header et le footer communs
dans chaque page, **et génère deux versions de chaque page : le français à la
racine, l'anglais dans `en/`** (voir « Bilingue » plus bas). Les fichiers HTML
déployés (racine et `en/`) sont **générés** ; on ne les édite jamais
directement.

## Où éditer

| Pour changer… | Éditer… |
|---|---|
| Le header ou le footer (identiques sur toutes les pages) | `partials/header.html`, `partials/footer.html` |
| Le contenu propre à une page (texte, `<head>`, sections) | `src/index.html`, `src/services.html`, `src/about.html`, `src/reservation.html`, `src/confidentialite.html` |
| Les textes traduisibles (`data-i18n`) | `I18N.fr` / `I18N.en` dans `js/main.js` — c'est la seule source de vérité pour le contenu anglais, appliquée au HTML **au moment du build**, pas dans le navigateur |
| Les styles | `css/styles.css` |
| Le JS (thème, menu mobile, lien actif/langue actif, reveal) | `js/main.js` |

Après toute modification dans `partials/`, `src/` ou `I18N` (`js/main.js`),
régénérer le HTML final :

```
npm run build
```

(équivalent à `node build.js` — aucune dépendance npm n'est installée.)

Le script lit chaque page de `src/`, remplace les marqueurs
`<!-- include:partials/xxx.html -->` par le contenu du partial correspondant,
puis écrit **deux sorties par page** :

- la version française à la racine (`index.html`, `services.html`, …) —
  le HTML source est déjà rédigé en français, aucune substitution n'est faite ;
- la version anglaise dans `en/` (`en/index.html`, `en/services.html`, …) —
  chaque élément `data-i18n` reçoit le texte correspondant de `I18N.en`, les
  liens internes sont réécrits vers leurs équivalents `/en/...`, et `<html
  lang>`, le `canonical` et `og:url`/`og:locale` sont ajustés.

**Committez les fichiers générés** (racine **et** `en/`) en même temps que vos
changements dans `src/`/`partials/`/`I18N` : c'est ce que GitHub Pages (ou tout
autre hébergeur de fichiers statiques) sert directement, sans exécuter de
build côté serveur.

## Pages

| Fichier généré (déployé) | Source | Contenu |
|---|---|---|
| `index.html` | `src/index.html` | Accueil — hero, aperçu des 4 services, crédibilité, CTA |
| `services.html` | `src/services.html` | Services détaillés + bandeau des outils intégrés |
| `reservation.html` | `src/reservation.html` | Prise de rendez-vous (lien Calendly) |
| `about.html` | `src/about.html` | Histoire du fondateur, parcours, approche |

## Identité visuelle

Une couleur distincte par service, réutilisée partout (icônes, accents, cartes) —
définie dans `css/styles.css` :

| Service | Variable CSS | Couleur |
|---|---|---|
| Comptabilité opérationnelle | `--c-compta` | teal `#0ea5a4` |
| Automatisation & digitalisation | `--c-auto` | indigo `#4f46e5` |
| Stratégie & marketing | `--c-strat` | orange `#f97316` |
| Formations | `--c-form` | violet `#a855f7` |

Visuels : illustrations SVG sur mesure (pas d'images stock), motif de vagues
rappelant le nom « Wavora ».

## Bilingue

Chaque page existe en deux URLs distinctes et indexables séparément :
`services.html` (français) et `en/services.html` (anglais). Le contenu
`data-i18n` est appliqué **au build**, pas au chargement dans le navigateur —
il n'y a plus de réécriture JS du DOM ni de préférence de langue mémorisée
côté client. Le sélecteur FR/EN dans le header est une paire de liens `<a>`
générés par `build.js`, chacun pointant vers l'équivalent de la page courante
dans l'autre langue (ex. sur `services.html`, le lien EN pointe vers
`/en/services.html` ; sur `/en/services.html`, le lien FR pointe vers
`/services.html`). `js/main.js` ne fait plus qu'afficher lequel des deux est
« actif » selon `<html lang>` de la page courante.

Chaque page (fr et en) porte un cluster `<link rel="alternate" hreflang="…">`
(fr, en, x-default → version française) pour indiquer à Google les deux
versions ; `sitemap.xml` liste les 10 URLs (5 pages × 2 langues).

Le contenu anglais lui-même vit uniquement dans `I18N.en` (`js/main.js`) —
ne jamais l'écrire ailleurs. Le `<title>`, la `<meta name="description">` et
les balises Open Graph/Twitter ne sont **pas** traduits automatiquement (ils
ne portent pas `data-i18n`) : sur les pages anglaises, ils restent en
français, hérités tels quels de `src/*.html`.

## Lien de navigation actif

Le lien surligné dans le header (`Accueil`, `Services`, etc. selon la page
courante) n'est pas codé en dur par page : `js/main.js` le déduit au chargement
en comparant le `href` résolu de chaque lien au chemin de la page courante,
et ajoute la classe `is-active` au bon `<a>` — une comparaison robuste aux
liens relatifs (pages fr) comme aux liens `/en/...` absolus (pages anglaises).

## À personnaliser

- **Calendrier** : remplacer `https://calendly.com/wavora` dans `src/reservation.html`, puis `npm run build`.
- **Courriel** (footer, sur les 4 pages) : remplacer `bonjour@wavora.ca` dans `partials/footer.html`, puis `npm run build`.
