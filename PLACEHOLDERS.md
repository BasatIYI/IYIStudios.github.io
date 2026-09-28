# Placeholders

Everything below is temporary. Replace each item and tick it off.
In code, every spot is marked with `TODO(placeholder)`:

```bash
git grep -n "TODO(placeholder)"
```

## 1. Configuration — `src/config/gokboru.ts`

Filling these in is enough; no other code change is needed.

- [ ] `steamAppId` — Steam App ID (e.g. `"1234560"`). Enables every wishlist button, the announcement bar link, the Steam widget and `sameAs` in the JSON-LD. The store URL is derived from it.
- [ ] `steamStoreUrl` — optional; only if the store URL should differ from `https://store.steampowered.com/app/<APPID>/`.
- [ ] `trailerYoutubeId` — YouTube video **ID**, not the URL. Enables the trailer player on `/gokboru`, the home "Watch Trailer" button and the `trailer` entry in the JSON-LD.
- [ ] `discordUrl` — Discord invite (Community section).
- [ ] `pressKitUrl` — press kit zip or folder link (Press section).
- [ ] `releaseWindow` — e.g. `"2027"` (currently `"TBA"`).

UTM values are fixed: `utm_source=iyistudios`, `utm_medium=web`, `utm_campaign` = `hero` · `announcement_bar` · `gokboru_page` · `home_card` · `games_page`.

## 2. Images and video — `public/media/games/gokboru/`

Drop the real file in **with the same name**; no code change is needed.
`npm run placeholders` only creates files that are missing, so it never overwrites a real asset.

- [ ] `key-art.webp` — 1920×1080, WebP. Home hero background, `/gokboru` header, JSON-LD `image`.
- [ ] `logo.svg` — ~1200×400, transparent SVG. Home hero, `/gokboru` header.
- [ ] `capsule-main.webp` — 1232×706, WebP. Home Gökbörü card, Games page PC card.
- [ ] `trailer-poster.webp` — 1920×1080, WebP. Trailer cover shown before the player loads.
- [ ] `hero-loop.mp4` — 1920×1080, short, muted, MP4 (H.264). Optional home hero video. **Not created**: while the file is absent the key art is used. Detected at build time; never played when `prefers-reduced-motion` is on.
- [ ] `screenshot-01.webp` … `screenshot-06.webp` — 1920×1080 each, WebP. `/gokboru` gallery, after the real `pc-project` capture.
- [ ] `og-image.png` — 1200×630, **PNG** (SVG does not work in share previews). Open Graph / Twitter Card for all pages.

If the logo arrives as PNG instead of SVG, change `GOKBORU_MEDIA.logo` in `src/config/gokboru.ts`.

## 3. Copy — `src/data/gokboru.ts`

Draft English text written for layout. Replace with approved copy.

- [ ] Feature list (4 items)
- [ ] "Rooted in Turkic mythology" world introduction (2 paragraphs)
- [ ] System requirements table (all values `TBA`)

## 4. Structured data — `src/pages/Gokboru.tsx`

- [ ] `operatingSystem` (currently `"Windows"`) and `genre` (currently `Adventure`, `Exploration`) — confirm
- [ ] Trailer `uploadDate` — add once the trailer is published
