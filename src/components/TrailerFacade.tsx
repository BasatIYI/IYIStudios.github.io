import { useState } from "react";
import { GOKBORU_MEDIA, youtubeEmbedUrl } from "../config/gokboru";

/**
 * Lightweight YouTube facade: only the poster is loaded until the visitor
 * clicks play, then the youtube-nocookie iframe replaces it.
 */
export default function TrailerFacade({ autoLoad = false }: { autoLoad?: boolean }) {
  const [loaded, setLoaded] = useState(autoLoad);
  const embed = youtubeEmbedUrl();

  if (embed && loaded) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
        <iframe
          className="h-full w-full"
          src={embed}
          title="Gökbörü trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  const poster = (
    <img
      src={GOKBORU_MEDIA.trailerPoster}
      alt=""
      width={1920}
      height={1080}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );

  if (!embed) {
    // TODO(placeholder): set GOKBORU.trailerYoutubeId to enable the player.
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
        {poster}
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/80 to-transparent p-6">
          <span className="rounded-full bg-black/70 px-4 py-2 text-sm font-bold tracking-widest text-gray-200 uppercase">
            Trailer coming soon
          </span>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="group relative block aspect-video w-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-2xl"
      aria-label="Play Gökbörü trailer"
    >
      {poster}
      <span className="absolute inset-0 bg-black/30 transition group-hover:bg-black/10" />
      <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_35px_rgba(79,70,229,0.6)] transition group-hover:scale-110">
        <svg className="ml-1 h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
