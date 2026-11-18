import { useEffect, useState } from "react";
import { GOKBORU_MEDIA } from "../config/gokboru";
import { responsive } from "../images";

interface GameplayLoopVideoProps {
  className?: string;
  isTr?: boolean;
}

export default function GameplayLoopVideo({ className = "", isTr = false }: GameplayLoopVideoProps) {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div
      className={`relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-purple-500/30 bg-black/70 shadow-[0_0_30px_rgba(147,51,234,0.35)] backdrop-blur-md transition-all duration-300 hover:border-purple-400/50 ${className}`}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {reducedMotion ? (
          <img
            {...responsive(GOKBORU_MEDIA.trailerPoster, "(min-width: 768px) 672px, 100vw")}
            alt={isTr ? "Gökbörü Oynanış Önizlemesi" : "Gökbörü Gameplay Preview"}
            width={1920}
            height={1080}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <video
            className="h-full w-full object-cover"
            src={GOKBORU_MEDIA.heroLoop}
            poster={GOKBORU_MEDIA.trailerPoster}
            autoPlay
            muted
            loop
            playsInline
            aria-label={isTr ? "Gökbörü Oynanış Döngüsü" : "Gökbörü Gameplay Loop"}
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-center">
          <span className="inline-block rounded-full border border-purple-400/40 bg-purple-950/80 px-3.5 py-1 text-[11px] font-bold tracking-widest text-purple-200 uppercase shadow-lg">
            {isTr ? "Oynanış Döngüsü • Core Gameplay Loop" : "Core Gameplay Loop • 60 FPS"}
          </span>
        </div>
      </div>
    </div>
  );
}
