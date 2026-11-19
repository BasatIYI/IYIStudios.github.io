import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { demoLink, GOKBORU, GOKBORU_MEDIA, IS_DEMO_LIVE, steamStoreUrl } from "../config/gokboru";
import { gokboruCopy, gokboruCopyTr } from "../data/gokboru";
import { socialLinks } from "../data/social";
import { PAGE_META, SITE_URL, absoluteUrl, usePageMeta } from "../seo";
import WishlistButton from "../components/WishlistButton";
import TrailerFacade from "../components/TrailerFacade";
import Gallery from "../components/Gallery";
import SteamWidget from "../components/SteamWidget";
import { highPriority } from "../utils";
import { responsive } from "../images";

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="container mx-auto max-w-6xl px-4 py-16">
      <h2 id={`${id}-title`} className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

function OptionalLink({ href, label, pending }: { href: string | null; label: string; pending: string }) {
  const base = "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide transition-colors";
  if (!href) {
    return <span className={`${base} border border-gray-700 text-gray-400 cursor-not-allowed`}>{pending}</span>;
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} border border-blue-500/40 bg-blue-600/20 text-white hover:bg-blue-600`}
    >
      {label}
    </a>
  );
}

function jsonLd(isTr: boolean) {
  const copy = isTr ? gokboruCopyTr : gokboruCopy;
  const store = steamStoreUrl();
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: copy.name,
    description: copy.tagline,
    url: absoluteUrl(isTr ? PAGE_META.gokboruTr.path : PAGE_META.gokboru.path),
    image: absoluteUrl(GOKBORU_MEDIA.keyArt),
    gamePlatform: "PC",
    operatingSystem: "Windows",
    genre: ["Action", "Roguelite", "Arcade", "Top-Down", "Mythology", "Indie"],
    applicationCategory: "Game",
    author: { "@type": "Organization", name: "IYI Studios", url: SITE_URL },
    publisher: { "@type": "Organization", name: "IYI Studios", url: SITE_URL },
  };
  if (store) data.sameAs = [store];
  if (GOKBORU.trailerYoutubeId) {
    data.trailer = {
      "@type": "VideoObject",
      name: `${copy.name} trailer`,
      description: copy.tagline,
      thumbnailUrl: absoluteUrl(GOKBORU_MEDIA.trailerPoster),
      embedUrl: `https://www.youtube-nocookie.com/embed/${GOKBORU.trailerYoutubeId}`,
      uploadDate: "2026-10-30",
    };
  }
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function Gokboru({ lang = "en" }: { lang?: "en" | "tr" }) {
  const isTr = lang === "tr";
  usePageMeta(isTr ? PAGE_META.gokboruTr : PAGE_META.gokboru);
  const copy = isTr ? gokboruCopyTr : gokboruCopy;
  const demoHref = demoLink(isTr ? "demo_bar_tr" : "demo_bar");

  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(isTr) }} />

      {/* Header: key art, logo, wishlist */}
      <section className="relative flex min-h-[70vh] md:min-h-[max(78vh,46vw)] items-end justify-center overflow-hidden">
        <img
          {...responsive(GOKBORU_MEDIA.keyArt, "100vw")}
          alt=""
          width={1920}
          height={1080}
          {...highPriority}
          className="absolute inset-0 h-full w-full object-cover object-top opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-iyiblack via-iyiblack/40 to-transparent" />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 pb-14 pt-36 text-center md:pb-16 md:pt-48">
          <span className="mb-6 inline-block rounded-full bg-purple-900 px-3.5 py-1 text-xs font-bold tracking-widest text-purple-100 uppercase">
            {isTr ? "İSTEK LİSTESİNE EKLE" : "WISHLIST NOW"}
          </span>
          <h1 className="mb-6 w-full">
            <span className="sr-only">Gökbörü</span>
            <img
              {...responsive(GOKBORU_MEDIA.logo, "(min-width: 768px) 512px, 85vw")}
              alt="Gökbörü"
              width={1280}
              height={487}
              className="mx-auto h-auto w-full max-w-md md:max-w-lg drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
            />
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl leading-relaxed">{copy.tagline}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <WishlistButton
              campaign={isTr ? "gokboru_page_tr" : "gokboru_page"}
              size="lg"
              label={isTr ? "Steam'de İstek Listesine Ekle" : "Wishlist on Steam"}
            />
            {IS_DEMO_LIVE && demoHref && (
              <a
                href={demoHref}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/20 hover:scale-105"
              >
                {isTr ? "Ücretsiz Demoyu Oyna" : "Play Free Demo"}
              </a>
            )}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-gray-300 font-medium">
            <span>
              {IS_DEMO_LIVE
                ? isTr
                  ? `${GOKBORU.demoStatusTr} · ${GOKBORU.releaseWindowTr}`
                  : `${GOKBORU.demoStatusEn} · ${GOKBORU.releaseWindow}`
                : isTr
                  ? `Ücretsiz demo: çok yakında · ${GOKBORU.releaseWindowTr}`
                  : `Free demo: coming soon · ${GOKBORU.releaseWindow}`}
            </span>
            <span aria-hidden="true" className="text-gray-600">•</span>
            <a
              href="#trailer"
              className="inline-flex items-center gap-1.5 font-bold text-gray-200 underline decoration-gray-500 underline-offset-4 hover:text-white hover:decoration-white transition-colors"
            >
              {isTr ? "Fragmanı İzle" : "Watch Trailer"}
            </a>
          </div>
        </div>
      </section>

      <Section id="trailer" title={isTr ? "Fragman" : "Trailer"}>
        <TrailerFacade
          posterSrc={GOKBORU_MEDIA.trailerPoster}
          title={isTr ? "Gökbörü Fragmanı" : "Gökbörü Trailer"}
        />
      </Section>

      <Section id="features" title={isTr ? "Özellikler" : "Features"}>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {copy.features.map((f) => (
            <li
              key={f.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900/90 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]"
            >
              {"placeholder" in f && f.placeholder ? (
                <div className="bg-black aspect-video w-full rounded-t-xl" aria-hidden="true" />
              ) : "video" in f && f.video ? (
                <div className="relative aspect-video w-full overflow-hidden bg-black/60">
                  <video
                    src={f.video}
                    poster={"poster" in f ? f.poster : undefined}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    aria-label={f.title}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
              ) : "poster" in f && f.poster ? (
                <div className="relative aspect-video w-full overflow-hidden bg-black/60">
                  <img
                    src={f.poster}
                    alt={f.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {f.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="world" title={copy.world.heading}>
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-gray-300">
          {copy.world.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      {GOKBORU.bossRevealYoutubeId && (
        <Section id="boss-reveal" title={isTr ? "Boss Tanıtımı" : "Boss Reveal"}>
          <p className="mb-6 max-w-3xl text-lg text-gray-300 leading-relaxed">
            {isTr
              ? "Her diyar Türk mitolojisinden efsanevi bir figürle yüzleşmeyle son bulur: Tepegöz, Alkarısı, Karabasan, Abra & Yutpa, Kara Şaman, Temir Han ve Erlik Han."
              : "Every realm culminates in a showdown against a legendary figure from Turkic mythology—Tepegöz, Alkarısı, Karabasan, Abra & Yutpa, Kara Şaman, Temir Han and Erlik Han."}
          </p>
          <TrailerFacade
            videoId={GOKBORU.bossRevealYoutubeId}
            posterSrc={GOKBORU_MEDIA.bossRevealPoster}
            title={isTr ? "Gökbörü — Boss Tanıtımı" : "Gökbörü — Boss Reveal"}
          />
        </Section>
      )}

      {GOKBORU.visualUpdateYoutubeId && (
        <Section id="visual-update" title={isTr ? "Görsel Güncelleme & Oynanabilir Kut'lar" : "Visual Update & Playable Boons"}>
          <p className="mb-6 max-w-3xl text-lg text-gray-300 leading-relaxed">
            {isTr
              ? "Yenilenen görsel atmosferi, ilahi Kut sistemini, Deflect ve Dash mekaniklerini ve taktiksel arena güçlendirmelerini izleyin."
              : "See the overhauled visual atmosphere, divine Boons (Kut System), Deflect and Dash mechanics, and tactical arena power-ups in action."}
          </p>
          <TrailerFacade
            videoId={GOKBORU.visualUpdateYoutubeId}
            posterSrc={GOKBORU_MEDIA.visualUpdatePoster}
            title={isTr ? "Gökbörü — Görsel Güncelleme Fragmanı" : "Gökbörü — Visual Update Trailer"}
          />
        </Section>
      )}

      <Section id="screenshots" title={isTr ? "Ekran Görüntüleri" : "Screenshots"}>
        <Gallery images={GOKBORU_MEDIA.screenshots} name={copy.name} />
      </Section>

      <Section
        id="steam"
        title={
          IS_DEMO_LIVE
            ? isTr
              ? "Steam'de İstek Listesine Ekle & Demoyu Oyna"
              : "Wishlist & Play Demo on Steam"
            : isTr
              ? "Steam'de İstek Listesine Ekle"
              : "Wishlist on Steam"
        }
      >
        <div className="max-w-2xl space-y-6">
          <SteamWidget />
          <WishlistButton
            campaign={isTr ? "gokboru_page_tr" : "gokboru_page"}
            label={isTr ? "Steam'de İstek Listesine Ekle" : "Wishlist on Steam"}
          />
        </div>
      </Section>

      <Section id="requirements" title={isTr ? "Sistem Gereksinimleri" : "System requirements"}>
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full min-w-[480px] text-left text-sm">
            <caption className="sr-only">Gökbörü system requirements</caption>
            <thead className="bg-gray-900 text-gray-200">
              <tr>
                <th scope="col" className="p-4 font-bold">
                  <span className="sr-only">Component</span>
                </th>
                {copy.systemRequirements.columns.map((c) => (
                  <th key={c} scope="col" className="p-4 font-bold">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {copy.systemRequirements.rows.map((row) => (
                <tr key={row.label} className="border-t border-gray-800">
                  <th scope="row" className="p-4 font-medium text-gray-200">
                    {row.label}
                  </th>
                  {row.values.map((v, i) => (
                    <td key={i} className="p-4 text-gray-300">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="community" title={isTr ? "Topluluk & Kapalı Playtest" : "Community & Closed Playtest"}>
        <p className="mb-6 max-w-2xl text-gray-300 leading-relaxed">
          {isTr
            ? "Geliştirme sürecini takip edin, teorilerinizi paylaşın ve Discord üzerinden davet usulü yürütülen kapalı playtest'lere katılın."
            : "Follow development, share your theories and join our invite-only closed playtests on Discord."}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <OptionalLink
            href={GOKBORU.discordUrl}
            label={isTr ? "Kapalı Playtest'e Katıl (Discord)" : "Join Closed Playtest (Discord)"}
            pending={isTr ? "Discord — yakında" : "Discord — coming soon"}
          />
          {socialLinks
            .filter(({ name }) => name !== "Discord")
            .map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`IYI Studios on ${name}`}
                className="rounded-full border border-gray-700 p-3 text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
        </div>
      </Section>

      <Section id="press" title={isTr ? "Basın & İçerik Üreticileri" : "Press & Creators"}>
        <p className="mb-6 max-w-2xl text-gray-300 leading-relaxed">
          {isTr
            ? "Basın mensupları ve yayıncılar için logolar, ana görseller, ekran görüntüleri, bilgi föyü ve inceleme anahtarı talebi."
            : "Logos, key art, screenshots, fact sheet, and review key requests for press and content creators."}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to={isTr ? "/tr/press" : "/press"}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-600/20 px-6 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-blue-600"
          >
            {isTr ? "Basın Kiti Sayfası" : "Open Press Kit"}
          </Link>
          <Link
            to={isTr ? "/tr/creators" : "/creators"}
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-600/20 px-6 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-purple-600"
          >
            {isTr ? "İçerik Üreticisi Paketi" : "Creators Kit"}
          </Link>
          <OptionalLink
            href={GOKBORU.pressKitUrl}
            label={isTr ? "ZIP İndir" : "Download ZIP"}
            pending={isTr ? "Basın kiti — yakında" : "Press kit — coming soon"}
          />
        </div>
      </Section>
    </div>
  );
}
