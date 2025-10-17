# Prajwal M G — Portfolio

This is my personal portfolio built with React and Tailwind CSS. It showcases my experience, projects, skills, certifications, and provides an easy way to contact me.

## Features

- Responsive, accessible UI with a clean, modern theme
- Smooth section navigation with sticky header
- Lazy-loaded sections with skeleton placeholders
- Light/dark mode toggle
- Full‑screen sections for a focused, app-like feel
- SEO metadata and social sharing tags
- Contact form powered by formsubmit.co

## Tech Stack

- React 18
- Tailwind CSS
- Framer Motion (subtle motion)
- React Icons
- React Helmet (SEO)

## Getting Started

1) Clone the repository
```
git clone https://github.com/prajwalmg10/portfolio.git
cd portfolio
```

2) Install dependencies
```
npm install
```

3) Run the development server
```
npm start
```
The app will be available at http://localhost:3000.

4) Build for production
```
npm run build
```

## Project Structure

```
public/               # HTML template, favicon, manifest
src/
  components/         # UI sections and shared components
  data/               # Content: profile, experience, projects, skills, certifications
  lib/                # Utilities
  index.js            # App bootstrap
  index.css           # Tailwind base and custom styles
  App.js              # Section layout
```

## Content Editing

- Profile data: src/data/profile.js
- Experience timeline: src/data/experience.js
- Projects list: src/data/projects.js
- Skills groups: src/data/skills.js
- Certifications: src/data/certifications.js

Most sections render directly from these data files. Update them to change your site content.

## Theming

- Global tokens are defined in src/index.css using CSS variables.
- Toggle light/dark mode via the header switch.

## Deployment

Deploy to any static host (GitHub Pages, Netlify, Vercel):

- GitHub Pages: build with `npm run build` and publish the `build/` directory.
- Netlify/Vercel: connect the repo, set build command to `npm run build`, and output to `build`.

## Contact

- LinkedIn: https://www.linkedin.com/in/prajwalmg10
- GitHub: https://github.com/prajwalmg10
- Email: prajwalmg10@gmail.com

