import { steamStoreUrl } from "./gokboru";

export const SITE = {
  // TODO(placeholder): studio contact address shown in Press / Contact
  contactEmail: null as string | null,
  // TODO(placeholder): studio-wide press kit (falls back to the Gökbörü press kit)
  pressKitUrl: null as string | null,
};

/**
 * Store row under the home hero. Decision pending:
 *  - "links":  show only the stores that have a URL below, as real links
 *  - "hidden": remove the row entirely
 * A store with a null URL is never shown, so the row disappears on its own
 * while no URL is set.
 */
export const STORE_ROW: { mode: "links" | "hidden"; stores: Record<"googlePlay" | "appStore" | "steam" | "epic", string | null> } =
  {
    mode: "links",
    stores: {
      googlePlay: null, // TODO(placeholder): Google Play developer page, https://play.google.com/store/apps/dev?id=<DEV_ID>
      appStore: null, // TODO(placeholder): App Store developer page, https://apps.apple.com/developer/id<DEV_ID>
      steam: steamStoreUrl(), // follows GOKBORU.steamAppId / steamStoreUrl
      epic: null, // No product on Epic Games Store; set a URL only if one is released there.
    },
  };
