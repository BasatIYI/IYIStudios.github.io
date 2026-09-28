# Hosting

The site is built by `.github/workflows/deploy.yml` and served by **GitHub Pages** (`public/CNAME` → `www.iyistudios.com`). Cloudflare sits in front as DNS/proxy.

GitHub Pages ignores `_headers` and `_redirects`, so routing is solved with static files and headers/caching are set in Cloudflare.

## Routing

| URL | Served file | Notes |
|---|---|---|
| `/` | `index.html` | prerendered |
| `/gokboru` | `gokboru.html` | prerendered; Pages serves `name.html` for `/name` without a trailing-slash redirect |
| `/games` | `games.html` | prerendered |
| `/games-apps` | `games-apps.html` | static redirect to `/games` |
| `/#/…` (old hash URLs) | `index.html` | inline script in `<head>` replaces them with the clean URL (`#/games-apps` → `/games`) |
| anything else | `404.html` | prerendered "Page not found", real 404 status, `noindex` |

To add a page: add the route in `src/App.tsx`, its meta in `PAGE_META` and an entry in `PRERENDER_ROUTES` (`src/seo.ts`).

## Cloudflare settings (to do in the Cloudflare dashboard)

GitHub Pages sends `Cache-Control: max-age=600` for everything and no security headers.

### Cache Rules (Caching → Cache Rules)

1. **Hashed assets and media** — when *URI Path* starts with `/assets/` **or** `/optimized/` **or** `/media/`:
   - Edge TTL: 1 year (ignore origin)
   - Browser TTL: 1 year for `/assets/` (file names are content-hashed).
   - For `/media/` and `/optimized/` use a shorter browser TTL (e.g. 7 days), because placeholder files are replaced under the same name. Purge the cache after replacing them.
2. HTML stays on the default (short) TTL.

### Response headers (Rules → Transform Rules → Modify Response Header)

Apply to all requests:

| Header | Value |
|---|---|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |

Optional `Content-Security-Policy` (test with `Content-Security-Policy-Report-Only` first):

```
default-src 'self'; img-src 'self' data: https://i.ytimg.com; style-src 'self' 'unsafe-inline';
script-src 'self' 'unsafe-inline'; frame-src https://www.youtube-nocookie.com https://store.steampowered.com;
connect-src 'self'; base-uri 'self'; form-action 'self'
```

(`'unsafe-inline'` for scripts is needed for the small inline script in `index.html` and the JSON-LD block.)
