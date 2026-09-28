import type { ReactNode } from "react";
import { GOKBORU, GOKBORU_MEDIA, steamStoreUrl } from "../config/gokboru";
import { gokboruCopy as copy } from "../data/gokboru";
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
  const base = "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide";
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

function jsonLd() {
  const store = steamStoreUrl();
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: copy.name,
    description: copy.tagline,
    url: absoluteUrl(PAGE_META.gokboru.path),
    image: absoluteUrl(GOKBORU_MEDIA.keyArt),
    gamePlatform: "PC",
    operatingSystem: "Windows", // TODO(placeholder): confirm supported platforms
    genre: ["Adventure", "Exploration"], // TODO(placeholder): confirm genres
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
      // TODO(placeholder): add uploadDate (ISO 8601) once the trailer is published
    };
  }
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function Gokboru() {
  usePageMeta(PAGE_META.gokboru);

  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd() }} />

      {/* Header: key art, logo, wishlist */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <img
          {...responsive(GOKBORU_MEDIA.keyArt, "100vw")}
          alt=""
          width={1920}
          height={1080}
          {...highPriority}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-iyiblack via-iyiblack/40 to-transparent" />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center">
          <span className="mb-6 inline-block rounded-full bg-purple-900 px-3 py-1 text-xs font-bold text-purple-100">
            WISHLIST NOW
          </span>
          <h1 className="mb-6 w-full">
            <img
              src={GOKBORU_MEDIA.logo}
              alt="Gökbörü"
              width={1200}
              height={400}
              className="mx-auto h-auto w-full max-w-xl"
            />
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">{copy.tagline}</p>
          <WishlistButton campaign="gokboru_page" size="lg" />
          <p className="mt-4 text-sm text-gray-300">Release: {GOKBORU.releaseWindow}</p>
        </div>
      </section>

      <Section id="trailer" title="Trailer">
        <TrailerFacade />
      </Section>

      <Section id="features" title="Features">
        <ul className="grid gap-6 sm:grid-cols-2">
          {copy.features.map((f) => (
            <li key={f.title} className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <h3 className="mb-2 text-xl font-bold text-white">{f.title}</h3>
              <p className="text-gray-300">{f.body}</p>
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

      <Section id="screenshots" title="Screenshots">
        <Gallery images={GOKBORU_MEDIA.screenshots} name={copy.name} />
      </Section>

      <Section id="steam" title="Wishlist on Steam">
        <div className="max-w-2xl space-y-6">
          <SteamWidget />
          <WishlistButton campaign="gokboru_page" />
        </div>
      </Section>

      <Section id="requirements" title="System requirements">
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="w-full min-w-[480px] text-left text-sm">
            <caption className="sr-only">Gökbörü system requirements (to be announced)</caption>
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

      <Section id="community" title="Community">
        <p className="mb-6 max-w-2xl text-gray-300">
          Follow development, share your theories and be the first to hear about playtests.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <OptionalLink href={GOKBORU.discordUrl} label="Join our Discord" pending="Discord — coming soon" />
          {socialLinks.map(({ name, href, Icon }) => (
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

      <Section id="press" title="Press">
        <p className="mb-6 max-w-2xl text-gray-300">Logos, key art, screenshots and fact sheet for press and creators.</p>
        <OptionalLink href={GOKBORU.pressKitUrl} label="Download press kit" pending="Press kit — coming soon" />
      </Section>
    </div>
  );
}
