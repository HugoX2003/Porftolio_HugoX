# hugox — Portfolio

Personal portfolio of **Hugo Márquez Diestra** — Systems Engineer, Backend Developer and DevOps Engineer based in Trujillo, Peru.

The design is inspired by the *Ye* album cover: a dusk slate-blue palette, an original SVG snow-capped ridgeline behind the hero, and a single handwritten green scrawl as the only loud voice on the page.

## Stack

- [Astro](https://astro.build) 5 — static site, zero JS by default
- Space Grotesk + Reenie Beanie via Fontsource (self-hosted fonts)
- astro-icon (Material Design Icons + Simple Icons)
- Vanilla CSS with design tokens — no framework

## Features

- Full-viewport sections that anchor exactly under the fixed header
- Scroll-spy section rail (appears after the hero)
- Scroll reveals — no-JS safe, respects `prefers-reduced-motion`
- Experience timeline with certificate/proof modals (`<dialog>`)
- SEO: Open Graph / Twitter cards + JSON-LD `Person`

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server at localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Structure

```
src/
├── assets/         # images (optimized via astro:assets)
├── components/     # Header, Hero, About, Experience, Technologies,
│                   # Projects, Contact, Footer, SectionRail
├── layouts/        # Layout.astro — head, backdrop scene, reveals
├── pages/          # index.astro
├── scripts/        # shared utilities (modals)
└── styles/         # global.css — design tokens
```
