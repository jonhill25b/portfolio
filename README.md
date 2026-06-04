# Personal Portfolio Site

A modern, responsive professional portfolio showcasing full-stack projects, technical certifications, and military-to-civilian career transition. Built with **React**, **Vite**, and **Tailwind CSS** featuring light/dark mode with localStorage persistence.

**Live Site:** [https://jhill.app](https://jhill.app)

## About

I am Jonathan Hill, a transitioning U.S. Army Veteran and IT Specialist with 5+ years of experience managing enterprise IT infrastructure, cybersecurity compliance, and full-stack web development. I hold an Active TS/SCI clearance and a B.S. in Information Technology.

This portfolio is both a showcase of my technical work and a demonstration of production-quality front-end engineering. It features clean component architecture, responsive design, accessibility considerations, and a polished UI with animated elements.

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Development](#local-development)
  - [Production Deployment](#production-deployment)
- [Component Structure](#component-structure)
- [Project Showcase](#project-showcase)
- [Scripts](#scripts)
- [License](#license)

---

## Features

- **Light/Dark Mode** — Toggle between light and dark themes with smooth CSS transitions. Preference persists across sessions via localStorage.
- **Responsive Design** — Fully fluid layout with mobile-first breakpoints. Hamburger menu for mobile, horizontal nav for desktop.
- **Certifications Carousel** — Horizontally scrolling animated badges with hover-to-pause. Each cert links to its Credly verification page.
- **Project Showcase** — Cards with tech stack tags, live demo links, and source code links. Homepage highlights top 3; dedicated projects page for full list.
- **Contact Form** — Modal contact form powered by Formspree with no backend required.
- **SEO Basics** — Semantic HTML, meta viewport, favicon, and semantic anchor structure.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 (Vite 8) |
| **Styling** | Tailwind CSS v3 |
| **Routing** | React Router v7 |
| **UI Primitives** | Headless UI (Dialog, Transition) |
| **Icons** | Heroicons v2 |
| **Contact** | Formspree |
| **Deployment** | Vercel (GitHub integration) |

---

## Architecture

### Routing

```
BrowserRouter
  └── Layout (Navbar + Outlet + Footer)
        ├── /            → Home (Hero, Certs, AboutPreview, ProjectPreview, Contact)
        ├── /about       → About (Profile, Work History, Contact)
        └── /projects    → Projects (Full Project Grid, Contact)
```

All routes share the same `Layout` component which renders the `Navbar`, the page-specific content via `<Outlet />`, and the `Footer`. There is no auth or protected routes — the entire site is publicly accessible.

### Theme System

The site uses Tailwind CSS's **class-based dark mode** strategy:

- **Default (no class):** Light mode — gray-100 background, white cards, dark text
- **`dark` class on `<html>`:** Dark mode — zinc-950 background, zinc-900 cards, amber-500 accents

`ThemeContext` manages the toggle with `useState` (lazy-initialized from `localStorage`) and a `useEffect` that adds/removes the `dark` class on `<html>`. All components declare color variants in pairs:

```jsx
className="bg-white dark:bg-zinc-950/80 text-zinc-900 dark:text-white"
```

### Component Hierarchy

```
App
├── ThemeProvider
└── Router
    └── Layout
        ├── Navbar (mobile + desktop, theme toggle)
        ├── Outlet (page content)
        │   ├── Home
        │   │   ├── Hero
        │   │   ├── Certs (animated carousel)
        │   │   ├── AboutPreview
        │   │   ├── ProjectPreview (3 featured projects)
        │   │   └── Contact (modal form)
        │   ├── About
        │   │   ├── Profile section
        │   │   ├── Work History timeline
        │   │   └── Contact
        │   └── Projects
        │       ├── Project grid (all projects)
        │       └── Contact
        └── Footer (links, copyright)
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+
- **npm**

### Local Development

**1. Clone and install:**

```bash
git clone https://github.com/jonhill25b/portfolio.git
cd portfolio-site
npm install
```

**2. Start the dev server:**

```bash
npm run dev
```

Opens at **http://localhost:5173**. Vite hot module replacement (HMR) updates the browser automatically on file changes.

**3. Build for production:**

```bash
npm run build
```

Output goes to the `dist/` directory. Preview locally with:

```bash
npm run preview
```

### Production Deployment

The site is deployed on **Vercel** via GitHub integration. Pushing to `main` triggers an automatic deployment.

To deploy your own copy:

1. Fork this repository
2. Sign up at [vercel.com](https://vercel.com) and import the GitHub repo
3. Vite settings are auto-detected:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click Deploy

For other hosts (Netlify, Render static site, GitHub Pages), the build and output settings are the same — this is a static SPA with no server-side dependencies.

---

## Component Structure

```
portfolio-site/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── Jonathan_Hill_Resume.pdf
├── src/
│   ├── assets/                     # Images (project screenshots, certs, profile)
│   ├── components/
│   │   ├── Navbar.jsx              # Header, mobile menu, theme toggle
│   │   ├── Footer.jsx              # Links (LinkedIn, GitHub, Credly), copyright
│   │   ├── Hero.jsx                # Landing section, CTA buttons
│   │   ├── Certs.jsx               # Animated certifications carousel
│   │   ├── AboutPreview.jsx        # About section summary (homepage)
│   │   ├── ProjectPreview.jsx      # 3 featured project cards (homepage)
│   │   └── Contact.jsx             # Modal contact form (Formspree)
│   ├── context/
│   │   └── ThemeContext.jsx        # Theme state, localStorage, toggle
│   ├── pages/
│   │   ├── Home.jsx                # Hero, Certs, About, Projects, Contact
│   │   ├── About.jsx               # Profile photo, bio, work history timeline
│   │   └── Projects.jsx            # Full project grid
│   ├── App.jsx                     # Router with Layout wrapper
│   ├── Layout.jsx                  # Shared layout (Navbar, Outlet, Footer)
│   ├── main.jsx                    # React entry point, ThemeProvider
│   └── index.css                   # Tailwind directives, scroll animation
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── eslint.config.js
├── .gitignore
└── README.md
```

---

## Project Showcase

Each project card includes a screenshot, tech stack tags, description, live demo link, and source code link.

| Project | Tech Stack | Live | Source |
|---|---|---|---|
| AI Client Console | React, Node.js, OpenAI API, Tailwind | [Demo](https://ai-chat-client-k9t7.onrender.com) | [GitHub](https://github.com/jonhill25b/ai-client) |
| Task Engine | MongoDB, Express, React, Node.js | [Demo](https://task-manager-1-8zfg.onrender.com) | [GitHub](https://github.com/jonhill25b/Task-Manager) |
| IT Ticket System | React, Express, Prisma, PostgreSQL, JWT | [Demo](https://it-ticket-system-uq54.onrender.com) | [GitHub](https://github.com/jonhill25b/IT-Ticket-System) |

As projects are added, the homepage `ProjectPreview` continues to show the top 3, while the `/projects` page lists everything.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR at localhost:5173 |
| `npm run build` | Build optimized production bundle to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## License

MIT
