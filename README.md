# Wavora

Source de la version actuelle du site Wavora construite avec ChatGPT Sites.

Site publié : https://wavora.rayannebly.chatgpt.site

## Technologies

- React 19 et TypeScript
- Next.js 16 avec Vinext/Vite
- Déploiement ChatGPT Sites / Cloudflare Workers
- CSS personnalisé dans `app/globals.css`

## Installation locale

Prérequis : Node.js 22.13 ou une version plus récente.

```bash
npm install
```

### Windows PowerShell

```powershell
npm run dev:local
```

Le serveur affiche dans le terminal l’adresse locale à ouvrir.

Vérifications disponibles :

```powershell
npm run build:local
npm run test:local
npm run lint:local
```

### Environnement Linux / ChatGPT Sites

```bash
npm run dev
npm run build
npm test
npm run lint
```

Les scripts sans suffixe `:local` conservent les protections utilisées par
l’environnement Sites. Les scripts `:local` sont portables et conviennent au
terminal Windows.

## Organisation

- `app/page.tsx` : page d’accueil
- `app/services/` : page des services
- `app/a-propos/` : page À propos
- `app/reservation/` : page de réservation
- `app/components/` : composants du site
- `app/globals.css` : direction visuelle, responsive et thèmes
- `public/` : logo et visuels
- `.openai/hosting.json` : liaison avec le projet Sites

## Travailler avec Codex

Codex doit lire `AGENTS.md` avant toute modification. Demandez-lui d’abord
d’inspecter le projet et de proposer un plan, puis de lancer les vérifications
locales avant de présenter le diff.

Exemple :

```text
Lis AGENTS.md. Inspecte le site sans modifier de fichier, puis propose un plan
court pour la demande suivante. Attends mon accord avant l’implémentation.
```

