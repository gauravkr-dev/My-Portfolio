 # Gaura's Portfolio

 A personal portfolio website built with React and Vite. This project showcases projects, skills, and a contact form — with a lightweight, responsive component-based design and a theme toggle.

 ## Highlights

 - Built with React (v19) and Vite for fast dev experience
 - Uses Tailwind CSS utilities and modern UI libraries (see `package.json` for full deps)
 - Includes project pages, a theme toggle, and a contact section using EmailJS

 ## Tech stack

 - React
 - Vite
 - Tailwind CSS
 - EmailJS
 - react-router-dom

 ## Getting started

 Install dependencies:

 ```bash
 npm install
 ```

 Run development server:

 ```bash
 npm run dev
 ```

 Build for production:

 ```bash
 npm run build
 ```

 Preview the production build locally:

 ```bash
 npm run preview
 ```

 ## Project structure (important files)

 - `src/main.jsx` — app entry
 - `src/App.jsx` — top-level routes and layout
 - `src/components/Navbar.jsx` — navigation and theme toggle
 - `src/components/ProjectsSection.jsx` — projects listing
 - `src/components/ContactSection.jsx` — contact form (EmailJS integration)
 - `src/index.css` — global styles
 - `public/projects/` — static project assets

 ## Deployment

 This site can be deployed to Vercel, Netlify, or any static hosting that supports SPA routing. Build with `npm run build` and upload the `dist/` output.

 ## Notes & next steps

 - Update content in `public/projects/` and the individual `Project*` components to add or edit portfolio entries.
 - Check `package.json` scripts for available commands and `eslint.config.js` for linting rules.

 If you'd like, I can: add a short CONTRIBUTING section, wire up CI (lint/build), or generate social preview images.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
