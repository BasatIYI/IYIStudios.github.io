// Builds resized WebP variants of the site images into public/optimized/
// (git-ignored). Originals are left untouched. Presets live in
// src/image-presets.json and are shared with src/images.ts.
// Runs automatically before `dev` and `build`; unchanged images are skipped.
//
//   npm run images
//   npm run images -- --force

import { mkdirSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import sharp from "sharp";

const PUBLIC = "public";
const config = JSON.parse(readFileSync("src/image-presets.json", "utf8"));
const presets = config.presets.map((p) => ({ ...p, re: new RegExp(p.match) }));
const force = process.argv.includes("--force");

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

const mtime = (path) => {
  try {
    return statSync(path).mtimeMs;
  } catch {
    return 0;
  }
};

let written = 0;
let skipped = 0;
let before = 0;
let after = 0;

for (const file of walk(join(PUBLIC, "media"))) {
  const url = "/" + relative(PUBLIC, file).split(sep).join("/");
  const preset = presets.find((p) => p.re.test(url));
  if (!preset) continue;

  const srcTime = mtime(file);
  const base = url.replace(/\.[^.]+$/, "");
  const largest = join(PUBLIC, config.outDir, `${base}-${Math.max(...preset.widths)}.webp`);
  before += statSync(file).size;

  for (const width of preset.widths) {
    const out = join(PUBLIC, config.outDir, `${base}-${width}.webp`);
    if (!force && mtime(out) >= srcTime) {
      skipped++;
      continue;
    }
    mkdirSync(dirname(out), { recursive: true });
    await sharp(file)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: config.quality, effort: 5 })
      .toFile(out);
    written++;
  }
  after += statSync(largest).size;
}

const mb = (n) => (n / 1024 / 1024).toFixed(1) + " MB";
console.log(`images: ${written} written, ${skipped} up to date · sources ${mb(before)} → largest variants ${mb(after)}`);
