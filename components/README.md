# 📁 components

Ce dossier contient tous les **composants UI réutilisables** de l’application AGERIS MOBILE.

---

## 🧩 Structure & Règles

Chaque composant respecte les conventions suivantes :

- **Nom de fichier** : `PascalCase` (ex. `Button.js`, `Card.js`)
- **Documentation** : JSDoc dans chaque fichier
- **Style** : intégré via `StyleSheet.create` et variables du thème (`/theme`)
- **Responsabilité unique** : un composant = une fonction bien définie
- **Tests à venir** : unitaire avec `jest` et `@testing-library/react-native`

---

## 📦 Composants disponibles

| Fichier            | Rôle                                            |
|--------------------|-------------------------------------------------|
| `Avatar.js`        | Affichage de l'utilisateur (image ou initiales) |
| `Badge.js`         | Tag visuel (ex. statut)                         |
| `Button.js`        | Bouton personnalisé et stylisé                  |
| `Card.js`          | Conteneur avec ombre et padding                 |
| `ErrorBoundary.js` | Catch des erreurs critiques                     |
| `Footer.js`        | Pied de page réutilisable                       |
| `Header.js`        | En-tête commun à plusieurs vues                 |
| `Loader.js`        | Spinner animé                                   |
| `Logo.js`          | Logo principal de l'application                 |
| `Modal.js`         | Fenêtre modale universelle                      |
| `Separator.js`     | Ligne horizontale de séparation                 |
| `StatusBar.js`     | Configuration de la barre de statut             |
| `TextField.js`     | Champ de saisie stylisé                         |

---

## ✨ Bonnes pratiques

- Garder les composants **purs et présentatifs**
- Utiliser le `theme` pour toutes les couleurs, paddings, tailles
- Ajouter un `README` dans les sous-dossiers si composants groupés
