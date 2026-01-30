# Dossier `navigation/`

Ce dossier contient toute la logique de navigation React Navigation (v6), structurée en modules clairs et isolés.

---

## Composants

| Fichier                  | Rôle                                                                |
|--------------------------|---------------------------------------------------------------------|
| `NavigationProvider.js`  | Container principal (`NavigationContainer`, thème, linking)         |
| `AppNavigator.js`        | Stack global conditionnel (authentifié vs non-authentifié)          |
| `AuthNavigator.js`       | Stack secondaire pour les écrans de connexion / inscription         |
| `routes.js`              | Fichier central des noms de routes (évite les strings en dur)       |
| `index.js`               | Point d’entrée unique pour importer les navigations                 |

---

## Exemple d’usage

```jsx
import { NavigationProvider } from './navigation';

export default function App() {
  return <NavigationProvider />;
}
