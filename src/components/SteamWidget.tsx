import { steamWidgetUrl } from "../config/gokboru";
import { SteamIcon } from "./icons";

export default function SteamWidget() {
  const src = steamWidgetUrl();

  if (!src) {
    return (
      <div className="flex h-[190px] w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-gray-700 bg-gray-900 text-center text-gray-300">
        <SteamIcon className="h-8 w-8" />
        <p className="text-sm font-bold tracking-widest uppercase">Steam widget</p>
        <p className="text-xs text-gray-400">Available once the Steam store page is live.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[646px] overflow-hidden rounded-lg shadow-xl">
      <iframe
        src={src}
        title="Gökbörü on Steam"
        frameBorder={0}
        width={646}
        height={190}
        loading="lazy"
        className="w-full max-w-full rounded-lg border-0 block"
      />
    </div>
  );
}
