import { useState } from "react";
import { Link } from "react-router-dom";
import { steamLink } from "../config/gokboru";

// Keep in sync with the inline script in index.html, which hides the bar
// before first paint for visitors who already dismissed it.
export const ANNOUNCEMENT_KEY = "iyi:announcement:gokboru-wishlist";

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  const dismiss = () => {
    setOpen(false);
    try {
      localStorage.setItem(ANNOUNCEMENT_KEY, "dismissed");
    } catch {
      // Storage can be unavailable (private mode, blocked site data); dismissing still works for this visit.
    }
  };

  const href = steamLink("announcement_bar");
  const cta = "font-bold underline decoration-white/40 underline-offset-4 hover:decoration-white";

  return (
    <div className="announcement-bar relative bg-gradient-to-r from-blue-700 to-purple-700 text-white">
      <p className="container mx-auto px-12 py-2 text-center text-sm">
        Gökbörü is now on Steam —{" "}
        {href ? (
          <a href={href} target="_blank" rel="noopener" className={cta}>
            Wishlist
          </a>
        ) : (
          // TODO(placeholder): points to the Gökbörü page until a Steam URL is configured.
          <Link to="/gokboru" className={cta}>
            Wishlist
          </Link>
        )}
      </p>
      <button
        type="button"
        onClick={dismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 text-white/80 hover:bg-white/10 hover:text-white"
        aria-label="Dismiss announcement"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
