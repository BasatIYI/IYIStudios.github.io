import { steamLink, type SteamCampaign } from "../config/gokboru";
import { SteamIcon } from "./icons";

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

/**
 * Primary "Wishlist on Steam" CTA. Renders a passive, clearly labelled
 * state while no Steam URL is configured.
 */
export default function WishlistButton({
  campaign,
  size = "md",
  className = "",
}: {
  campaign: SteamCampaign;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const href = steamLink(campaign);
  const base = `inline-flex items-center justify-center gap-3 rounded-full font-bold tracking-wide transition-all duration-300 ${sizes[size]} ${className}`;

  if (!href) {
    // TODO(placeholder): becomes a live link once GOKBORU.steamAppId / steamStoreUrl is set.
    return (
      <span
        className={`${base} border border-gray-600 bg-gray-800/60 text-gray-300 cursor-not-allowed`}
      >
        <SteamIcon className="w-5 h-5" />
        <span>
          Wishlist on Steam <span className="font-normal text-gray-400">— link coming soon</span>
        </span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`${base} bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_35px_rgba(79,70,229,0.6)] hover:scale-105`}
    >
      <SteamIcon className="w-5 h-5" />
      Wishlist on Steam
    </a>
  );
}
