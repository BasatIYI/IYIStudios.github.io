# IYI Studios website

Vite + React + TypeScript + Tailwind CSS. Deployed to GitHub Pages on push to `main` (see [docs/HOSTING.md](docs/HOSTING.md)).

```bash
npm ci
npm run dev        # dev server (generates optimized images first)
npm run build      # images → type check → client build → SSR build → prerender
npm run preview    # serve dist/
```

| Script | What it does |
|---|---|
| `npm run images` | Resized WebP variants of `public/media/**` into `public/optimized/` (git-ignored, originals untouched). Presets: `src/image-presets.json`. |
| `npm run placeholders` | Creates missing Gökbörü placeholder images in `public/media/games/gokboru/`. Never overwrites existing files. |

- Gökbörü links, IDs and media: `src/config/gokboru.ts`
- What is still a placeholder: [PLACEHOLDERS.md](PLACEHOLDERS.md)
- Page titles, descriptions, prerendered routes: `src/seo.ts`
