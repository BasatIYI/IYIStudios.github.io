// Single source of truth for every external Gökbörü value.
// Fill in the TODO fields below; no other code change is needed.
// See PLACEHOLDERS.md for the full checklist.

export const GOKBORU = {
  steamAppId: "4886790",
  steamStoreUrl: "https://store.steampowered.com/app/4886790/Gokboru/",
  trailerYoutubeId: "r_IZLDmio_w" as string | null,
  bossRevealYoutubeId: "swHfokx1yrA" as string | null,
  visualUpdateYoutubeId: "JaGRAbsxZEY" as string | null,
  discordUrl: "https://discord.gg/wbyRSjavpX" as string | null,
  pressKitUrl: "/presskit/gokboru-presskit.zip",
  releaseWindow: "Full release: March 2027",
  releaseWindowTr: "Tam sürüm: Mart 2027",
  utm: { source: "iyistudios", medium: "web" },
};

export type SteamCampaign =
  | "hero"
  | "hero_tr"
  | "announcement_bar"
  | "announcement_bar_tr"
  | "demo_bar"
  | "demo_bar_tr"
  | "next_fest"
  | "launched"
  | "gokboru_page"
  | "gokboru_page_tr"
  | "home_card"
  | "home_card_tr"
  | "home_steam_icon"
  | "games_page";

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

export function youtubeEmbedUrl(autoplay = true, videoId: string | null = GOKBORU.trailerYoutubeId): string | null {
  if (!videoId) return null;
  const params = new URLSearchParams({ rel: "0", modestbranding: "1" });
  if (autoplay) params.set("autoplay", "1");
  return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?${params}`;
}

// Ready banner states (W-16): change mode to instantly switch on demo day, Next Fest, or launch
export type AnnouncementMode = "wishlist" | "demo_live" | "next_fest" | "launched";
export const ANNOUNCEMENT_MODE: AnnouncementMode = "wishlist";

export const ANNOUNCEMENT_CONFIG: Record<
  AnnouncementMode,
  {
    en: { text: string; action: string; campaign: SteamCampaign };
    tr: { text: string; action: string; campaign: SteamCampaign };
  }
> = {
  wishlist: {
    en: { text: "Gökbörü is coming to Steam — ", action: "Wishlist now", campaign: "announcement_bar" },
    tr: { text: "Gökbörü Steam'e Geliyor — ", action: "İstek Listesine Ekle", campaign: "announcement_bar_tr" },
  },
  demo_live: {
    en: { text: "Free demo out now on Steam — ", action: "Play the Prologue", campaign: "demo_bar" },
    tr: { text: "Ücretsiz Prolog Demosu Yayında — ", action: "Hemen Oyna", campaign: "demo_bar_tr" },
  },
  next_fest: {
    en: { text: "Play Gökbörü at Steam Next Fest — ", action: "Free demo live now", campaign: "next_fest" },
    tr: { text: "Gökbörü Steam Next Fest'te — ", action: "Ücretsiz Demoyu Şimdi Oyna", campaign: "next_fest" },
  },
  launched: {
    en: { text: "Gökbörü is out now on Steam! ", action: "Play Now", campaign: "launched" },
    tr: { text: "Gökbörü Şimdi Steam'de Yayında! ", action: "Hemen Oyna", campaign: "launched" },
  },
};

// Fixed file names: replace the placeholder files with real ones under the same name.
const dir = "/media/games/gokboru";
export const GOKBORU_MEDIA = {
  keyArt: `${dir}/key-art.webp`,
  logo: `${dir}/logo.png`,
  capsule: `${dir}/capsule-main.webp`, // 1232×706
  trailerPoster: `${dir}/trailer-poster.webp`, // 1920×1080
  bossRevealPoster: `${dir}/boss-reveal-poster.webp`,
  visualUpdatePoster: `${dir}/visual-update-poster.webp`,
  heroLoop: `${dir}/hero-loop.mp4`, // 1920×1080, short, muted
  ogImage: `${dir}/og-image.png`, // 1200×630 PNG
  screenshots: Array.from({ length: 14 }, (_, i) => `${dir}/screenshot-${String(i + 1).padStart(2, "0")}.webp`),
  loops: {
    wolfDash: `${dir}/loops/rec_01_wolf_dash_loop.mp4`,
    deflect: `${dir}/loops/rec_02_deflect_iron_fortress.mp4`,
    cleanseWave: `${dir}/loops/rec_03_cleanse_wave_fountain.mp4`,
    shrineOfKut: `${dir}/loops/rec_04_shrine_of_kut_ui.mp4`,
    synergy: `${dir}/loops/rec_05_synergy_awakened.mp4`,
  },
};

/** True when public/media/games/gokboru/hero-loop.mp4 existed at build time. */
export const HAS_HERO_LOOP = __GOKBORU_HERO_LOOP__;
