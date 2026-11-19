import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { AppleIcon, EpicGamesIcon, GamepadIcon, GooglePlayIcon, SteamIcon } from "../components/icons";
import WishlistButton from "../components/WishlistButton";
import TrailerFacade from "../components/TrailerFacade";
import Modal from "../components/Modal";
import { demoLink, GOKBORU, GOKBORU_MEDIA, IS_DEMO_LIVE } from "../config/gokboru";
import { gokboruCopy, gokboruCopyTr } from "../data/gokboru";
import { PAGE_META, SITE_URL, usePageMeta } from "../seo";
import { highPriority } from "../utils";
import { SITE, STORE_ROW } from "../config/site";
import { socialLinks } from "../data/social";
import { responsive } from "../images";

const stores = [
  { name: "Google Play", Icon: GooglePlayIcon, size: "h-6", href: STORE_ROW.stores.googlePlay },
  { name: "App Store", Icon: AppleIcon, size: "h-7", href: STORE_ROW.stores.appStore },
  { name: "Steam", Icon: SteamIcon, size: "h-7", href: STORE_ROW.stores.steam },
  { name: "Epic Games", Icon: EpicGamesIcon, size: "h-7", href: STORE_ROW.stores.epic },
].filter((s): s is typeof s & { href: string } => s.href !== null);

