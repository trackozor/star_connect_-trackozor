# 📁 layouts

Ce dossier contient les **structures de mise en page réutilisables** (layouts) permettant de normaliser l'affichage global de l'application selon les contextes (authentification, pages principales, etc.).

## 📂 Rôle du dossier

Les layouts agissent comme des wrappers autour des écrans (`screens/`) pour intégrer les éléments récurrents comme :

- le header,
- le footer,
- les paddings globaux,
- les scroll containers,
- ou encore les protections d’accès (auth).

## 📋 Détail des fichiers

| Fichier           | Rôle                                                             |
|-------------------|------------------------------------------------------------------|
| `AppLayout.js`    | Mise en page globale standard (utilisée après connexion)         |
| `AuthLayout.js`   | Layout dédié aux écrans d’authentification (login, register...)  |
| `PageWrapper.js`  | Composant enveloppant une page avec scroll, marges, padding…     |
| `index.js`        | Point d'entrée exportant tous les layouts                        |

## ✅ Bonnes pratiques

- Les layouts **ne doivent pas contenir de logique métier**.
- Les layouts **utilisent le thème** (`theme/`) pour respecter la cohérence graphique.
- Chaque layout **doit être documenté** et maintenu **testable**.
