# Dossier `layout/`

Ce dossier contient les **layouts d'écran** réutilisables pour structurer les différentes vues de l'application AGERIS MOBILE.

---

## Composants inclus

| Fichier                      | Description                                                                  |
|------------------------------|----------------------------------------------------------------------------- |
| `AppLayout.js`               | Layout principal avec SafeArea, StatusBar, fond personnalisable              |
| `AuthLayout.js`              | Layout spécial pour écrans d’authentification, avec gestion du clavier       |
| `PageWrapper.js`             | Wrapper scrollable avec padding optionnel                                    |
| `KeyboardAvoidingWrapper.js` | Composant utilitaire pour éviter le clavier sur les écrans formulaires       |
| `CenteredScreen.js`          | Mise en page centrée verticalement pour chargement, vide, messages           |
| `index.js`                   | Point d’export centralisé                                                    |

---

## Convention

- Tous les layouts utilisent `theme/` pour les couleurs, paddings, fonds.
- Les layouts peuvent être composés entre eux selon les écrans (`PageWrapper` dans `AuthLayout` par exemple).
- Tous les composants exposent un `testID` pour testabilité.

---

## Exemple d'utilisation

```jsx
import { AppLayout } from '../layout';

export default function ProfileScreen() {
  return (
    <AppLayout>
      <Text>Bienvenue sur votre profil</Text>
    </AppLayout>
  );
}