function StoreRow() {
  if (STORE_ROW.mode === "hidden" || stores.length === 0) return null;
  return (
    <nav aria-label="Find our games on" className="bg-iyiblack border-y border-gray-800/30 py-4 md:py-8">
      <ul className="container mx-auto px-2 md:px-4 flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-20">
        {stores.map(({ name, Icon, size, href }) => (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener"
              className="flex flex-col items-center gap-3 rounded p-2 text-gray-300 hover:text-white transition-colors group"
            >
              <Icon className={`${size} w-auto`} />
              <span className="text-[11px] font-bold tracking-widest uppercase group-hover:text-blue-300 transition-colors">
                {name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function WatchTrailerButton({ isTr = false }: { isTr?: boolean }) {
  const [open, setOpen] = useState(false);

  if (!GOKBORU.trailerYoutubeId) {
    return (
      <Link
        to={isTr ? "/tr/gokboru" : "/gokboru"}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-bold text-gray-200 underline decoration-gray-500 underline-offset-4 hover:text-white hover:decoration-white transition-colors"
      >
        {isTr ? "Gökbörü'yü Keşfet" : "Explore Gökbörü"}
      </Link>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-bold text-gray-200 underline decoration-gray-500 underline-offset-4 hover:text-white hover:decoration-white transition-colors"
      >
        <svg className="h-4 w-4 text-purple-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
        {isTr ? "Fragmanı İzle" : "Watch Trailer"}
      </button>
      <Modal open={open} onClose={() => setOpen(false)} label={isTr ? "Gökbörü fragmanı" : "Gökbörü trailer"}>
        <div className="w-full max-w-5xl">
          <TrailerFacade
            autoLoad
            posterSrc={GOKBORU_MEDIA.trailerPoster}
            title={isTr ? "Gökbörü fragmanı" : "Gökbörü trailer"}
          />
        </div>
      </Modal>
    </>
  );
}

function BossRevealButton({ isTr = false }: { isTr?: boolean }) {
  const [open, setOpen] = useState(false);
  if (!GOKBORU.bossRevealYoutubeId) return null;
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:bg-white/15"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
        {isTr ? "Boss Tanıtımı" : "Boss Reveal"}
      </button>
      <Modal open={open} onClose={() => setOpen(false)} label={isTr ? "Gökbörü — Boss Tanıtımı" : "Gökbörü — Boss Reveal"}>
        <div className="w-full max-w-5xl">
          <TrailerFacade
            autoLoad
            videoId={GOKBORU.bossRevealYoutubeId}
            posterSrc={GOKBORU_MEDIA.bossRevealPoster}
            title={isTr ? "Gökbörü — Boss Tanıtımı" : "Gökbörü — Boss Reveal"}
          />
        </div>
      </Modal>
    </>
  );
}

function VisualUpdateButton({ isTr = false }: { isTr?: boolean }) {
  const [open, setOpen] = useState(false);
  if (!GOKBORU.visualUpdateYoutubeId) return null;
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-400/40 bg-purple-900/30 px-6 py-3 text-sm font-bold tracking-wide text-purple-200 transition-all duration-300 hover:bg-purple-800/50 hover:text-white shadow-lg"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
        {isTr ? "Görsel Güncelleme" : "Visual Update"}
      </button>
      <Modal open={open} onClose={() => setOpen(false)} label={isTr ? "Gökbörü — Görsel Güncelleme" : "Gökbörü — Visual Update"}>
        <div className="w-full max-w-5xl">
          <TrailerFacade
            autoLoad
            videoId={GOKBORU.visualUpdateYoutubeId}
            posterSrc={GOKBORU_MEDIA.visualUpdatePoster}
            title={isTr ? "Gökbörü — Görsel Güncelleme" : "Gökbörü — Visual Update"}
          />
        </div>
      </Modal>
    </>
  );
}

function organizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IYI Studios",
    url: SITE_URL,
    logo: `${SITE_URL}/media/branding/companylogo.png`,
    description: "Independent game studio creating games with soul and atmosphere.",
    sameAs: [
      "https://store.steampowered.com/app/4886790/Gokboru/",
      "https://discord.gg/wbyRSjavpX",
      "https://www.youtube.com/@iyigames6606",
      "https://x.com/IYIStudios",
      "https://www.instagram.com/iyistudios",
      "https://www.facebook.com/iyigamesmete",
    ],
  };
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function Home({ lang = "en" }: { lang?: "en" | "tr" }) {
  const isTr = lang === "tr";
  usePageMeta(isTr ? PAGE_META.homeTr : PAGE_META.home);
  const copy = isTr ? gokboruCopyTr : gokboruCopy;
  const reducedMotion = usePrefersReducedMotion();
  const parallaxRef = useRef<HTMLDivElement>(null);
  const demoHref = demoLink(isTr ? "demo_bar_tr" : "demo_bar");

  const handleMouseMove = (e: MouseEvent) => {
    if (reducedMotion || !parallaxRef.current) return;
    const x = (window.innerWidth - e.clientX) / 90;
    const y = (window.innerHeight - e.clientY) / 140;
    parallaxRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
  };

  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationJsonLd() }} />

      {/* Gökbörü hero */}
      <section
        className="relative flex min-h-[75vh] md:min-h-[max(84vh,48vw)] items-end justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div ref={parallaxRef} className="absolute inset-0 z-0 transition-transform duration-100 ease-out">
          <img
            {...responsive(GOKBORU_MEDIA.keyArt, "100vw")}
            alt=""
            width={1920}
            height={1080}
            {...highPriority}
            className="h-full w-full object-cover object-top opacity-80"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-iyiblack via-iyiblack/45 to-transparent" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 pb-12 pt-36 text-center md:pb-16 md:pt-52">
          <span className="mb-4 inline-block rounded-full border border-purple-400/30 bg-purple-900/90 px-3.5 py-1 text-xs font-bold tracking-widest text-purple-100 shadow-lg uppercase">
            {isTr ? "İSTEK LİSTESİNE EKLE" : "WISHLIST NOW"}
          </span>
          <h1 className="mb-5 w-full">
            <span className="sr-only">Gökbörü</span>
            <img
              {...responsive(GOKBORU_MEDIA.logo, "(min-width: 768px) 576px, 85vw")}
              alt="Gökbörü"
              width={1280}
              height={487}
              className="mx-auto h-auto w-full max-w-md md:max-w-xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
            />
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] md:text-2xl leading-relaxed">
            {copy.tagline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <WishlistButton
              campaign={isTr ? "hero_tr" : "hero"}
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
            <WatchTrailerButton isTr={isTr} />
          </div>

          {/* Visual Update Video on Home hero */}
          {GOKBORU.visualUpdateYoutubeId && (
            <div className="mt-10 w-full max-w-2xl mx-auto">
              <TrailerFacade
                videoId={GOKBORU.visualUpdateYoutubeId}
                posterSrc={GOKBORU_MEDIA.trailerPoster}
                title={isTr ? "Gökbörü — Görsel Güncelleme Fragmanı" : "Gökbörü — Visual Update Trailer"}
              />
              <p className="mt-3 text-center text-xs tracking-wider uppercase font-bold text-purple-200/90">
                {isTr
                  ? "Visual Update (Demo v2) & Oynanabilir Kut'lar Fragmanı"
                  : "Visual Update (Demo v2) & Playable Boons Trailer"}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Studio intro band */}
      <section className="border-t border-gray-800/60 bg-iyiblack py-12">
        <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {isTr ? (
                <>
                  Ruhu ve{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">atmosferi</span>{" "}
                  olan{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    bağımsız oyunlar
                  </span>
                </>
              ) : (
                <>
                  Indie games with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">soul</span>{" "}
                  and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    atmosphere
                  </span>
                </>
              )}
            </h2>
            <p className="mt-2 text-lg text-gray-300">
              {isTr
                ? "Mobil ve PC için sürükleyici dijital deneyimler geliştiriyoruz."
                : "Creating immersive digital experiences for mobile and PC."}
            </p>
          </div>
          <Link
            to={isTr ? "/tr/games" : "/games"}
            className="shrink-0 px-8 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full hover:from-blue-600 hover:to-purple-600 text-gray-200 hover:text-white font-bold transition-all duration-300 flex items-center gap-3"
          >
            <GamepadIcon className="w-5 h-5" />
            {isTr ? "OYUNLAR & UYGULAMALAR" : "GAMES & APPS"}
          </Link>
        </div>
      </section>

      <StoreRow />

      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Link to={isTr ? "/tr/gokboru" : "/gokboru"} aria-label={isTr ? "Gökbörü hakkında daha fazla bilgi" : "Learn more about Gökbörü"}>
                <img
                  {...responsive(GOKBORU_MEDIA.capsule, "(min-width: 768px) 448px, 100vw")}
                  alt={isTr ? "Gökbörü kapak görseli" : "Gökbörü key art"}
                  width={1232}
                  height={706}
                  loading="lazy"
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 hover:animate-wave-glow-purple transition duration-500"
                />
              </Link>
            </div>
            <div className="md:w-1/2 text-left">
              <span className="inline-block px-3 py-1 bg-purple-900 text-purple-100 text-xs font-bold rounded-full mb-4">
                {isTr ? "İSTEK LİSTESİNE EKLE" : "WISHLIST NOW"}
              </span>
              <h2 className="text-4xl font-bold mb-4">Gökbörü</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {isTr ? "İlk büyük PC oyunumuz. " : "Our first major PC title. "}
                {copy.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <WishlistButton
                  campaign={isTr ? "home_card_tr" : "home_card"}
                  label={
                    IS_DEMO_LIVE
                      ? isTr
                        ? "İstek Listesine Ekle & Demoyu Oyna"
                        : "Wishlist & Play Demo on Steam"
                      : isTr
                        ? "Steam'de İstek Listesine Ekle"
                        : "Wishlist on Steam"
                  }
                />
                <VisualUpdateButton isTr={isTr} />
                <BossRevealButton isTr={isTr} />
                <Link
                  to={isTr ? "/tr/gokboru" : "/gokboru"}
                  className="px-6 py-3 text-sm font-bold tracking-wide text-gray-200 hover:text-white underline decoration-gray-500 underline-offset-4 hover:decoration-white"
                >
                  {isTr ? "Daha fazla bilgi al" : "Learn more"}
                  <span className="sr-only"> about Gökbörü</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" aria-labelledby="about-title" className="scroll-mt-24 py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 id="about-title" className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            {isTr ? "IYI Studios Hakkında" : "About IYI Studios"}
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-gray-300">
            {isTr ? (
              <>
                <p>
                  IYI Studios, Türkiye merkezli bağımsız bir oyun stüdyosudur. Galaxy Go, Color Sticks, Rolldrop ve Tetrigun
                  gibi hızlı oynanabilen mobil oyunlardan, ilk büyük PC oyunumuz olan Gökbörü'ye kadar ruhu ve atmosferi olan
                  yapımlar üretiyoruz.
                </p>
                <p>Ayrıca WIMC ve WIMB gibi kullanıcı gizliliğine tam saygılı bağımsız uygulamalar geliştiriyoruz.</p>
              </>
            ) : (
              <>
                <p>
                  IYI Studios is an independent game studio from Türkiye. We make games with soul and atmosphere—from
                  pick-up-and-play mobile titles like Galaxy Go, Color Sticks, Rolldrop and Tetrigun to Gökbörü, our
                  first major PC game.
                </p>
                <p>We also build small, privacy-friendly apps such as WIMC and WIMB.</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 border-t border-gray-800 bg-gray-900 py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 id="contact-title" className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            {isTr ? "Basın & İletişim" : "Press & Contact"}
          </h2>
          <p className="mb-8 max-w-2xl text-lg text-gray-300 leading-relaxed">
            {isTr
              ? "Basın, ortaklıklar veya içerik üretici erişimi için bizimle iletişime geçin. Basın kitimiz logolar, ana görseller ve ekran görüntüleri içerir."
              : "For press, partnerships or creator access, get in touch. Our press kit has logos, key art and screenshots."}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {SITE.contactEmail ? (
              <a
                href={`mailto:${SITE.contactEmail}`}
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-bold text-white hover:from-blue-500 hover:to-purple-500 transition-all"
              >
                {SITE.contactEmail}
              </a>
            ) : (
              <span className="rounded-full border border-gray-700 px-6 py-3 text-sm font-bold text-gray-400">
                {isTr ? "İletişim e-postası — yakında" : "Contact email — coming soon"}
              </span>
            )}
            <Link
              to={isTr ? "/tr/press" : "/press"}
              className="rounded-full border border-blue-500/40 bg-blue-600/20 px-6 py-3 text-sm font-bold text-white hover:bg-blue-600 transition-all"
            >
              {isTr ? "Basın Kiti" : "Press Kit"}
            </Link>
            <Link
              to={isTr ? "/tr/creators" : "/creators"}
              className="rounded-full border border-purple-500/40 bg-purple-600/20 px-6 py-3 text-sm font-bold text-white hover:bg-purple-600 transition-all"
            >
              {isTr ? "İçerik Üreticileri" : "Creators"}
            </Link>
            {GOKBORU.discordUrl && (
              <a
                href={GOKBORU.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-indigo-500/40 bg-indigo-950/50 px-6 py-3 text-sm font-bold text-indigo-200 hover:bg-indigo-600 hover:text-white transition-all"
              >
                {isTr ? "Kapalı Playtest'e Katıl (Discord)" : "Join Closed Playtest (Discord)"}
              </a>
            )}
          </div>
          <ul className="mt-8 flex flex-wrap gap-3" aria-label="IYI Studios on social media">
            {socialLinks.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`IYI Studios on ${name}`}
                  className="flex rounded-full border border-gray-700 p-3 text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
