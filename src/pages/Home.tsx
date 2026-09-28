import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { AppleIcon, EpicGamesIcon, GamepadIcon, GooglePlayIcon, SteamIcon } from "../components/icons";
import WishlistButton from "../components/WishlistButton";
import TrailerFacade from "../components/TrailerFacade";
import Modal from "../components/Modal";
import { GOKBORU, GOKBORU_MEDIA, HAS_HERO_LOOP } from "../config/gokboru";
import { gokboruCopy } from "../data/gokboru";
import { PAGE_META, usePageMeta } from "../seo";
import { highPriority } from "../utils";
import { SITE, STORE_ROW } from "../config/site";
import { GOKBORU as GOKBORU_CONFIG } from "../config/gokboru";
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
  const [reduced, setReduced] = useState(true); // assume reduced until we know, so nothing animates early
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function WatchTrailerButton() {
  const [open, setOpen] = useState(false);
  const base =
    "inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-bold tracking-wide transition-all duration-300";

  if (!GOKBORU.trailerYoutubeId) {
    // TODO(placeholder): becomes active once GOKBORU.trailerYoutubeId is set.
    return <span className={`${base} border border-gray-600 text-gray-300 cursor-not-allowed`}>Trailer coming soon</span>;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${base} border border-white/30 bg-white/5 text-white hover:bg-white/15`}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
        Watch Trailer
      </button>
      <Modal open={open} onClose={() => setOpen(false)} label="Gökbörü trailer">
        <div className="w-full max-w-5xl">
          <TrailerFacade autoLoad />
        </div>
      </Modal>
    </>
  );
}

export default function Home() {
  usePageMeta(PAGE_META.home);
  const reducedMotion = usePrefersReducedMotion();
  const parallaxRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (reducedMotion || !parallaxRef.current) return;
    const x = (window.innerWidth - e.clientX) / 50;
    const y = (window.innerHeight - e.clientY) / 50;
    parallaxRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
  };

  return (
    <div className="flex flex-col">
      {/* Gökbörü hero */}
      <section
        className="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div ref={parallaxRef} className="absolute inset-0 z-0 transition-transform duration-100 ease-out">
          <img
            {...responsive(GOKBORU_MEDIA.keyArt, "100vw")}
            alt=""
            width={1920}
            height={1080}
            {...highPriority}
            className="h-full w-full object-cover opacity-60"
          />
          {HAS_HERO_LOOP && !reducedMotion && (
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-60"
              src={GOKBORU_MEDIA.heroLoop}
              poster={GOKBORU_MEDIA.keyArt}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
          )}
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-iyiblack via-iyiblack/30 to-transparent" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center">
          <span className="mb-6 inline-block rounded-full bg-purple-900 px-3 py-1 text-xs font-bold text-purple-100">
            WISHLIST NOW
          </span>
          <h1 className="mb-6 w-full">
            <img
              src={GOKBORU_MEDIA.logo}
              alt="Gökbörü"
              width={1200}
              height={400}
              className="mx-auto h-auto w-full max-w-2xl"
            />
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-gray-200 md:text-2xl">{gokboruCopy.tagline}</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <WishlistButton campaign="hero" size="lg" />
            <WatchTrailerButton />
          </div>
        </div>
      </section>

      {/* Studio intro band */}
      <section className="border-t border-gray-800/60 bg-iyiblack py-12">
        <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Indie games with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">soul</span>{" "}
              and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                atmosphere
              </span>
            </h2>
            <p className="mt-2 text-lg text-gray-300">Creating immersive digital experiences for mobile and PC.</p>
          </div>
          <Link
            to="/games"
            className="shrink-0 px-8 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full hover:from-blue-600 hover:to-purple-600 text-gray-200 hover:text-white font-bold transition-all duration-300 flex items-center gap-3"
          >
            <GamepadIcon className="w-5 h-5" />
            GAMES &amp; APPS
          </Link>
        </div>
      </section>

      <StoreRow />

      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Link to="/gokboru" aria-label="Learn more about Gökbörü">
                <img
                  {...responsive(GOKBORU_MEDIA.capsule, "(min-width: 768px) 448px, 100vw")}
                  alt="Gökbörü key art"
                  width={1232}
                  height={706}
                  loading="lazy"
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 hover:animate-wave-glow-purple transition duration-500"
                />
              </Link>
            </div>
            <div className="md:w-1/2 text-left">
              <span className="inline-block px-3 py-1 bg-purple-900 text-purple-100 text-xs font-bold rounded-full mb-4">
                WISHLIST NOW
              </span>
              <h2 className="text-4xl font-bold mb-4">Gökbörü</h2>
              <p className="text-gray-300 text-lg mb-6">Our first major PC title. {gokboruCopy.tagline}</p>
              <div className="flex flex-wrap items-center gap-4">
                <WishlistButton campaign="home_card" />
                <Link
                  to="/gokboru"
                  className="px-6 py-3 text-sm font-bold tracking-wide text-gray-200 hover:text-white underline decoration-gray-500 underline-offset-4 hover:decoration-white"
                >
                  Learn more<span className="sr-only"> about Gökbörü</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" aria-labelledby="about-title" className="scroll-mt-24 py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 id="about-title" className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            About IYI Studios
          </h2>
          {/* TODO(placeholder): studio introduction */}
          <div className="space-y-4 text-lg leading-relaxed text-gray-300">
            <p>
              IYI Studios is an independent game studio from Türkiye. We make games with soul and atmosphere—from
              pick-up-and-play mobile titles like Galaxy Go, Color Sticks, Rolldrop and Tetrigun to Gökbörü, our
              first major PC game.
            </p>
            <p>We also build small, privacy-friendly apps such as WIMC and WIMB.</p>
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 border-t border-gray-800 bg-gray-900 py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 id="contact-title" className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Press &amp; Contact
          </h2>
          <p className="mb-8 max-w-2xl text-lg text-gray-300">
            For press, partnerships or creator access, get in touch. Our press kit has logos, key art and screenshots.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {SITE.contactEmail ? (
              <a
                href={`mailto:${SITE.contactEmail}`}
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-bold text-white hover:from-blue-500 hover:to-purple-500"
              >
                {SITE.contactEmail}
              </a>
            ) : (
              // TODO(placeholder): set SITE.contactEmail in src/config/site.ts
              <span className="rounded-full border border-gray-700 px-6 py-3 text-sm font-bold text-gray-400">
                Contact email — coming soon
              </span>
            )}
            {(SITE.pressKitUrl ?? GOKBORU_CONFIG.pressKitUrl) ? (
              <a
                href={(SITE.pressKitUrl ?? GOKBORU_CONFIG.pressKitUrl)!}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-blue-500/40 bg-blue-600/20 px-6 py-3 text-sm font-bold text-white hover:bg-blue-600"
              >
                Press kit
              </a>
            ) : (
              <span className="rounded-full border border-gray-700 px-6 py-3 text-sm font-bold text-gray-400">
                Press kit — coming soon
              </span>
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
