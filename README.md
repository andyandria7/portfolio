# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Mon Portfolio

Bienvenue sur le dépôt de mon portfolio.

## Demo

Cliquez sur le bouton ci-dessous pour voir le site en ligne. https://andyandria.vercel.app/
[![Voir mon site](https://img.icons8.com/?size=100&id=59809&format=png&color=000000)](https://andyandria.vercel.app/)




## Installation

Pour exécuter ce projet en local, suivez ces étapes :

1. Clonez le dépôt :
   ```sh
   git clone https://github.com/andyandria7/portfolio.git


## héberger un site React.js sur GitHub
Installez le package gh-pages :
npm install gh-pages --save-dev

Ajoutez la propriété homepage :
"homepage": "https://my-username.github.io/my-repo"

Ajoutez les scripts de déploiement. Si votre script de build est npm run build, vous pouvez ajouter :
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

Construire et déployer votre projet :
npm run build
npm run deploy

Si vous avez modifié package.json ou d'autres fichiers, assurez-vous de pousser ces modifications sur GitHub :
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main

Vérifiez la configuration de Vite pour GitHub Pages
Parfois, il peut être nécessaire de configurer correctement Vite pour fonctionner avec les chemins relatifs sur GitHub Pages. Ajoutez base à votre configuration Vite :

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})

