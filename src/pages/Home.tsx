import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { AppleIcon, EpicGamesIcon, GooglePlayIcon, PhoneIcon, SteamIcon } from "../components/icons";
import WishlistButton from "../components/WishlistButton";
import TrailerFacade from "../components/TrailerFacade";
import Modal from "../components/Modal";
import { GOKBORU, GOKBORU_MEDIA, HAS_HERO_LOOP } from "../config/gokboru";
import { gokboruCopy } from "../data/gokboru";
import { PAGE_META, usePageMeta } from "../seo";
import { highPriority } from "../utils";

const stores = [
  { name: "Google Play", Icon: GooglePlayIcon, size: "h-6" },
  { name: "App Store", Icon: AppleIcon, size: "h-7" },
  { name: "Steam", Icon: SteamIcon, size: "h-7" },
  { name: "Epic Games", Icon: EpicGamesIcon, size: "h-7" },
];

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
            src={GOKBORU_MEDIA.keyArt}
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
            to="/games-apps"
            className="shrink-0 px-8 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full hover:from-blue-600 hover:to-purple-600 text-gray-200 hover:text-white font-bold transition-all duration-300 flex items-center gap-3"
          >
            <PhoneIcon className="w-5 h-5" />
            GAMES &amp; APPS
          </Link>
        </div>
      </section>

      <div className="bg-iyiblack border-y border-gray-800/30 py-4 md:py-8 overflow-hidden">
        <div className="container mx-auto px-2 md:px-4 flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-20">
          {stores.map(({ name, Icon, size }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-3 opacity-20 hover:opacity-100 transition-all duration-500 cursor-default grayscale hover:grayscale-0 group"
            >
              <Icon className={`${size} w-auto`} />
              <span className="text-[10px] font-bold tracking-widest text-white uppercase group-hover:text-blue-400 transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Link to="/gokboru" aria-label="Learn more about Gökbörü">
                <img
                  src={GOKBORU_MEDIA.capsule}
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
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
