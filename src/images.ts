import config from "./image-presets.json";

const presets = config.presets.map((p) => ({ ...p, re: new RegExp(p.match) }));

/**
 * `src`/`srcSet`/`sizes` for an image under public/, pointing at the WebP
 * variants made by scripts/optimize-images.mjs. Images without a preset are
 * returned unchanged.
 */
export function responsive(src: string, sizes: string) {
  const preset = presets.find((p) => p.re.test(src));
  if (!preset) return { src };
  const base = `/${config.outDir}${src.replace(/\.[^.]+$/, "")}`;
  const largest = Math.max(...preset.widths);
  return {
    src: `${base}-${largest}.webp`,
    srcSet: preset.widths.map((w) => `${base}-${w}.webp ${w}w`).join(", "),
    sizes,
  };
}
