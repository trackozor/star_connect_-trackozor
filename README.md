# AGERIS MOBILE

> Application mobile professionnelle développée avec **React Native + Expo**, respectant les standards de qualité, maintenabilité et sécurité.  
> Ce projet constitue le socle technique du frontend mobile pour le système AGERIS.

---

## 📦 Stack technique

- **React Native** `0.72.x`
- **Expo** `~49`
- **React Navigation** `v6`
- **ESLint** + **Prettier**
- **Jest** pour les tests unitaires
- **Modularisation** : theme, components, screens, layouts, utils
- **Architecture évolutive** : respect des bonnes pratiques pro

---

## 📁 Arborescence principale

`

├── App.js                  # Entrée principale
├── components/            # UI génériques (Button, TextField…)
├── layout/                # Layouts globaux (AppLayout, AuthLayout…)
├── screens/               # Écrans fonctionnels (Login, Home…)
├── theme/                 # Design system (couleurs, typographie…)
├── utils/                 # Helpers, log, validation, formatters…
├── navigation/            # Stack de navigation
├── services/              # Requêtes API
├── store/                 # State management (à venir)
├── tests/             # Fichiers de test
├── .env.example           # Variables d’environnement (modèle)
├── .eslintrc.json         # Linter JS
├── .prettierrc            # Formatage automatique
├── .gitignore             # Fichiers ignorés Git
├── jest.config.js         # Config de tests
└── README.md              # Documentation projet
`

---

## 🚀 Démarrage rapide

```bash
git clone https://github.com/trackozor/star_connect_-trackozor.git
cd ageris_project_base

npm install

# Démarrage mobile
npm start

# Démarrage web
npm run web
```

---

## 🛠️ Scripts utiles

| Commande        | Description                       |
|-----------------|-----------------------------------|
| `npm start`     | Lance Expo Go                     |
| `npm run web`   | Lance l’appli en mode web         |
| `npm test`      | Lance les tests `jest`            |
| `autocommit`    | Commit automatique conventionné   |

---

## 🧪 Tests

- Framework : `jest`
- Dossier : `__tests__/`
- Couverture en cours d’extension
- Commande : `npm test`

---

## 🧠 Bonnes pratiques appliquées

- Architecture modulaire claire
- Linting/formatage auto (`eslint`, `prettier`)
- Design system centralisé (`theme/`)
- Imports centralisés par dossier (`index.js`)
- Commits Angular conventionnels

---

## 🔐 Sécurité

- Fichier `.env` exclu du Git (`.env.example` fourni)
- Variables sensibles isolées
- À venir : audit `npm audit`, `expo doctor`, contrôle des permissions

---

## 📄 Licence

Ce projet est sous licence **MIT** — voir le fichier [LICENSE](./LICENSE).

---

## 👤 Auteur

**Trackozor**  
Contact : [GitHub](https://github.com/trackozor)

---

## 📈 Roadmap à venir

- [ ] Intégration backend AGERIS
- [ ] State management global (`zustand` / `redux`)
- [ ] Tests E2E
- [ ] CI/CD GitHub Actions
- [ ] Accessibilité (A11Y)
