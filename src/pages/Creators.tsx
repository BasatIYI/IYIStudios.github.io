import { demoLink, GOKBORU, GOKBORU_MEDIA, IS_DEMO_LIVE, MARKETING_FACTS } from "../config/gokboru";
import { SITE } from "../config/site";
import { PAGE_META, usePageMeta } from "../seo";
import { responsive } from "../images";

export default function Creators({ lang = "en" }: { lang?: "en" | "tr" }) {
  const isTr = lang === "tr";
  usePageMeta(isTr ? PAGE_META.creatorsTr : PAGE_META.creators);

  const { boons, synergies, permanentUpgrades, bosses, date, dateTr, price, priceTr } = MARKETING_FACTS.launch;
  const screenshotCount = GOKBORU_MEDIA.screenshots.length;
  const demoHref = demoLink("gokboru_page");

  const factItems = isTr
    ? [
        { label: "Tür", value: "3D Alan Ele Geçirme / Aksiyon Roguelite" },
        { label: "Ortalama Koşu Süresi", value: "~15–20 dakika" },
        { label: "Dil Desteği", value: "11 Dil (Türkçe, İngilizce dâhil)" },
        { label: "Çıkış Tarihi", value: `${dateTr} — Tam Sürüm (Erken Erişim Değil)` },
        {
          label: "Demo Durumu",
          value: IS_DEMO_LIVE ? GOKBORU.demoStatusTr : "Ücretsiz Prolog Demosu yakında",
        },
        { label: "Fiyat", value: priceTr },
        {
          label: "İçerik Kapsamı",
          value: `${boons} Kut (Boon), ${synergies} İkili Sinerji, ${permanentUpgrades} Kalıcı Yükseltme, ${bosses} Boss`,
        },
        { label: "Platform", value: "PC (Windows — Steam)" },
      ]
    : [
        { label: "Genre", value: "3D Territory-Capture Action Roguelite" },
        { label: "Average Run Duration", value: "~15–20 minutes" },
        { label: "Language Support", value: "11 Languages" },
        { label: "Release Date", value: `${date} — Full Release (Not Early Access)` },
        {
          label: "Demo Status",
          value: IS_DEMO_LIVE ? GOKBORU.demoStatusEn : "Free Prologue Demo coming soon",
        },
        { label: "Price", value: price },
        {
          label: "Content Scope",
          value: `${boons} Boons, ${synergies} Duo Synergies, ${permanentUpgrades} Permanent Upgrades, ${bosses} Bosses`,
        },
        { label: "Platform", value: "PC (Windows — Steam)" },
      ];

  const clips = [
    { label: isTr ? "Deflect & Iron Fortress (MP4)" : "Deflect & Iron Fortress (MP4)", href: GOKBORU_MEDIA.loops.deflect },
    { label: isTr ? "Arındırma Dalgası (MP4)" : "Cleanse Wave Fountain (MP4)", href: GOKBORU_MEDIA.loops.cleanseWave },
    { label: isTr ? "Sinerji Patlaması (MP4)" : "Synergy Awakened (MP4)", href: GOKBORU_MEDIA.loops.synergy },
  ];

  const mailSubject = encodeURIComponent(
    isTr ? "Gökbörü — İçerik Üreticisi Steam Anahtarı Talebi" : "Gökbörü — Creator Steam Key Request",
  );
  const mailBody = encodeURIComponent(
    isTr
      ? "Merhaba IYI Studios,\n\nKanal / Platform Linki:\nTakipçi / Abone Sayısı:\nİçerik Türü (YouTube Video / Canlı Yayın / Shorts):\n\nGökbörü tam sürüm / inceleme anahtarı talep ediyorum."
      : "Hi IYI Studios,\n\nChannel / Platform URL:\nAudience / Subscriber Count:\nContent Type (YouTube Video / Livestream / Shorts):\n\nI would like to request a Steam key for Gökbörü.",
  );

  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 space-y-16">
      <header className="space-y-4">
        <span className="inline-block rounded-full bg-purple-900 px-3.5 py-1 text-xs font-bold tracking-widest text-purple-100 uppercase">
          {isTr ? "İÇERİK ÜRETİCİLERİ & YAYINCILAR" : "CREATORS & STREAMERS"}
        </span>
        <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          {isTr ? "Gökbörü — İçerik Üreticisi Paketi" : "Gökbörü — Creators Kit"}
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-gray-200">
          {isTr
            ? "Gökbörü, Türk mitolojisinden doğan yüksek tempolu bir 3D çizgi çekip alan kapatma (territory-capture) arcade aksiyon roguelite oyunudur. Güvenli bölgeden çık, karanlık arenada hattını çek ve halkayı kapatıp içinde kalan Erlik iblislerini arındır; her açık çizgi ölümcül bir kumardır."
            : "Gökbörü is a fast-paced 3D territory-capture arcade action roguelite rooted in Turkic mythology. Leave safe ground, sweep a line across the corrupted arena, and close the loop to purge every demon trapped inside—every open line is a high-stakes gamble."}
        </p>
        {IS_DEMO_LIVE && demoHref && (
          <div className="pt-2">
            <a
              href={demoHref}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              {isTr ? "Ücretsiz Prolog Demosunu Steam'de Oyna" : "Play Free Prologue Demo on Steam"}
            </a>
          </div>
        )}
      </header>

      {/* Monetization & Stream-Safe Permission */}
      <section aria-labelledby="permission-title" className="rounded-2xl border border-emerald-500/40 bg-emerald-950/30 p-6 md:p-8">
        <h2 id="permission-title" className="mb-3 text-xl font-bold text-emerald-200">
          {isTr ? "Video, Yayın & Gelir Elde Etme İzni" : "Video, Streaming & Monetization Permission"}
        </h2>
        <p className="text-base leading-relaxed text-emerald-50">
          {isTr
            ? "Gökbörü videosu çekebilir, canlı yayın açabilir ve içeriklerinizden gelir elde edebilirsiniz. Müziklerimiz yayın dostudur, telif riski yoktur."
            : "You are free to record Gökbörü videos, livestream gameplay, and monetize your content on YouTube, Twitch, and other platforms. All in-game music is stream-safe with zero copyright claims."}
        </p>
      </section>

      {/* Quick Fact Sheet */}
      <section aria-labelledby="facts-title">
        <h2 id="facts-title" className="mb-6 text-2xl font-bold text-white md:text-3xl">
          {isTr ? "Hızlı Bilgi Föyü" : "Quick Fact Sheet"}
        </h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          {factItems.map((item) => (
            <div key={item.label} className="rounded-xl border border-gray-800 bg-gray-900 p-5">
              <dt className="text-xs font-bold tracking-wider text-purple-300 uppercase">{item.label}</dt>
              <dd className="mt-1 text-base font-medium text-white">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Downloadable Assets */}
      <section aria-labelledby="assets-title" className="space-y-8">
        <div>
          <h2 id="assets-title" className="mb-2 text-2xl font-bold text-white md:text-3xl">
            {isTr ? "İndirilebilir Materyaller" : "Downloadable Assets"}
          </h2>
          <p className="text-gray-300">
            {isTr
              ? `Thumbnail tasarımları ve video düzenlemeleri için şeffaf logo, kapak görselleri, ${screenshotCount} ekran görüntüsü ve oynanış klipleri.`
              : `Transparent logo, thumbnail key art, ${screenshotCount} high-resolution screenshots, and gameplay clips ready for thumbnails and edits.`}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="flex flex-col justify-between rounded-xl border border-gray-800 bg-gray-900 p-5">
            <div className="mb-4 flex aspect-video items-center justify-center rounded-lg bg-black/60 p-4">
              <img {...responsive(GOKBORU_MEDIA.logo, "240px")} alt="Gökbörü şeffaf logo" className="max-h-full w-auto object-contain" />
            </div>
            <div>
              <h3 className="font-bold text-white">{isTr ? "Şeffaf Logo (PNG)" : "Transparent Logo (PNG)"}</h3>
              <a
                href={GOKBORU_MEDIA.logo}
                download="gokboru-logo.png"
                className="mt-3 inline-block rounded-full bg-blue-600/20 px-4 py-2 text-xs font-bold text-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
              >
                {isTr ? "Logoyu İndir" : "Download Logo"}
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-gray-800 bg-gray-900 p-5">
            <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-black/60">
              <img {...responsive(GOKBORU_MEDIA.keyArt, "320px")} alt="Gökbörü Thumbnail Key Art" className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-white">{isTr ? "Thumbnail Ana Görseli" : "Thumbnail Key Art"}</h3>
              <a
                href={GOKBORU_MEDIA.keyArt}
                download="gokboru-key-art.webp"
                className="mt-3 inline-block rounded-full bg-blue-600/20 px-4 py-2 text-xs font-bold text-blue-200 hover:bg-blue-600 hover:text-white transition-colors"
              >
                {isTr ? "Ana Görseli İndir" : "Download Key Art"}
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-gray-800 bg-gray-900 p-5">
            <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-black/60">
              <img {...responsive(GOKBORU_MEDIA.capsule, "320px")} alt="Gökbörü Kapak Kapsülü" className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-white">{isTr ? "Tüm Paket (Press Kit ZIP)" : "Full Pack (Press Kit ZIP)"}</h3>
              <a
                href={GOKBORU.pressKitUrl}
                download
                className="mt-3 inline-block rounded-full bg-purple-600/20 px-4 py-2 text-xs font-bold text-purple-200 hover:bg-purple-600 hover:text-white transition-colors"
              >
                {isTr ? "ZIP Paketini İndir" : "Download ZIP"}
              </a>
            </div>
          </div>
        </div>

        {/* Gameplay Clips */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">
            {isTr ? "Oynanış Klipleri (MP4)" : "Gameplay Clips (MP4)"}
          </h3>
          <div className="flex flex-wrap gap-3">
            {clips.map((clip) => (
              <a
                key={clip.href}
                href={clip.href}
                download
                className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm font-semibold text-gray-200 hover:border-purple-500 hover:text-white transition-colors"
              >
                ↓ {clip.label}
              </a>
            ))}
          </div>
        </div>

        {/* High-res Screenshots */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">
            {isTr ? "Yüksek Çözünürlüklü Ekran Görüntüleri (1080p)" : "High-Resolution Screenshots (1080p)"}
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-5">
            {GOKBORU_MEDIA.screenshots.map((src, i) => (
              <a
                key={src}
                href={src}
                download={`gokboru-screenshot-${i + 1}.webp`}
                className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900"
              >
                <img
                  {...responsive(src, "220px")}
                  alt={`Gökbörü screenshot ${i + 1}`}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-1 right-1 rounded bg-black/75 px-1.5 py-0.5 text-[10px] font-bold text-gray-200">
                  #{i + 1}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Steam Key Request */}
      <section aria-labelledby="key-title" className="rounded-2xl border border-purple-500/30 bg-gray-900 p-6 md:p-8">
        <h2 id="key-title" className="mb-3 text-2xl font-bold text-white">
          {isTr ? "Tam Sürüm İnceleme Anahtarı (Steam Key) Talebi" : "Request a Full Release Steam Key"}
        </h2>
        <p className="mb-6 max-w-2xl text-gray-300 leading-relaxed">
          {isTr
            ? `İçerik üreticisi veya yayıncıysanız kanal bağlantınızla birlikte bize ulaşın; erken inceleme ve tam sürüm Steam anahtarı listemize ekleyelim.`
            : `Are you a creator or streamer? Send us your channel link so we can include you in our creator key distribution list.`}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${SITE.contactEmail}?subject=${mailSubject}&body=${mailBody}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-bold text-white hover:from-blue-500 hover:to-purple-500 transition-all"
          >
            {isTr ? `Anahtar Talep Et (${SITE.contactEmail})` : `Request Steam Key (${SITE.contactEmail})`}
          </a>
        </div>
      </section>
    </div>
  );
}
