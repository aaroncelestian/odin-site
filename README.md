# Odin — Marketing Site

Self-contained landing page for Odin. Built with Vite + vanilla HTML/CSS/JS so this folder can be copied into its own repo or Cursor window without depending on the Xcode project.

## Run locally

```bash
npm install
npm run dev
```

## Build for static hosting

```bash
npm run build
```

Output lands in `dist/`. Preview with `npm run preview`.

## Pages

| Path | Purpose |
|------|---------|
| `/` | Landing |
| `/privacy.html` | Privacy policy |

## Notes

- Primary and secondary CTAs are placeholders (`#download`, `#waitlist`) until App Store / download URLs exist.
- Brand assets live in `public/assets/` (optimized copies — not linked to the app bundle).
  - `odin-raven.jpg` — web-sized raven mark for the hero
  - `favicon.png` / `app-icon.png` — from the app icon set
- The hero subtitle rotates through the same tagline set as the native welcome screen.
- Deploy `dist/` to Netlify, GitHub Pages, or any static host when ready.

