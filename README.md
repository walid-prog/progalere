# Wavora — Site web

Site vitrine de **Wavora**, entreprise de services professionnels pour les PME,
travailleurs autonomes et organisations au Québec.

Site statique (HTML / CSS / JS, sans framework front-end), avec une seule étape
de build minimale — sans dépendance npm — qui assemble le header et le footer
communs dans chaque page. Les fichiers HTML déployés (`index.html`,
`services.html`, `about.html`, `reservation.html` à la racine) sont **générés** ;
on ne les édite jamais directement.

## Où éditer

| Pour changer… | Éditer… |
|---|---|
| Le header ou le footer (identiques sur les 4 pages) | `partials/header.html`, `partials/footer.html` |
| Le contenu propre à une page (texte, `<head>`, sections) | `src/index.html`, `src/services.html`, `src/about.html`, `src/reservation.html` |
| Les styles | `css/styles.css` |
| Le JS (thème, langue, menu mobile, i18n, lien actif) | `js/main.js` |

Après toute modification dans `partials/` ou `src/`, régénérer le HTML final :

```
npm run build
```

(équivalent à `node build.js` — aucune dépendance npm n'est installée.)

Le script lit chaque page de `src/`, remplace les marqueurs
`<!-- include:partials/xxx.html -->` par le contenu du partial correspondant,
et écrit le résultat à la racine du projet — au même endroit et sous le même
nom que les fichiers déployés aujourd'hui. **Committez les fichiers générés à
la racine** en même temps que vos changements dans `src/`/`partials/` : c'est
ce que GitHub Pages (ou tout autre hébergeur de fichiers statiques) sert
directement, sans exécuter de build côté serveur.

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

## Bilingue (prêt pour l'anglais)

Le sélecteur de langue FR/EN est déjà en place. Le contenu est en français ;
l'anglais s'active en complétant le dictionnaire `I18N.en` dans `js/main.js`
(fallback automatique vers le français pour toute clé manquante). Les textes
traduisibles portent l'attribut `data-i18n`.

## Lien de navigation actif

Le lien surligné dans le header (`Accueil`, `Services`, etc. selon la page
courante) n'est pas codé en dur par page : `js/main.js` le déduit au chargement
depuis `location.pathname` et ajoute la classe `is-active` au bon `<a>`. Comme
le header est désormais un partial unique partagé par les 4 pages, cette
logique côté client reste la seule façon de distinguer la page active — elle
n'a pas été touchée par ce chantier.

## À personnaliser

- **Calendrier** : remplacer `https://calendly.com/wavora` dans `src/reservation.html`, puis `npm run build`.
- **Courriel** (footer, sur les 4 pages) : remplacer `bonjour@wavora.ca` dans `partials/footer.html`, puis `npm run build`.
