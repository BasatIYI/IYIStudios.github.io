import { useEffect } from "react";
import { GOKBORU_MEDIA } from "./config/gokboru";

export const SITE_URL = "https://www.iyistudios.com";

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  noindex?: boolean;
  lang?: "en" | "tr";
  alternates?: { lang: string; path: string }[];
}

const DEFAULT_IMAGE = GOKBORU_MEDIA.ogImage;

const pair = (enPath: string, trPath: string) => [
  { lang: "en", path: enPath },
  { lang: "tr", path: trPath },
  { lang: "x-default", path: enPath },
];

export const PAGE_META = {
  home: {
    path: "/",
    title: "IYI Studios — Gökbörü | Wishlist now on Steam",
    description:
      "IYI Studios is an indie game studio. Wishlist Gökbörü, our 3D territory-capture action roguelite rooted in Turkic mythology, and discover Galaxy Go, Color Sticks and more.",
    image: DEFAULT_IMAGE,
    lang: "en",
    alternates: pair("/", "/tr"),
  },
  homeTr: {
    path: "/tr",
    title: "IYI Studios — Gökbörü | Steam'de İstek Listesine Ekle",
    description:
      "IYI Studios bağımsız oyun stüdyosudur. Türk mitolojisinden doğan 3D taktiksel alan kapma ve roguelite oyunu Gökbörü'yü Steam'de istek listene ekle.",
    image: DEFAULT_IMAGE,
    lang: "tr",
    alternates: pair("/", "/tr"),
  },
  gokboru: {
    path: "/gokboru",
    title: "Gökbörü — Wishlist on Steam | IYI Studios",
    description:
      "Draw a line, close the loop, crush every demon caught inside. A 3D arcade action roguelite born from Turkic mythology. Wishlist Gökbörü on Steam.",
    image: GOKBORU_MEDIA.ogImage,
    video: GOKBORU_MEDIA.heroLoop,
    lang: "en",
    alternates: pair("/gokboru", "/tr/gokboru"),
  },
  gokboruTr: {
    path: "/tr/gokboru",
    title: "Gökbörü — Steam'de İstek Listesine Ekle | IYI Studios",
    description:
      "Çizgi çek, alanı kapat, içinde kalan iblisleri yok et. Türk mitolojisinden doğan 3D arcade aksiyon roguelite oyunu Gökbörü'yü Steam'de istek listene ekle.",
    image: GOKBORU_MEDIA.ogImage,
    video: GOKBORU_MEDIA.heroLoop,
    lang: "tr",
    alternates: pair("/gokboru", "/tr/gokboru"),
  },
  games: {
    path: "/games",
    title: "Games & Apps | IYI Studios",
    description:
      "Gökbörü for PC, mobile games Galaxy Go, Color Sticks, Rolldrop and Tetrigun, and the WIMC and WIMB apps from IYI Studios.",
    image: DEFAULT_IMAGE,
    lang: "en",
    alternates: pair("/games", "/tr/games"),
  },
  gamesTr: {
    path: "/tr/games",
    title: "Oyunlar & Uygulamalar | IYI Studios",
    description:
      "PC için Gökbörü, mobil oyunlar Galaxy Go, Color Sticks, Rolldrop, Tetrigun ve WIMC/WIMB uygulamaları.",
    image: DEFAULT_IMAGE,
    lang: "tr",
    alternates: pair("/games", "/tr/games"),
  },
  links: {
    path: "/links",
    title: "Gökbörü & IYI Studios — Official Links",
    description:
      "Wishlist Gökbörü on Steam, join Discord, watch the trailer, or access Press Kit and Creators Kit.",
    image: DEFAULT_IMAGE,
    lang: "en",
    alternates: pair("/links", "/tr/links"),
  },
  linksTr: {
    path: "/tr/links",
    title: "Gökbörü & IYI Studios — Resmî Bağlantılar",
    description:
      "Gökbörü'yü Steam'de istek listene ekle, Discord topluluğuna katıl, fragmanı izle veya Basın Kiti ve İçerik Üreticisi Paketine ulaş.",
    image: DEFAULT_IMAGE,
    lang: "tr",
    alternates: pair("/links", "/tr/links"),
  },
  creators: {
    path: "/creators",
    title: "Gökbörü Creators Kit — Streamers & YouTubers | IYI Studios",
    description:
      "Monetization permission, stream-safe audio policy, downloadable logos, clips, screenshots, and Steam key requests for Gökbörü.",
    image: DEFAULT_IMAGE,
    lang: "en",
    alternates: pair("/creators", "/tr/creators"),
  },
  creatorsTr: {
    path: "/tr/creators",
    title: "Gökbörü İçerik Üreticisi Paketi | IYI Studios",
    description:
      "Yayıncılar ve YouTuber'lar için gelir elde etme izni, telifsiz müzik beyanı, indirilebilir materyaller ve Steam anahtarı talebi.",
    image: DEFAULT_IMAGE,
    lang: "tr",
    alternates: pair("/creators", "/tr/creators"),
  },
  press: {
    path: "/press",
    title: "Gökbörü Press Kit & Fact Sheet | IYI Studios",
    description:
      "Official press kit, fact sheet, trailers, screenshots, AI disclosure, and contact info for Gökbörü by IYI Studios.",
    image: DEFAULT_IMAGE,
    lang: "en",
    alternates: pair("/press", "/tr/press"),
  },
  pressTr: {
    path: "/tr/press",
    title: "Gökbörü Basın Kiti & Bilgi Föyü | IYI Studios",
    description:
      "IYI Studios tarafından geliştirilen Gökbörü için resmî basın kiti, bilgi föyü, ekran görüntüleri, yapay zekâ beyanı ve iletişim bilgileri.",
    image: DEFAULT_IMAGE,
    lang: "tr",
    alternates: pair("/press", "/tr/press"),
  },
  devlog: {
    path: "/devlog",
    title: "Gökbörü Development Log | IYI Studios",
    description: "Development updates, mechanic deep-dives, and studio notes for Gökbörü.",
    image: DEFAULT_IMAGE,
    lang: "en",
    alternates: pair("/devlog", "/tr/devlog"),
  },
  devlogTr: {
    path: "/tr/devlog",
    title: "Gökbörü Geliştirici Günlüğü | IYI Studios",
    description: "Gökbörü geliştirme sürecinden güncellemeler, mekanik derinlikler ve stüdyo notları.",
    image: DEFAULT_IMAGE,
    lang: "tr",
    alternates: pair("/devlog", "/tr/devlog"),
  },
  notFound: {
    path: "/404",
    title: "Page not found | IYI Studios",
    description: "The page you are looking for does not exist or has moved.",
    image: DEFAULT_IMAGE,
    noindex: true,
  },
} satisfies Record<string, PageMeta>;

