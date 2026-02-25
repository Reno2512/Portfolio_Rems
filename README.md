# 🚀 Portfolio — Robert Emmanuel Mamadou Sagne

Portfolio Fullstack Developer — Dark Mode, Particules animées, Bento Grid, Terminal interactif.

---

## ⚡ Lancement rapide (3 commandes)

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en local
npm run dev

# 3. Ouvrir dans le navigateur
# → http://localhost:5173
```

---

## 📦 Build pour la production (Vercel / Netlify)

```bash
npm run build
# Le dossier dist/ est généré → prêt pour le déploiement
```

---

## 🌐 Déploiement Vercel (recommandé)

1. Créer un compte sur **vercel.com**
2. Connecter votre GitHub et pousser ce projet
3. Cliquer **"New Project"** → sélectionner le repo
4. Laisser les paramètres par défaut → **Deploy**
5. ✅ URL générée : `portfolio-rems.vercel.app`

### Personnaliser l'URL Vercel
Dans le dashboard Vercel → Settings → Domains → entrez `robert-sagne.vercel.app`

---

## ✏️ Personnalisation

Tout le contenu se modifie dans **`src/App.jsx`**, bloc `CONFIG` en haut du fichier :

```js
const CONFIG = {
  name: "Votre Nom",
  email: "votre@email.com",
  phone: "+221 ...",
  linkedin: "https://linkedin.com/in/...",
  github: "https://github.com/...",

  // Modifier vos projets :
  projects: [
    {
      title: "Nom du projet",
      desc: "Description courte",
      tech: ["Angular", "Spring Boot"],
      color: "#00d4ff",   // couleur de la carte
      size: "large",      // large | medium | small
      emoji: "🚀",
    },
    // ...
  ],

  // Modifier vos compétences :
  skills: {
    frontend: ["Angular", "React", ...],
    backend: ["Spring Boot", ...],
    // ...
  },
}
```

### Ajouter votre photo
Remplacez l'emoji `👨‍💻` dans la section `About` par une vraie photo :
```jsx
// Dans la fonction About(), remplacer :
<span style={{ fontSize: "7rem" }}>👨‍💻</span>

// Par :
<img src="/photo.jpg" alt="Robert Sagne" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
```
Puis placez votre photo dans le dossier `public/photo.jpg`.

### Ajouter votre CV PDF
1. Copiez votre CV dans `public/cv-robert-sagne.pdf`
2. Dans CONFIG, la commande `cv` du terminal est déjà configurée

---

## 📁 Structure du projet

```
portfolio-rems/
├── public/
│   ├── favicon.svg          ← Icône de l'onglet navigateur
│   └── cv-robert-sagne.pdf  ← (à ajouter) votre CV
├── src/
│   ├── App.jsx              ← TOUT le portfolio est ici
│   └── main.jsx             ← Point d'entrée React
├── index.html               ← SEO, meta tags, Google Fonts
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ Technologies utilisées

- **React 18** — Framework UI
- **Vite 5** — Bundler ultra-rapide
- **CSS-in-JS** — Styles inline (zéro dépendance CSS externe)
- **Canvas API** — Particules animées en arrière-plan
- **IntersectionObserver** — Animations au scroll
- **Google Fonts** — Syne + Space Mono

> Aucune dépendance externe au-delà de React. Le projet est léger et rapide.

---

Développé avec ❤️ — Robert Emmanuel Mamadou Sagne | Dakar, Sénégal
