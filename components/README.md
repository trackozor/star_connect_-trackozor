# 📦 Dossier `components/`

Ce dossier contient **tous les composants UI réutilisables** de l'application AGERIS MOBILE.

---

## Structure

- Chaque fichier est un composant fonctionnel React Native.
- Tous les composants sont documentés avec `JSDoc`.
- Les styles utilisent exclusivement le design system depuis `theme/`.
- Les noms de fichiers sont en `PascalCase.js`.
- Chaque composant a une en-tête standardisée et des séparateurs internes.

---

## Composants inclus

| Composant         | Description                                      |
|-------------------|--------------------------------------------------|
| `Avatar`          | Affiche une photo utilisateur ou ses initiales   |
| `Badge`           | Badge coloré (statut, tag, etc.)                 |
| `Button`          | Bouton principal (texte, loading, disabled)      |
| `ButtonIcon`      | Bouton avec une icône uniquement                 |
| `Card`            | Conteneur encadré avec fond et ombre             |
| `EmptyState`      | État vide illustré avec image et message         |
| `Footer`          | Pied de page avec informations                   |
| `Header`          | Bandeau supérieur avec titre                     |
| `Loader`          | Indicateur de chargement central                 |
| `Logo`            | Logo principal de l’application                  |
| `Modal`           | Modale personnalisée avec contenu                |
| `DialogConfirm`   | Fenêtre de confirmation (confirmer / annuler)    |
| `FormFieldWrapper`| Enveloppe de champ de formulaire                 |
| `TextField`       | Champ texte stylisé et contrôlé                  |
| `Checkbox`        | Case à cocher avec label                         |
| `Switch`          | Interrupteur booléen                             |
| `ErrorBoundary`   | Sécurité : catch les erreurs React               |

---

## Convention d’import

```js
import { Button, TextField, Modal } from '../components';