/**
 * Pages written to static HTML at build time (scripts/prerender.mjs).
 * GitHub Pages serves /gokboru from gokboru.html, and /tr from tr/index.html.
 */
export const PRERENDER_ROUTES: { url: string; file: string; meta: PageMeta }[] = [
  { url: "/", file: "index.html", meta: PAGE_META.home },
  { url: "/tr", file: "tr/index.html", meta: PAGE_META.homeTr },
  { url: "/gokboru", file: "gokboru.html", meta: PAGE_META.gokboru },
  { url: "/tr/gokboru", file: "tr/gokboru.html", meta: PAGE_META.gokboruTr },
  { url: "/games", file: "games.html", meta: PAGE_META.games },
  { url: "/tr/games", file: "tr/games.html", meta: PAGE_META.gamesTr },
  { url: "/links", file: "links.html", meta: PAGE_META.links },
  { url: "/tr/links", file: "tr/links.html", meta: PAGE_META.linksTr },
  { url: "/creators", file: "creators.html", meta: PAGE_META.creators },
  { url: "/tr/creators", file: "tr/creators.html", meta: PAGE_META.creatorsTr },
  { url: "/press", file: "press.html", meta: PAGE_META.press },
  { url: "/tr/press", file: "tr/press.html", meta: PAGE_META.pressTr },
  { url: "/devlog", file: "devlog.html", meta: PAGE_META.devlog },
  { url: "/tr/devlog", file: "tr/devlog.html", meta: PAGE_META.devlogTr },
  { url: "/404", file: "404.html", meta: PAGE_META.notFound },
];

/** Old URLs that get a static redirect page (GitHub Pages has no server-side redirects). */
export const LEGACY_REDIRECTS = [{ from: "games-apps.html", to: "/games" }];

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function removeMeta(attr: "name" | "property", key: string) {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove();
}

/** Keeps title and social tags in sync when navigating client-side. */
export function usePageMeta(meta: PageMeta) {
  useEffect(() => {
    const url = absoluteUrl(meta.path);
    const image = absoluteUrl(meta.image);
    document.title = meta.title;
    if (meta.lang) {
      document.documentElement.lang = meta.lang;
    }
    setMeta("name", "description", meta.description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    if (meta.video) {
      const videoUrl = absoluteUrl(meta.video);
      setMeta("property", "og:video", videoUrl);
      setMeta("property", "og:video:type", "video/mp4");
      setMeta("property", "og:video:width", "1920");
      setMeta("property", "og:video:height", "1080");
    } else {
      removeMeta("property", "og:video");
      removeMeta("property", "og:video:type");
      removeMeta("property", "og:video:width");
      removeMeta("property", "og:video:height");
    }
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);
    setMeta("name", "twitter:image", image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (meta.noindex) {
      canonical?.remove();
    } else {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = url;
    }

    // Manage hreflang alternates
    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    if (meta.alternates) {
      for (const alt of meta.alternates) {
        const link = document.createElement("link");
        link.rel = "alternate";
        link.hreflang = alt.lang;
        link.href = absoluteUrl(alt.path);
        document.head.appendChild(link);
      }
    }

    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (meta.noindex) {
      if (!robots) {
        robots = document.createElement("meta");
        robots.name = "robots";
        document.head.appendChild(robots);
      }
      robots.content = "noindex";
    } else {
      robots?.remove();
    }
  }, [meta]);
}
