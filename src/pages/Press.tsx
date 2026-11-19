import { GOKBORU, GOKBORU_MEDIA, IS_DEMO_LIVE, MARKETING_FACTS } from "../config/gokboru";
import { SITE } from "../config/site";
import { aiDisclosure, gokboruCopy, gokboruCopyTr } from "../data/gokboru";
import { PAGE_META, usePageMeta } from "../seo";
import { responsive } from "../images";
import Gallery from "../components/Gallery";

export default function Press({ lang = "en" }: { lang?: "en" | "tr" }) {
  const isTr = lang === "tr";
  usePageMeta(isTr ? PAGE_META.pressTr : PAGE_META.press);

  const copy = isTr ? gokboruCopyTr : gokboruCopy;
  const disclosure = isTr ? aiDisclosure.tr : aiDisclosure.en;
  const { date, dateTr, price, priceTr, boons, synergies, permanentUpgrades, bosses } = MARKETING_FACTS.launch;
  const { storageGB } = MARKETING_FACTS.tech;

  const factSheet = isTr
    ? [
        { label: "Oyun Adı", value: "Gökbörü" },
        { label: "Geliştirici & Yayıncı", value: "IYI Studios (Türkiye)" },
        { label: "Platform", value: "PC (Windows — Steam)" },
        { label: "Çıkış Tarihi", value: `${dateTr} — Tam Sürüm` },
        { label: "Demo", value: IS_DEMO_LIVE ? `${GOKBORU.demoStatusTr} (App ID: 5534770)` : "Yakında" },
        { label: "Fiyat", value: priceTr },
        { label: "Tür", value: "3D Alan Ele Geçirme / Aksiyon Roguelite / Arcade" },
        { label: "Dil Desteği", value: "11 Dil" },
        { label: "Depolama", value: `${storageGB} GB boş alan` },
        { label: "İletişim", value: SITE.contactEmail },
      ]
    : [
        { label: "Title", value: "Gökbörü" },
        { label: "Developer & Publisher", value: "IYI Studios (Türkiye)" },
        { label: "Platform", value: "PC (Windows — Steam)" },
        { label: "Release Date", value: `${date} — Full Release` },
        { label: "Demo", value: IS_DEMO_LIVE ? `${GOKBORU.demoStatusEn} (App ID: 5534770)` : "Coming soon" },
        { label: "Price", value: price },
        { label: "Genre", value: "3D Territory-Capture Action Roguelite / Arcade" },
        { label: "Languages", value: "11 Languages" },
        { label: "Storage", value: `${storageGB} GB available space` },
        { label: "Press Contact", value: SITE.contactEmail },
      ];

  const trailers = [
    {
      title: isTr ? "Resmî Oynanış Fragmanı" : "Official Gameplay Trailer",
      id: GOKBORU.trailerYoutubeId,
    },
    {
      title: isTr ? "Görsel Güncelleme & Kut Sistemi Fragmanı" : "Visual Update & Playable Boons Trailer",
      id: GOKBORU.visualUpdateYoutubeId,
    },
    {
      title: isTr ? "Efsanevi Boss Tanıtımı" : "Mythic Bosses Reveal",
      id: GOKBORU.bossRevealYoutubeId,
    },
  ].filter((t) => Boolean(t.id));

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 space-y-16">
      <header className="flex flex-col justify-between gap-6 border-b border-gray-800 pb-10 md:flex-row md:items-end">
        <div className="space-y-3">
          <span className="inline-block rounded-full bg-blue-900 px-3.5 py-1 text-xs font-bold tracking-widest text-blue-100 uppercase">
            {isTr ? "BASIN KİTİ & BİLGİ FÖYÜ" : "PRESS KIT & FACT SHEET"}
          </span>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">Gökbörü</h1>
          <p className="max-w-2xl text-lg text-gray-300">{copy.tagline}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href={GOKBORU.pressKitUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 hover:from-blue-500 hover:to-purple-500"
          >
            ↓ {isTr ? "Basın Kitini İndir (ZIP)" : "Download Press Kit (ZIP)"}
          </a>
        </div>
      </header>

      {/* Fact Sheet */}
      <section aria-labelledby="press-facts-title">
        <h2 id="press-facts-title" className="mb-6 text-2xl font-bold text-white md:text-3xl">
          {isTr ? "Bilgi Föyü (Fact Sheet)" : "Fact Sheet"}
        </h2>
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {factSheet.map((row) => (
            <div key={row.label} className="rounded-xl border border-gray-800 bg-gray-900 p-4">
              <dt className="text-xs font-bold tracking-wider text-purple-300 uppercase">{row.label}</dt>
              <dd className="mt-1 text-sm font-medium text-white">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Overview & Key Features */}
      <section aria-labelledby="press-about-title" className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <h2 id="press-about-title" className="text-2xl font-bold text-white">
            {copy.world.heading}
          </h2>
          {copy.world.paragraphs.map((p) => (
            <p key={p} className="leading-relaxed text-gray-300">
              {p}
            </p>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">{isTr ? "Öne Çıkan Özellikler" : "Key Features"}</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <strong className="text-white">{boons}</strong> {isTr ? "Mitolojik Kut (Boon)" : "Mythological Boons"} &{" "}
              <strong className="text-white">{synergies}</strong> {isTr ? "Efsanevi İkili Sinerji" : "Legendary Duo Synergies"}
            </li>
            <li>
              <strong className="text-white">{permanentUpgrades}</strong>{" "}
              {isTr ? "Kalıcı Kut Mabedi Yükseltmesi + Run Chronicle" : "Permanent Shrine of Kut Upgrades + Run Chronicle"}
            </li>
            <li>
              <strong className="text-white">{bosses}</strong>{" "}
              {isTr ? "Türk Mitolojisi Bossu (Peri Kılıcı, Tepegöz, Alkarısı, Erlik Han vb.)" : "Turkic Mythology Bosses (Peri Kılıcı, Tepegöz, Alkarısı, Erlik Han, etc.)"}
            </li>
            {copy.features.map((f) => (
              <li key={f.title}>
                <strong className="text-white">{f.title}:</strong> {f.body}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trailers */}
      <section aria-labelledby="press-trailers-title">
        <h2 id="press-trailers-title" className="mb-6 text-2xl font-bold text-white md:text-3xl">
          {isTr ? "Fragmanlar & Video Bağlantıları" : "Trailers & Video Links"}
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {trailers.map((t) => (
            <a
              key={t.id}
              href={`https://youtu.be/${t.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between rounded-xl border border-gray-800 bg-gray-900 p-5 transition-colors hover:border-purple-500/50"
            >
              <span className="font-bold text-white">{t.title}</span>
              <span className="mt-3 text-xs font-semibold text-blue-300">https://youtu.be/{t.id} ↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* Key Art & Logos */}
      <section aria-labelledby="press-media-title" className="space-y-6">
        <h2 id="press-media-title" className="text-2xl font-bold text-white md:text-3xl">
          {isTr ? "Görseller & Logolar" : "Key Art & Logos"}
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <a href={GOKBORU_MEDIA.logo} download="gokboru-logo.png" className="rounded-xl border border-gray-800 bg-gray-900 p-4 hover:border-gray-600">
            <div className="mb-3 flex aspect-video items-center justify-center rounded bg-black/50 p-3">
              <img {...responsive(GOKBORU_MEDIA.logo, "240px")} alt="Gökbörü logo" className="max-h-full w-auto object-contain" />
            </div>
            <p className="text-sm font-bold text-white">Gökbörü Logo (PNG)</p>
          </a>
          <a href={GOKBORU_MEDIA.keyArt} download="gokboru-key-art.webp" className="rounded-xl border border-gray-800 bg-gray-900 p-4 hover:border-gray-600">
            <div className="mb-3 aspect-video overflow-hidden rounded bg-black/50">
              <img {...responsive(GOKBORU_MEDIA.keyArt, "320px")} alt="Gökbörü key art" className="h-full w-full object-cover" />
            </div>
            <p className="text-sm font-bold text-white">Key Art (1920×1080)</p>
          </a>
          <a href={GOKBORU_MEDIA.capsule} download="gokboru-capsule.webp" className="rounded-xl border border-gray-800 bg-gray-900 p-4 hover:border-gray-600">
            <div className="mb-3 aspect-video overflow-hidden rounded bg-black/50">
              <img {...responsive(GOKBORU_MEDIA.capsule, "320px")} alt="Gökbörü capsule" className="h-full w-full object-cover" />
            </div>
            <p className="text-sm font-bold text-white">Steam Capsule (1232×706)</p>
          </a>
        </div>
      </section>

      {/* Screenshots */}
      <section aria-labelledby="press-screens-title">
        <h2 id="press-screens-title" className="mb-6 text-2xl font-bold text-white md:text-3xl">
          {isTr ? "Ekran Görüntüleri" : "Screenshots"}
        </h2>
        <Gallery images={GOKBORU_MEDIA.screenshots} name="Gökbörü" />
      </section>

      {/* AI Generated Content Disclosure */}
      <section aria-labelledby="press-ai-title" className="rounded-2xl border border-gray-800 bg-gray-900/80 p-6 md:p-8">
        <h2 id="press-ai-title" className="mb-2 text-xl font-bold text-white">
          {disclosure.heading}
        </h2>
        <p className="mb-3 text-sm text-gray-400">{disclosure.lead}</p>
        <p className="italic leading-relaxed text-gray-200">{disclosure.body}</p>
      </section>

      {/* Studio & Contact */}
      <section aria-labelledby="press-studio-title" className="rounded-2xl border border-gray-800 bg-gray-900 p-6 md:p-8">
        <h2 id="press-studio-title" className="mb-3 text-2xl font-bold text-white">
          {isTr ? "IYI Studios Hakkında & İletişim" : "About IYI Studios & Contact"}
        </h2>
        <p className="mb-6 leading-relaxed text-gray-300">
          {isTr
            ? "IYI Studios, Türkiye merkezli bağımsız bir oyun stüdyosudur. Galaxy Go, Color Sticks, Rolldrop ve Tetrigun gibi mobil yapımların ardından ilk büyük PC oyunu Gökbörü'yü geliştirmektedir."
            : "IYI Studios is an independent game studio from Türkiye creating games with soul and atmosphere across PC and mobile platforms, including Galaxy Go, Color Sticks, Rolldrop, Tetrigun, and its first major PC title, Gökbörü."}
        </p>
        <a
          href={`mailto:${SITE.contactEmail}`}
          className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-bold text-white hover:from-blue-500 hover:to-purple-500 transition-all"
        >
          {SITE.contactEmail}
        </a>
      </section>
    </div>
  );
}
