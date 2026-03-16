# Modern React Portfolio

A Vite + React + Tailwind portfolio with dark mode, animated hero, skills bars, project carousel, resume download, and contact form.

## Getting started
1. Install deps: `npm install`
2. Run dev server: `npm run dev`
3. Build for production: `npm run build`
4. Preview production build: `npm run preview`

## Deployment
- Vercel: `vercel --prod` from project root (after installing Vercel CLI).
- Netlify: point build command to `npm run build` and publish directory to `dist`.

## Customize
- Update personal copy in `src/components/Hero.jsx`, `About.jsx`, and social links in `Footer.jsx`.
- Replace project data in `src/data/projects.js` and skill data in `src/data/skills.js`.
- Swap `public/resume.pdf` with your actual resume file.
