// Single source of truth for every external Gökbörü value.
// Fill in the TODO fields below; no other code change is needed.
// See PLACEHOLDERS.md for the full checklist.

export const GOKBORU = {
  steamAppId: null as string | null, // TODO(placeholder): Steam App ID, e.g. "1234560"
  steamStoreUrl: null as string | null, // TODO(placeholder): https://store.steampowered.com/app/<APPID>/ (derived from steamAppId when left null)
  trailerYoutubeId: null as string | null, // TODO(placeholder): YouTube video ID (not the URL), e.g. "dQw4w9WgXcQ"
  discordUrl: null as string | null, // TODO(placeholder): Discord invite link, if any
  pressKitUrl: null as string | null, // TODO(placeholder): press kit zip or folder link
  releaseWindow: "TBA", // TODO(placeholder): e.g. "2027"
  utm: { source: "iyistudios", medium: "web" },
};

export type SteamCampaign = "hero" | "announcement_bar" | "gokboru_page" | "home_card" | "games_page";

/** Store page URL, derived from the App ID when no explicit URL is set. */
export function steamStoreUrl(): string | null {
  if (GOKBORU.steamStoreUrl) return GOKBORU.steamStoreUrl;
  if (GOKBORU.steamAppId) return `https://store.steampowered.com/app/${GOKBORU.steamAppId}/`;
  return null;
}

/** Every wishlist link on the site goes through here so UTM values stay consistent. */
export function steamLink(campaign: SteamCampaign): string | null {
  const base = steamStoreUrl();
  if (!base) return null;
  const url = new URL(base);
  url.searchParams.set("utm_source", GOKBORU.utm.source);
  url.searchParams.set("utm_medium", GOKBORU.utm.medium);
  url.searchParams.set("utm_campaign", campaign);
  return url.toString();
}

export function steamWidgetUrl(): string | null {
  return GOKBORU.steamAppId ? `https://store.steampowered.com/widget/${GOKBORU.steamAppId}/` : null;
}

export function youtubeEmbedUrl(autoplay = true): string | null {
  if (!GOKBORU.trailerYoutubeId) return null;
  const params = new URLSearchParams({ rel: "0", modestbranding: "1" });
  if (autoplay) params.set("autoplay", "1");
  return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(GOKBORU.trailerYoutubeId)}?${params}`;
}

// Fixed file names: replace the placeholder files with real ones under the same name.
const dir = "/media/games/gokboru";
export const GOKBORU_MEDIA = {
  keyArt: `${dir}/key-art.webp`, // TODO(placeholder): 1920×1080
  logo: `${dir}/logo.svg`, // TODO(placeholder): transparent, ~1200×400
  capsule: `${dir}/capsule-main.webp`, // TODO(placeholder): 1232×706
  trailerPoster: `${dir}/trailer-poster.webp`, // TODO(placeholder): 1920×1080
  heroLoop: `${dir}/hero-loop.mp4`, // TODO(placeholder): optional, 1920×1080, short, muted
  ogImage: `${dir}/og-image.png`, // TODO(placeholder): 1200×630 PNG
  screenshots: [
    "/media/games/pc-project/pc-project.png", // real in-game capture
    ...[1, 2, 3, 4, 5, 6].map((n) => `${dir}/screenshot-0${n}.webp`), // TODO(placeholder): 1920×1080 each
  ],
};

/** True when public/media/games/gokboru/hero-loop.mp4 existed at build time. */
export const HAS_HERO_LOOP = __GOKBORU_HERO_LOOP__;
