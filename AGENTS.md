# Instructions de travail — Wavora

## Produit

Wavora est un site vitrine francophone destiné aux PME, travailleurs autonomes
et organisations du Québec. Les quatre expertises sont : comptabilité
opérationnelle, automatisation et digitalisation, stratégie et marketing, et
formations professionnelles.

## Direction à préserver

- Conserver l’univers premium, mémorable, océanique et progressif.
- Préserver les modes clair et sombre, les vagues et l’atmosphère plage.
- Garder une seule action principale : réserver une consultation.
- Employer une typographie lisible; les accents ne doivent pas dépendre d’un
  italique difficile à lire.
- Assurer un contraste suffisant de tous les textes, logos et contrôles dans les
  deux thèmes.
- Ne pas ajouter de témoignages inventés ou de preuve sociale fictive.
- Les données d’un aperçu client peuvent être fictives uniquement si elles sont
  clairement présentées comme un exemple ou une simulation.
- Éviter le design SaaS générique, les effets décoratifs gratuits et les
  sections redondantes.

## Méthode

1. Inspecter les fichiers concernés avant toute modification.
2. Présenter un plan court et attendre l’accord lorsque la demande touche la
   structure, la direction visuelle ou le contenu principal.
3. Limiter les changements au périmètre validé.
4. Préserver `.openai/hosting.json`, l’architecture et le lockfile.
5. Vérifier le responsive, le clavier, la réduction des animations et les deux
   thèmes.
6. Ne jamais publier ou déployer sans demande explicite.

## Vérification locale

Sous Windows :

```powershell
npm run build:local
npm run test:local
npm run lint:local
```

Sous Linux / Sites :

```bash
npm run build
npm test
npm run lint
```

