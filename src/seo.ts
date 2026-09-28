import { useEffect } from "react";
import { GOKBORU_MEDIA } from "./config/gokboru";

export const SITE_URL = "https://www.iyistudios.com";

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  image: string;
  noindex?: boolean;
}

const DEFAULT_IMAGE = GOKBORU_MEDIA.ogImage;

export const PAGE_META = {
  home: {
    path: "/",
    title: "IYI Studios — Gökbörü, now on Steam",
    description:
      "IYI Studios is an indie game studio. Wishlist Gökbörü, our atmospheric exploration game rooted in Turkic mythology, and discover Galaxy Go, Color Sticks and more.",
    image: DEFAULT_IMAGE,
  },
  gokboru: {
    path: "/gokboru",
    title: "Gökbörü — Wishlist on Steam | IYI Studios",
    description:
      "An atmospheric exploration game that challenges your perception of reality with Turkic mythology. Wishlist Gökbörü on Steam.",
    image: GOKBORU_MEDIA.ogImage,
  },
  games: {
    path: "/games",
    title: "Games & Apps | IYI Studios",
    description:
      "Gökbörü for PC, mobile games Galaxy Go, Color Sticks, Rolldrop and Tetrigun, and the WIMC and WIMB apps from IYI Studios.",
    image: DEFAULT_IMAGE,
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
 * GitHub Pages serves /gokboru from gokboru.html without a trailing-slash redirect.
 */
export const PRERENDER_ROUTES: { url: string; file: string; meta: PageMeta }[] = [
  { url: "/", file: "index.html", meta: PAGE_META.home },
  { url: "/gokboru", file: "gokboru.html", meta: PAGE_META.gokboru },
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
