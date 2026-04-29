# Perl Contractors — Official Website

A modern, industrial-themed corporate website for **Perl Contractors**, a steel fabrication and construction firm based in Ruiru, Kiambu County, Kenya.

> **Tagline:** Solid work. Superior finishes.
> **Live preview:** https://perlfabs.lovable.app

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [File Structure](#file-structure)
4. [Running Locally](#running-locally)
5. [Editing Content](#editing-content)
6. [Editing Styles & Colors](#editing-styles--colors)
7. [Replacing Images](#replacing-images)
8. [WhatsApp & Phone Integration](#whatsapp--phone-integration)
9. [Building for Production](#building-for-production)
10. [Deployment](#deployment)
11. [Troubleshooting](#troubleshooting)

---

## Project Overview

Single-page corporate site featuring:

- **Hero** with full-bleed steel-construction imagery and CTAs
- **About** with company stats
- **Services** grid (structural steel, roofing, fabrication, etc.)
- **Projects / Portfolio** with category filters
- **Why Choose Us** value props
- **Testimonials** carousel
- **CTA banner** + **Contact form** (auto-routes to WhatsApp)
- **Footer** with quick links and contact details
- **Floating WhatsApp button** for instant chat
- **Click-to-call** phone links
- Fully **responsive** (mobile, tablet, desktop)
- **SEO-ready** meta tags and semantic HTML

---

## Tech Stack

This project is built with a **modern React stack** (not plain HTML/CSS/JS) for component reusability, smooth animations, and maintainability:

| Tool | Purpose |
|------|---------|
| **React 18** + **TypeScript** | UI framework |
| **Vite** | Lightning-fast dev server & bundler |
| **Tailwind CSS** | Utility-first styling with a custom design system |
| **shadcn/ui** | Accessible, unstyled component primitives |
| **Framer Motion** | Smooth scroll-triggered animations |
| **Lucide React** | Icon library |
| **React Router** | Client-side routing |

> Why not plain HTML/JS? React lets us reuse sections (Navbar, Footer, Cards) and animate elegantly without copy-pasting markup. The build output is still static HTML/CSS/JS that can be hosted anywhere.

---

## File Structure

```
perl-contractors-website/
├── index.html                  # HTML entry point + SEO meta tags
├── package.json                # Dependencies & scripts
├── vite.config.ts              # Vite config
├── tailwind.config.ts          # Tailwind theme + design tokens
├── tsconfig.json               # TypeScript config
├── postcss.config.js
├── components.json             # shadcn/ui config
├── README.md                   # ← this file
│
├── public/                     # Static assets served as-is
│   ├── robots.txt
│   └── placeholder.svg
│
└── src/
    ├── main.tsx                # React entry
    ├── App.tsx                 # Root component + router
    ├── index.css               # Global styles + design tokens (HSL colors)
    │
    ├── assets/                 # Images bundled with the build
    │   ├── perl-logo.jpeg
    │   ├── hero-steel.jpg
    │   ├── about-site.jpg
    │   ├── project-roofing.jpg
    │   ├── project-structural.jpg
    │   ├── project-canopy.jpg
    │   ├── project-cladding.jpg
    │   ├── project-fabrication.jpg
    │   └── project-welding.jpg
    │
    ├── components/
    │   ├── site/               # ← EDIT THESE for content changes
    │   │   ├── Navbar.tsx
    │   │   ├── Hero.tsx
    │   │   ├── About.tsx
    │   │   ├── Services.tsx
    │   │   ├── Projects.tsx
    │   │   ├── WhyUs.tsx
    │   │   ├── Testimonials.tsx
    │   │   ├── CtaBanner.tsx
    │   │   ├── Contact.tsx
    │   │   ├── Footer.tsx
    │   │   └── WhatsAppFloat.tsx
    │   └── ui/                 # shadcn primitives (rarely edited)
    │
    ├── pages/
    │   ├── Index.tsx           # Home page — composes all sections
    │   └── NotFound.tsx        # 404 page
    │
    ├── hooks/                  # Custom React hooks
    └── lib/
        └── utils.ts            # cn() helper for class merging
```

---

## Running Locally

### Prerequisites

Install **Node.js 18+** (which includes `npm`). Verify:

```bash
node --version   # should print v18 or higher
npm --version
```

> Recommended: install Node via [nvm](https://github.com/nvm-sh/nvm) so you can switch versions easily.

### Setup

```bash
# 1. Unzip the project and enter the folder
cd perl-contractors-website

# 2. Install all dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:8080** in your browser. Edits to any file will hot-reload instantly.

### Available Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start dev server with hot-reload |
| `npm run build` | Build production-optimized static files into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## Editing Content

Each section of the homepage lives in its own file inside `src/components/site/`. Open the file in any editor (VS Code recommended) and edit the text directly — changes appear instantly with `npm run dev` running.

### Quick reference — where to edit what

| What you want to change | File |
|--------------------------|------|
| Logo & navigation links | `src/components/site/Navbar.tsx` |
| Hero headline & buttons | `src/components/site/Hero.tsx` |
| Hero stats (150+, 10+, etc.) | `src/components/site/Hero.tsx` (bottom of file) |
| Company description | `src/components/site/About.tsx` |
| Services list | `src/components/site/Services.tsx` |
| Project portfolio | `src/components/site/Projects.tsx` |
| "Why choose us" items | `src/components/site/WhyUs.tsx` |
| Testimonials | `src/components/site/Testimonials.tsx` |
| Contact details & form | `src/components/site/Contact.tsx` |
| Footer info & socials | `src/components/site/Footer.tsx` |
| Page title & SEO meta | `index.html` |

### Adding a new project

Open `src/components/site/Projects.tsx`. Find the `projects` array near the top:

```tsx
const projects = [
  {
    title: "Industrial Warehouse Frame",
    category: "Structural Steel",
    image: structural,         // import at top of file
    description: "...",
  },
  // ← add a new entry here
];
```

To add a brand-new image:

1. Drop the image file into `src/assets/` (e.g. `my-new-project.jpg`)
2. At the top of `Projects.tsx`, add: `import myNew from "@/assets/my-new-project.jpg";`
3. Add a new object to the `projects` array using `image: myNew`

### Updating phone numbers / WhatsApp

Search-and-replace these values across the project:

- **Phone 1:** `0748085743` → your new number
- **Phone 2:** `0719546875` → your new number
- **WhatsApp:** `254719546875` (international format, no `+`)
- **Email:** `perlcontractors@gmail.com`

Files to check: `Navbar.tsx`, `Hero.tsx`, `Contact.tsx`, `Footer.tsx`, `WhatsAppFloat.tsx`, `CtaBanner.tsx`.

---

## Editing Styles & Colors

All colors are defined as **HSL design tokens** in `src/index.css`. **Never hardcode colors in components** — always reference the tokens so the whole site stays consistent.

### Change the accent color

Open `src/index.css` and edit the `--primary` value (currently industrial orange):

```css
:root {
  --primary: 22 95% 54%;        /* H S% L% — change this */
  --primary-glow: 30 100% 60%;  /* lighter shade for gradients */
}
```

### Change the dark background

```css
:root {
  --background: 0 0% 6%;     /* near-black */
  --card: 0 0% 9%;           /* slightly lighter for cards */
  --secondary: 0 0% 12%;     /* section dividers */
}
```

### Change fonts

Fonts are imported at the top of `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk...&family=Inter...');
```

Replace the Google Fonts URL and update the `font-family` rules below.

---

## Replacing Images

All photos live in `src/assets/`. To swap one:

1. Save your new image with the **same filename** (e.g. `hero-steel.jpg`) into `src/assets/`
2. Refresh the dev server — done.

To use a different filename, update the `import` statement at the top of the relevant component.

**Image optimization tips:**
- Hero/large images: max **1920px wide**, save as `.jpg` quality 80
- Project thumbnails: max **1200px wide**
- Use [squoosh.app](https://squoosh.app) or [tinypng.com](https://tinypng.com) to compress before adding

---

## WhatsApp & Phone Integration

### WhatsApp click-to-chat

Format: `https://wa.me/<international-number>?text=<url-encoded-message>`

Example used in `WhatsAppFloat.tsx`:
```tsx
href="https://wa.me/254719546875?text=Hello%20Perl%20Contractors%21"
```

To change: replace `254719546875` with your WhatsApp number (country code first, no `+` or spaces).

### Click-to-call

Standard `tel:` links work on all phones:
```tsx
<a href="tel:+254748085743">0748 085 743</a>
```

### Contact form

Currently the form in `Contact.tsx` opens WhatsApp pre-filled with the user's message — no backend required. If you want the form to actually send emails:

- **Easiest:** Use [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) — just change the `<form action="">` URL.
- **Advanced:** Connect a backend (Lovable Cloud, Supabase, or your own API) and POST the form data.

---

## Building for Production

```bash
npm run build
```

This generates a fully static `dist/` folder containing `index.html`, bundled JS, CSS, and optimized images. **You can upload `dist/` to any static host** — no Node server required in production.

Preview locally before deploying:

```bash
npm run preview
```

---

## Deployment

### GitHub Pages

1. Push the project to a GitHub repo.
2. Install the gh-pages helper:
   ```bash
   npm install -D gh-pages
   ```
3. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
4. In `vite.config.ts`, set `base: "/your-repo-name/"`.
5. Run `npm run deploy`. Then in your repo settings → Pages → set source to the `gh-pages` branch.

### Cloudflare Pages

1. Push to GitHub.
2. In Cloudflare dashboard → **Pages → Create a project → Connect to Git**.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click deploy. Cloudflare gives you a free `*.pages.dev` URL and lets you add a custom domain.

### Netlify / Vercel

Both auto-detect Vite. Just:
1. Connect your Git repo.
2. Confirm build command `npm run build` and output `dist`.
3. Deploy.

### Static hosting (any provider)

Run `npm run build`, then upload everything inside the `dist/` folder via FTP/SFTP/cPanel to your host's web root (`public_html`, `www`, etc.).

---

## Troubleshooting

**`npm install` fails**
Make sure you're on Node 18+. Delete `node_modules` and `package-lock.json`, then re-run `npm install`.

**Port 8080 already in use**
Edit `vite.config.ts` and change the `server.port` value.

**Images not showing after deploy**
Check that all `import` paths use `@/assets/...` (the `@` alias points to `src/`). Don't reference images via `/src/assets/...` URLs — those don't exist after build.

**WhatsApp link opens the wrong number**
Search the codebase for the old number and replace all occurrences.

---

## License & Credits

© Perl Contractors. All rights reserved.
Site design and code: built with React + Vite + Tailwind CSS.

For questions about the codebase, contact your developer or refer to:
- [Vite docs](https://vitejs.dev)
- [Tailwind CSS docs](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
