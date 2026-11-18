import { useEffect } from "react";
import { GOKBORU_MEDIA } from "./config/gokboru";

export const SITE_URL = "https://www.iyistudios.com";

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  image: string;
  noindex?: boolean;
  lang?: "en" | "tr";
  alternates?: { lang: string; path: string }[];
}

const DEFAULT_IMAGE = GOKBORU_MEDIA.ogImage;

export const PAGE_META = {
  home: {
    path: "/",
    title: "IYI Studios — Gökbörü | Wishlist now on Steam",
    description:
      "IYI Studios is an indie game studio. Wishlist Gökbörü, our 3D territory-capture action roguelite rooted in Turkic mythology, and discover Galaxy Go, Color Sticks and more.",
    image: DEFAULT_IMAGE,
    lang: "en",
    alternates: [
      { lang: "en", path: "/" },
      { lang: "tr", path: "/tr" },
      { lang: "x-default", path: "/" },
    ],
  },
  homeTr: {
    path: "/tr",
    title: "IYI Studios — Gökbörü | Steam'de İstek Listesine Ekle",
    description:
      "IYI Studios bağımsız oyun stüdyosudur. Türk mitolojisinden doğan 3D taktiksel alan kapma ve roguelite oyunu Gökbörü'yü Steam'de istek listene ekle.",
    image: DEFAULT_IMAGE,
    lang: "tr",
    alternates: [
      { lang: "en", path: "/" },
      { lang: "tr", path: "/tr" },
      { lang: "x-default", path: "/" },
    ],
  },
  gokboru: {
    path: "/gokboru",
    title: "Gökbörü — Wishlist on Steam | IYI Studios",
    description:
      "Draw a line, close the loop, crush every demon caught inside. A 3D arcade action roguelite born from Turkic mythology. Wishlist Gökbörü on Steam.",
    image: GOKBORU_MEDIA.ogImage,
    lang: "en",
    alternates: [
      { lang: "en", path: "/gokboru" },
      { lang: "tr", path: "/tr/gokboru" },
      { lang: "x-default", path: "/gokboru" },
    ],
  },
  gokboruTr: {
    path: "/tr/gokboru",
    title: "Gökbörü — Steam'de İstek Listesine Ekle | IYI Studios",
    description:
      "Çizgi çek, alanı kapat, içinde kalan iblisleri yok et. Türk mitolojisinden doğan 3D arcade aksiyon roguelite oyunu Gökbörü'yü Steam'de istek listene ekle.",
    image: GOKBORU_MEDIA.ogImage,
    lang: "tr",
    alternates: [
      { lang: "en", path: "/gokboru" },
      { lang: "tr", path: "/tr/gokboru" },
      { lang: "x-default", path: "/gokboru" },
    ],
  },
  games: {
    path: "/games",
    title: "Games & Apps | IYI Studios",
    description:
      "Gökbörü for PC, mobile games Galaxy Go, Color Sticks, Rolldrop and Tetrigun, and the WIMC and WIMB apps from IYI Studios.",
    image: DEFAULT_IMAGE,
    lang: "en",
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
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
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
