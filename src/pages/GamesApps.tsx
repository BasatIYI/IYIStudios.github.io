import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../data/products";
import { AppleIcon, GooglePlayIcon } from "../components/icons";
import WishlistButton from "../components/WishlistButton";
import { GOKBORU_MEDIA } from "../config/gokboru";
import { gokboruCopy } from "../data/gokboru";
import { PAGE_META, usePageMeta } from "../seo";
import { responsive } from "../images";

function ProductCard({ product, hoverClass = "hover:animate-wave-glow" }: { product: Product; hoverClass?: string }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    if (hovered && product.screenshots.length > 1) {
      timer = setInterval(() => setIndex((i) => (i + 1) % product.screenshots.length), 2000);
    } else {
      setIndex(0);
    }
    return () => clearInterval(timer);
  }, [hovered, product.screenshots]);

  const isGame = product.type === "Game";

  return (
    <div
      className={`group bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 ${hoverClass} transition duration-300 flex flex-row aspect-square border border-gray-800 shadow-xl relative`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-[55%] p-4 md:p-6 flex flex-col z-20 bg-gray-900/40 backdrop-blur-sm text-left">
        <div className="mb-2">
          <span
            className={`px-2 py-0.5 text-[7px] md:text-[8px] font-black tracking-widest rounded-full uppercase ${
              isGame ? "bg-blue-600/80 text-blue-100" : "bg-green-600/80 text-green-100"
            }`}
          >
            {product.type}
          </span>
        </div>
        <div className="flex items-center gap-3 md:gap-4 mb-3">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden border border-white/20 shadow-lg shrink-0">
            <img
              {...responsive(product.icon, "(min-width: 768px) 64px, 48px")}
              width={256}
              height={256}
              loading="lazy"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-base md:text-2xl font-black text-white group-hover:text-blue-400 transition-colors line-clamp-2 uppercase tracking-tighter leading-none">
            {product.name}
          </h2>
        </div>
        <div className="flex-grow overflow-hidden mb-4">
          <p className="text-[10px] md:text-[12px] leading-relaxed text-gray-400 font-medium italic line-clamp-4 md:line-clamp-6">
            "{product.description}"
          </p>
        </div>
        <div className="mt-auto flex flex-col gap-4">
          <div className="flex items-center justify-center gap-6 py-2 bg-black/20 rounded-lg">
            <GooglePlayIcon className="h-5 w-auto text-white opacity-70 group-hover:opacity-100 transition-opacity" />
            <AppleIcon className="h-5 w-auto text-white opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>
          {isGame ? (
            <a
              href={product.playLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] md:text-[11px] font-black rounded-md transition-all text-center uppercase tracking-widest shadow-lg shadow-blue-900/20 active:scale-95"
            >
              PLAY NOW
            </a>
          ) : (
            <a
              href={product.installLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] md:text-[11px] font-black rounded-md transition-all text-center uppercase tracking-widest shadow-lg shadow-emerald-900/20 active:scale-95"
            >
              INSTALL NOW
            </a>
          )}
        </div>
      </div>
      <div className="w-[45%] h-full relative overflow-hidden bg-black">
        <img
          {...responsive(product.screenshots[index] ?? product.image, "(min-width: 768px) 225px, 45vw")}
          width={360}
          height={640}
          loading="lazy"
          alt={product.name}
          className="w-full h-full object-cover transition duration-700 ease-in-out"
        />
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-900 to-transparent" />
        {product.screenshots.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.screenshots.map((_, i) => (
              <div
                key={i}
                onMouseEnter={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === i ? "bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SectionTitle({ label, accent, bar }: { label: string; accent: string; bar: string }) {
  return (
    <div className="flex flex-col items-center mb-12">
      <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter text-white uppercase group flex items-center gap-4">
        <span className={`w-12 h-[2px] bg-gradient-to-r from-transparent ${accent}`} />
        {label}
        <span className={`w-12 h-[2px] bg-gradient-to-l from-transparent ${accent}`} />
      </h2>
      <div className={`h-1 w-24 bg-gradient-to-r rounded-full mt-2 ${bar}`} />
    </div>
  );
}

function GokboruFeature() {
  return (
    <article className="group mx-auto flex max-w-7xl flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-xl transition duration-300 hover:animate-wave-glow-purple md:flex-row">
      <Link to="/gokboru" className="block md:w-3/5" tabIndex={-1} aria-hidden="true">
        <img
          {...responsive(GOKBORU_MEDIA.capsule, "(min-width: 768px) 60vw, 100vw")}
          alt=""
          width={1232}
          height={706}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-col justify-center gap-4 p-6 text-left md:w-2/5 md:p-10">
        <div className="flex gap-2">
          <span className="rounded-full bg-purple-600/80 px-2 py-0.5 text-[10px] font-black tracking-widest text-purple-100 uppercase">
            PC
          </span>
          <span className="rounded-full bg-blue-600/80 px-2 py-0.5 text-[10px] font-black tracking-widest text-blue-100 uppercase">
            Wishlist now
          </span>
        </div>
        <h2 className="text-3xl font-black tracking-tighter text-white uppercase md:text-4xl">
          <Link to="/gokboru" className="hover:text-blue-400 transition-colors">
            {gokboruCopy.name}
          </Link>
        </h2>
        <p className="text-gray-300">{gokboruCopy.tagline}</p>
        <div className="flex flex-wrap items-center gap-4">
          <WishlistButton campaign="games_page" />
          <Link
            to="/gokboru"
            className="text-sm font-bold tracking-wide text-gray-200 underline decoration-gray-500 underline-offset-4 hover:text-white hover:decoration-white"
          >
            Learn more
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function GamesApps({ products }: { products: Product[] }) {
  usePageMeta(PAGE_META.games);
  const games = products.filter((p) => p.type === "Game");
  const apps = products.filter((p) => p.type === "App");

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center tracking-tight">
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Games &amp; Apps
        </span>
      </h1>

      <div className="mb-20">
        <SectionTitle
          label="PC"
          accent="to-purple-500"
          bar="from-purple-600 to-blue-600 shadow-[0_0_15px_rgba(147,51,234,0.5)]"
        />
        <GokboruFeature />
      </div>

      <div className="mb-20">
        <SectionTitle
          label="GAMES"
          accent="to-blue-500"
          bar="from-blue-600 to-purple-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center justify-center max-w-7xl mx-auto">
          {games.map((p) => (
            <div key={p.id} className="w-full max-w-[500px]">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10 content-left">
        <SectionTitle
          label="APPS"
          accent="to-green-500"
          bar="from-emerald-600 to-green-600 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center justify-center max-w-7xl mx-auto">
          {apps.map((p) => (
            <div key={p.id} className="w-full max-w-[500px]">
              <ProductCard product={p} hoverClass="hover:animate-wave-glow-green" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
