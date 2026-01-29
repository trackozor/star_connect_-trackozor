<!--
 ================================================================================
 Projet       : AGERIS MOBILE
 Fichier      : screens/README.md
 Auteur       : Trackozor
 Date         : 28/01/2026
 Version      : 1.0.0
 Statut       : Stable
 Description  : Documentation des écrans fonctionnels de l'application mobile
 Historique   : 1.0.0 - Création initiale
=============================================================================== 
-->

# 📱 Dossier `screens`

Ce dossier contient les **écrans fonctionnels** de l'application, représentant les vues principales accessibles par l'utilisateur via la navigation.

Chaque écran est encapsulé dans un composant React Native, prêt à être intégré dans le système de navigation (`React Navigation`).

---

## 📁 Contenu des fichiers

| Fichier                   | Rôle                                                 |
|---------------------------|------------------------------------------------------|
| `ForgotPasswordScreen.js` | Écran de récupération de mot de passe                |
| `HomeScreen.js`           | Écran d'accueil principal affiché après connexion    |
| `LoginScreen.js`          | Écran d'authentification avec email et mot de passe  |
| `RegisterScreen.js`       | Écran d'inscription des nouveaux utilisateurs        |
| `index.js`                | Point d'entrée centralisant les exports des écrans   |

---

## ✅ Bonnes pratiques

- Tous les écrans doivent utiliser un **layout global** (`AppLayout`, `AuthLayout`, etc.) pour respecter le design system.
- Les noms de fichiers doivent suivre le format : `NomScreen.js`.
- Utiliser un `SafeAreaView` et un `ScrollView` lorsque nécessaire.
- Chaque écran doit être **commenté** et documenté en **JSDoc**.

---

## 📌 Exemple d'import

```js
import { LoginScreen } from '../screens';
