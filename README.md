# Omar Alhalawani  -  OA // SYSTEMS

Static engineering portfolio for Omar Alhalawani, a Computer Systems Engineering student at Carleton University focused on ASIC verification, RTL/digital design, embedded systems, and engineering automation.

Live: [omar-alhalawani.github.io/omar-portfolio](https://omar-alhalawani.github.io/omar-portfolio/)

## Pages

- `index.html`  -  engineering hero, Ciena feature, selected projects, systems stack
- `experience.html`  -  public-safe ASIC verification, instrumentation, and teaching experience
- `projects.html` / `project-details.html`  -  bento project archive and technical summaries
- `about.html`  -  engineering identity, education, and evidence-linked skills
- `resume.html`  -  embedded downloadable PDF resume
- `contact.html`  -  direct links and Formspree contact form
- `404.html`  -  custom signal-lost page

`services.html` is retained as a compatibility redirect to Experience.

## Features

- Midnight obsidian / electric cyan / ultraviolet visual system
- Responsive CSS Grid and native mobile navigation
- Lightweight Canvas circuit background that respects reduced motion and hidden tabs
- `Ctrl/Cmd + K` keyboard command palette
- `FAULT//HUNT` fullscreen verification-inspired campaign, unlocked through the BUILD label and persisted locally
- Scroll progress signal, profile-core tilt, project filters, and experience activation
- Semantic landmarks, skip link, keyboard-visible controls, modal focus restoration, and reduced-motion support

## Stack

Zero-build static HTML, CSS, and vanilla JavaScript. Google Fonts are loaded for Space Grotesk, Inter, and JetBrains Mono. The site is ready for GitHub Pages under `/omar-portfolio/`; all local links are relative.

## Run locally

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Structure

```text
assets/
  css/main.css       # design tokens, layout, responsive system
  js/main.js         # UI, command palette, game, circuit canvas
  img/               # real project and profile media
  resume/            # downloadable PDF resume
```

No analytics, cookies, API keys, or build tooling are required.
