import { steamWidgetUrl } from "../config/gokboru";
import { SteamIcon } from "./icons";

export default function SteamWidget() {
  const src = steamWidgetUrl();

  if (!src) {
    // TODO(placeholder): the official Steam widget appears once GOKBORU.steamAppId is set.
    return (
      <div className="flex h-[190px] w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-gray-700 bg-gray-900 text-center text-gray-300">
        <SteamIcon className="h-8 w-8" />
        <p className="text-sm font-bold tracking-widest uppercase">Steam widget</p>
        <p className="text-xs text-gray-400">Available once the Steam store page is live.</p>
      </div>
    );
  }

  return (
    <iframe
      src={src}
      title="Gökbörü on Steam"
      width="100%"
      height="190"
      loading="lazy"
      className="w-full rounded-lg border-0"
    />
  );
}
