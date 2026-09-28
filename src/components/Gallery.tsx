import { useState } from "react";
import Modal from "./Modal";
import { responsive } from "../images";

/** Screenshot grid with a keyboard-navigable lightbox (←/→ to move, Esc to close). */
export default function Gallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState<number | null>(null);
  const count = images.length;
  const step = (delta: number) => setActive((i) => (i === null ? i : (i + delta + count) % count));

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <li key={src}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full overflow-hidden rounded-lg border border-gray-800 bg-gray-900"
              aria-label={`Open ${name} screenshot ${i + 1} of ${count}`}
            >
              <img
                {...responsive(src, "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw")}
                alt={`${name} screenshot ${i + 1}`}
                width={1920}
                height={1080}
                loading="lazy"
                className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        label={`${name} screenshots`}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
      >
        {active !== null && (
          <figure className="flex w-full max-w-6xl flex-col items-center gap-3">
            <img
              {...responsive(images[active], "100vw")}
              alt={`${name} screenshot ${active + 1}`}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
            />
            <figcaption className="text-sm text-gray-300" aria-live="polite">
              {active + 1} / {count}
            </figcaption>
          </figure>
        )}
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:left-6"
              aria-label="Previous screenshot"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 md:right-6"
              aria-label="Next screenshot"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </Modal>
    </>
  );
}
