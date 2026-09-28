import { existsSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The hero video is optional: only reference it when the file is actually there.
const hasHeroLoop = existsSync("public/media/games/gokboru/hero-loop.mp4");

export default defineConfig({
  plugins: [react()],
  define: {
    __GOKBORU_HERO_LOOP__: JSON.stringify(hasHeroLoop),
  },
});
