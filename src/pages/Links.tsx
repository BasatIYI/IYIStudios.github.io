import { Link, useSearchParams } from "react-router-dom";
import { demoLink, GOKBORU, GOKBORU_MEDIA, IS_DEMO_LIVE, steamLink } from "../config/gokboru";
import { SteamIcon } from "../components/icons";
import { socialLinks } from "../data/social";
import { PAGE_META, usePageMeta } from "../seo";
import { responsive } from "../images";

const ALLOWED_SOURCES = new Set(["x", "instagram", "youtube", "reddit", "discord"]);

export default function Links({ lang = "en" }: { lang?: "en" | "tr" }) {
  const isTr = lang === "tr";
  usePageMeta(isTr ? PAGE_META.linksTr : PAGE_META.links);
  const [searchParams] = useSearchParams();

  const rawSource = (searchParams.get("utm_source") ?? searchParams.get("src") ?? searchParams.get("ref") ?? "")
    .trim()
    .toLowerCase();
  const utmSource = ALLOWED_SOURCES.has(rawSource) ? rawSource : rawSource || "bio";
  const steamHref = steamLink("bio", utmSource, "social");
  const demoHref = demoLink("bio", utmSource, "social");

  const trailerUrl = GOKBORU.trailerYoutubeId
    ? `https://youtu.be/${GOKBORU.trailerYoutubeId}`
    : "https://www.youtube.com/@iyigames6606";

  const cards = [
    ...(IS_DEMO_LIVE && demoHref
      ? [
          {
            label: isTr ? "Ücretsiz Demoyu Oyna (Steam)" : "Play Free Demo (Steam)",
            href: demoHref,
            external: true,
            accent: "border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-100",
          },
        ]
      : []),
    ...(GOKBORU.discordUrl
      ? [
          {
            label: isTr ? "Discord Topluluğuna Katıl" : "Join Discord Community",
            href: GOKBORU.discordUrl,
            external: true,
            accent: "border-indigo-500/40 bg-indigo-950/40 hover:bg-indigo-900/50 text-indigo-100",
          },
        ]
      : []),
    {
      label: isTr ? "Resmî Fragmanı İzle (YouTube)" : "Watch Official Trailer (YouTube)",
      href: trailerUrl,
      external: true,
      accent: "border-red-500/30 bg-gray-900 hover:bg-gray-800 text-gray-100",
    },
    {
      label: isTr ? "Basın Kiti (Press Kit)" : "Press Kit",
      href: isTr ? "/tr/press" : "/press",
      external: false,
      accent: "border-gray-700 bg-gray-900 hover:bg-gray-800 text-gray-100",
    },
    {
      label: isTr ? "İçerik Üreticisi Paketi (Creators)" : "Creators Kit",
      href: isTr ? "/tr/creators" : "/creators",
      external: false,
      accent: "border-gray-700 bg-gray-900 hover:bg-gray-800 text-gray-100",
    },
    {
      label: isTr ? "Gökbörü Resmî Sayfası" : "Gökbörü Official Page",
      href: isTr ? "/tr/gokboru" : "/gokboru",
      external: false,
      accent: "border-gray-700 bg-gray-900 hover:bg-gray-800 text-gray-100",
    },
  ];

  return (
    <div className="container mx-auto flex max-w-lg flex-col items-center px-4 py-14 text-center">
      <img
        {...responsive(GOKBORU_MEDIA.logo, "280px")}
        alt="Gökbörü"
        width={1280}
        height={487}
        className="mb-4 h-auto w-60 max-w-full drop-shadow-lg"
      />
      <p className="mb-2 text-sm font-medium text-gray-300">
        {isTr
          ? "Türk mitolojisinden doğan 3D aksiyon roguelite"
          : "3D territory-capture action roguelite rooted in Turkic mythology"}
      </p>
      <p className="mb-8 text-xs font-semibold tracking-wider text-purple-300 uppercase">
        {IS_DEMO_LIVE
          ? isTr
            ? `Ücretsiz Demo Yayında · ${GOKBORU.releaseWindowTr}`
            : `Free Demo Live · ${GOKBORU.releaseWindow}`
          : isTr
            ? `Ücretsiz demo: çok yakında · ${GOKBORU.releaseWindowTr}`
            : `Free demo: coming soon · ${GOKBORU.releaseWindow}`}
      </p>

      <div className="flex w-full flex-col gap-3">
        {steamHref && (
          <a
            href={steamHref}
            target="_blank"
            rel="noopener"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-base font-bold text-white shadow-[0_0_25px_rgba(79,70,229,0.45)] transition-transform hover:scale-[1.02] hover:from-blue-500 hover:to-purple-500"
          >
            <SteamIcon className="h-5 w-5" />
            <span>{isTr ? "Steam'de İstek Listesine Ekle" : "Wishlist on Steam"}</span>
          </a>
        )}

        {cards.map((item) =>
          item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full rounded-xl border px-6 py-3.5 text-sm font-bold transition-all ${item.accent}`}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.href}
              className={`w-full rounded-xl border px-6 py-3.5 text-sm font-bold transition-all ${item.accent}`}
            >
              {item.label}
            </Link>
          ),
        )}
      </div>

      <ul className="mt-10 flex flex-wrap justify-center gap-3" aria-label="IYI Studios on social media">
        {socialLinks.map(({ name, href, Icon }) => (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`IYI Studios on ${name}`}
              className="flex rounded-full border border-gray-800 bg-gray-900 p-3 text-gray-300 transition-colors hover:border-gray-600 hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
