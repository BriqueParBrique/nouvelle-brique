# Nouvelle Brique

> Mini-onboarding pour Nouvelle Brique — [BriqueParBrique](https://briqueparbrique.github.io)

Ce dépôt contient le parcours d'apprentissage « Nouvelle Brique », conçu comme un mini-onboarding en quelques étapes pour comprendre les bases, installer ses outils et réaliser un premier projet concret.

**Site** : [briqueparbrique.github.io/nouvelle-brique](https://briqueparbrique.github.io/nouvelle-brique/)

## Parcours

1. Introduction
2. Installation
3. Premier projet

## Utiliser ce template

Après avoir créé un dépôt à partir de ce template, activez la synchronisation automatique :

1. **Au niveau de l'organisation** : Settings → Actions → General → Workflow permissions → cochez **« Allow GitHub Actions to create and approve pull requests »**
2. **Au niveau du dépôt** : Settings → Actions → General → Workflow permissions → cochez **« Allow GitHub Actions to create and approve pull requests »**
3. **Secret `SYNC_TEMPLATE_TOKEN`** : créez un PAT (Fine-grained) avec les permissions `contents: write`, `pull-requests: write` et `workflows: write` sur les dépôts de l'organisation, puis ajoutez-le comme secret d'organisation nommé `SYNC_TEMPLATE_TOKEN`

Les deux premiers niveaux sont nécessaires pour autoriser la création de PR. Le token est requis car le workflow synchronise aussi ses propres fichiers (`.github/workflows/`), ce qui nécessite la permission `workflows` que le `GITHUB_TOKEN` par défaut ne peut pas fournir.

## Contribuer

Les contributions sont les bienvenues ! Consultez [CONTRIBUTING.md](CONTRIBUTING.md) pour savoir comment améliorer ce parcours.

## Développement

Le site utilise [Jekyll](https://jekyllrb.com/) et est hébergé sur GitHub Pages. Consultez [DEVELOPER.md](DEVELOPER.md) pour mettre en place l'environnement de développement local.

## Licence

Ce projet est sous licence [MIT](LICENSE).
