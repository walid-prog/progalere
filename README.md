# Wavora — Site web

Site vitrine de **Wavora**, entreprise de services professionnels pour les PME,
travailleurs autonomes et organisations au Québec.

Site statique (HTML / CSS / JS), sans dépendance ni étape de build — ouvrez
`index.html` ou déployez le dossier tel quel (GitHub Pages, Netlify, etc.).

## Pages

| Fichier | Page |
|---|---|
| `index.html` | Accueil — hero, aperçu des 4 services, crédibilité, CTA |
| `services.html` | Services détaillés + bandeau des outils intégrés |
| `reservation.html` | Prise de rendez-vous (lien Calendly) |
| `about.html` | Histoire du fondateur, parcours, approche |

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

## À personnaliser

- **Calendrier** : remplacer `https://calendly.com/wavora` dans `reservation.html`.
- **Courriel** : remplacer `bonjour@wavora.ca`.
