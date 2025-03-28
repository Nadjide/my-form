# Formulaire d'inscription React

Ce projet est une application React qui permet aux utilisateurs de s'inscrire via un formulaire avec validation complète.

## Fonctionnalités

- Formulaire d'inscription avec validation en temps réel
- Validation des champs :
  - Nom et prénom (lettres, accents, tirets)
  - Email
  - Date de naissance (âge minimum 18 ans)
  - Code postal (format français)
  - Ville
- Messages d'erreur en rouge sous chaque champ
- Bouton de soumission désactivé si le formulaire n'est pas valide
- Sauvegarde des données dans le localStorage
- Notifications toast pour le succès et les erreurs
- Tests unitaires et d'intégration avec 100% de couverture
- Documentation complète avec JSDoc

## Installation

```bash
# Cloner le repository
git clone https://github.com/nadjide/my-form.git

# Installer les dépendances
npm install

# Lancer l'application
npm start
```

## Tests

```bash
# Lancer les tests
npm test

# Lancer les tests avec couverture
npm test -- --coverage
```

## Documentation

La documentation est générée avec JSDoc et est accessible via :

```bash
npm run jsdoc
```

La documentation sera disponible dans le dossier `public/doc`.

## Déploiement

Le projet est automatiquement déployé sur GitHub Pages via GitHub Actions lorsque les tests passent avec succès.

## Couverture de code

[![codecov](https://codecov.io/gh/nadjide/my-form/branch/master/graph/badge.svg)](https://codecov.io/gh/nadjide/my-form)

## Technologies utilisées

- React
- Material-UI
- Jest
- React Testing Library
- JSDoc
- GitHub Actions
- Codecov

## Structure du projet

```
src/
  ├── components/     # Composants réutilisables
  ├── Formulaire/    # Composant principal du formulaire
  ├── utils/         # Fonctions utilitaires et validation
  └── tests/         # Tests unitaires et d'intégration
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou un pull request.

## Licence

MIT
