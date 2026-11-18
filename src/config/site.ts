import { steamLink } from "./gokboru";

export const SITE = {
  contactEmail: "iyigamesmete@gmail.com",
  pressKitUrl: "/presskit/gokboru-presskit.zip",
};

/**
 * Store row under the home hero.
 *  - "links":  show only the stores that have a URL below, as real links
 *  - "hidden": remove the row entirely
 */
export const STORE_ROW: { mode: "links" | "hidden"; stores: Record<"googlePlay" | "appStore" | "steam" | "epic", string | null> } =
  {
    mode: "links",
    stores: {
      googlePlay: null,
      appStore: null,
      steam: steamLink("home_steam_icon"), // follows GOKBORU with utm_campaign=home_steam_icon
      epic: null,
    },
  };
