// Single source of truth for every external Gökbörü value.
// Numeric facts and launch/demo status are read from marketing-facts.json.
import marketingFacts from "../../marketing-facts.json";

export const MARKETING_FACTS = marketingFacts;

export const GOKBORU = {
  steamAppId: String(marketingFacts.store.appId),
  steamStoreUrl: `https://store.steampowered.com/app/${marketingFacts.store.appId}/Gokboru/`,
  trailerYoutubeId: "r_IZLDmio_w" as string | null,
  bossRevealYoutubeId: "swHfokx1yrA" as string | null,
  visualUpdateYoutubeId: "JaGRAbsxZEY" as string | null,
  discordUrl: "https://discord.gg/wbyRSjavpX" as string | null,
  pressKitUrl: "/presskit/gokboru-presskit.zip",
  releaseWindow: marketingFacts.launch.earlyAccess
    ? `Early Access: ${marketingFacts.launch.date}`
    : `Full release: ${marketingFacts.launch.date}`,
  releaseWindowTr: marketingFacts.launch.earlyAccess
    ? `Erken Erişim: ${marketingFacts.launch.dateTr}`
    : `Tam sürüm: ${marketingFacts.launch.dateTr}`,
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
  | "games_page"
  | "games_page_tr"
  | "bio";

/** Store page URL, derived from the App ID when no explicit URL is set. */
export function steamStoreUrl(): string | null {
  if (GOKBORU.steamStoreUrl) return GOKBORU.steamStoreUrl;
  if (GOKBORU.steamAppId) return `https://store.steampowered.com/app/${GOKBORU.steamAppId}/`;
  return null;
}

/** Every wishlist link on the site goes through here so UTM values stay consistent. */
export function steamLink(
  campaign: SteamCampaign,
  source: string = GOKBORU.utm.source,
  medium: string = GOKBORU.utm.medium,
): string | null {
  const base = steamStoreUrl();
  if (!base) return null;
  const url = new URL(base);
  url.searchParams.set("utm_source", source);
  url.searchParams.set("utm_medium", medium);
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

// Single-flag 4-state mode for Announcement Bar and Hero CTAs (W-13)
export type AnnouncementMode = "WISHLIST_ONLY" | "DEMO_LIVE" | "NEXT_FEST" | "LAUNCHED";
export const ANNOUNCEMENT_MODE: AnnouncementMode = (
  marketingFacts.demo.live ? "DEMO_LIVE" : "WISHLIST_ONLY"
) as AnnouncementMode;
export const IS_DEMO_LIVE =
  Boolean(marketingFacts.demo.live) && (ANNOUNCEMENT_MODE === "DEMO_LIVE" || ANNOUNCEMENT_MODE === "NEXT_FEST");

export const ANNOUNCEMENT_CONFIG: Record<
  AnnouncementMode,
  {
    en: { text: string; action: string; campaign: SteamCampaign };
    tr: { text: string; action: string; campaign: SteamCampaign };
  }
> = {
  WISHLIST_ONLY: {
    en: { text: "Gökbörü is coming to Steam — ", action: "Wishlist now", campaign: "announcement_bar" },
    tr: { text: "Gökbörü Steam'e Geliyor — ", action: "İstek Listesine Ekle", campaign: "announcement_bar_tr" },
  },
  DEMO_LIVE: {
    en: { text: "Free demo out now on Steam — ", action: "Play Free Demo", campaign: "demo_bar" },
    tr: { text: "Ücretsiz Prolog Demosu Yayında — ", action: "Ücretsiz Demoyu Oyna", campaign: "demo_bar_tr" },
  },
  NEXT_FEST: {
    en: { text: "Play Gökbörü at Steam Next Fest — ", action: "Play Free Demo", campaign: "next_fest" },
    tr: { text: "Gökbörü Steam Next Fest'te — ", action: "Ücretsiz Demoyu Oyna", campaign: "next_fest" },
  },
  LAUNCHED: {
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
