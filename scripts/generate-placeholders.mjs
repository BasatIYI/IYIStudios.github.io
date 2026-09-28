// Generates labelled placeholder images for Gökbörü.
// Existing files are never overwritten, so once a real asset is dropped in
// under the same name it stays. Use --force to regenerate everything.
//
//   npm run placeholders
//   npm run placeholders -- --force

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const OUT = "public/media/games/gokboru";
const force = process.argv.includes("--force");

const BG = "#111318";
const FRAME = "#2a2e37";
const TEXT = "#d1d5db";
const MUTED = "#8b919c";

const assets = [
  { file: "key-art.webp", w: 1920, h: 1080, label: "Gökbörü — Key Art", use: "Home hero background · Gökbörü page header" },
  { file: "capsule-main.webp", w: 1232, h: 706, label: "Gökbörü — Main Capsule", use: "Home card · Games page card" },
  { file: "trailer-poster.webp", w: 1920, h: 1080, label: "Gökbörü — Trailer Poster", use: "Shown before the trailer loads" },
  ...[1, 2, 3, 4, 5, 6].map((n) => ({
    file: `screenshot-0${n}.webp`,
    w: 1920,
    h: 1080,
    label: `Gökbörü — Screenshot ${n}`,
    use: "Gökbörü page gallery",
  })),
  { file: "og-image.png", w: 1200, h: 630, label: "Gökbörü — Social Share Image", use: "Open Graph / Twitter Card" },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function placeholderSvg({ w, h, label, use, file, transparent = false, scale }) {
  const s = scale ?? Math.min(w, h) / 1080; // type scale relative to a 1080px frame
  const pad = Math.round(24 * s);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  ${transparent ? "" : `<rect width="100%" height="100%" fill="${BG}"/>`}
  <rect x="${pad}" y="${pad}" width="${w - pad * 2}" height="${h - pad * 2}" fill="none" stroke="${FRAME}" stroke-width="${Math.max(2, Math.round(4 * s))}" stroke-dasharray="${Math.round(24 * s)} ${Math.round(16 * s)}"/>
  ${transparent ? "" : `<path d="M${pad} ${pad} L${w - pad} ${h - pad} M${w - pad} ${pad} L${pad} ${h - pad}" stroke="${FRAME}" stroke-width="${Math.max(1, Math.round(2 * s))}"/>`}
  <g font-family="Segoe UI, Inter, Arial, sans-serif" text-anchor="middle">
    <rect x="${w / 2 - 520 * s}" y="${h / 2 - 150 * s}" width="${1040 * s}" height="${300 * s}" rx="${16 * s}" fill="${transparent ? "none" : BG}"/>
    <text x="${w / 2}" y="${h / 2 - 50 * s}" font-size="${72 * s}" font-weight="700" fill="${TEXT}">${esc(label)}</text>
    <text x="${w / 2}" y="${h / 2 + 40 * s}" font-size="${52 * s}" fill="${TEXT}">${w} × ${h}</text>
    <text x="${w / 2}" y="${h / 2 + 110 * s}" font-size="${30 * s}" fill="${MUTED}">PLACEHOLDER · ${esc(file)} · ${esc(use)}</text>
  </g>
</svg>`;
}

mkdirSync(OUT, { recursive: true });
let written = 0;

for (const a of assets) {
  const path = join(OUT, a.file);
  if (existsSync(path) && !force) continue;
  const img = sharp(Buffer.from(placeholderSvg(a)));
  await (a.file.endsWith(".png") ? img.png({ compressionLevel: 9 }) : img.webp({ quality: 80 })).toFile(path);
  written++;
  console.log("wrote", path);
}

// The logo stays an SVG (transparent background), so it is written as-is.
const logoPath = join(OUT, "logo.svg");
if (!existsSync(logoPath) || force) {
  const logo = placeholderSvg({
    w: 1200,
    h: 400,
    label: "GÖKBÖRÜ — Logo",
    use: "Hero · page header",
    file: "logo.svg",
    transparent: true,
    scale: 0.85,
  }).replace(/<svg /, '<svg role="img" aria-label="Gökbörü logo placeholder" ');
  writeFileSync(logoPath, logo + "\n");
  written++;
  console.log("wrote", logoPath);
}

console.log(written ? `${written} placeholder(s) generated.` : "All files already exist; nothing to do.");
