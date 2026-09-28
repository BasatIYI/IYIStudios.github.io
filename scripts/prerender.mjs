// Turns the SPA build into static HTML per route so that content and
// per-page meta tags are visible to crawlers and link-preview bots.
// Runs after `vite build` (client, dist/) and `vite build --ssr` (dist-ssr/).
// Also writes legacy redirect pages, sitemap.xml and robots.txt.

import { readFileSync, rmSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const DIST = "dist";
const { render, PRERENDER_ROUTES, LEGACY_REDIRECTS, SITE_URL, absoluteUrl } = await import(
  pathToFileURL(join("dist-ssr", "entry-server.js")).href
);

const template = readFileSync(join(DIST, "index.html"), "utf8");
if (!template.includes("<!--app-head-->") || !template.includes("<!--app-html-->")) {
  throw new Error("dist/index.html is missing the <!--app-head--> / <!--app-html--> markers");
}

const attr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function headTags(meta) {
  const url = absoluteUrl(meta.path);
  const image = absoluteUrl(meta.image);
  const tags = [
    `<title>${attr(meta.title)}</title>`,
    `<meta name="description" content="${attr(meta.description)}" />`,
    meta.noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${attr(meta.title)}" />`,
    `<meta property="og:description" content="${attr(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:title" content="${attr(meta.title)}" />`,
    `<meta name="twitter:description" content="${attr(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ];
  return tags.join("\n  ");
}

function write(file, html) {
  const path = join(DIST, file);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, html);
  console.log("prerendered", path);
}

for (const { url, file, meta } of PRERENDER_ROUTES) {
  const html = template.replace("<!--app-head-->", headTags(meta)).replace("<!--app-html-->", render(url));
  write(file, html);
}

for (const { from, to } of LEGACY_REDIRECTS) {
  const target = absoluteUrl(to);
  write(
    from,
    `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Moved</title>
  <link rel="canonical" href="${target}" />
  <meta name="robots" content="noindex" />
  <meta http-equiv="refresh" content="0; url=${to}" />
  <script>location.replace(${JSON.stringify(to)} + location.search + location.hash);</script>
</head>
<body><p>This page has moved to <a href="${to}">${target}</a>.</p></body>
</html>
`,
  );
}

const lastmod = new Date().toISOString().slice(0, 10);
const indexable = PRERENDER_ROUTES.filter((r) => !r.meta.noindex);
writeFileSync(
  join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((r) => `  <url><loc>${absoluteUrl(r.meta.path)}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n")}
  <url><loc>${SITE_URL}/privacy-policies/</loc></url>
</urlset>
`,
);
writeFileSync(join(DIST, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log("wrote dist/sitemap.xml, dist/robots.txt");

rmSync("dist-ssr", { recursive: true, force: true });
