import { Link } from "react-router-dom";
import { DEVLOG_POSTS } from "../data/devlog";
import { PAGE_META, usePageMeta } from "../seo";
import { responsive } from "../images";
import WishlistButton from "../components/WishlistButton";

export default function Devlog({ lang = "en" }: { lang?: "en" | "tr" }) {
  const isTr = lang === "tr";
  usePageMeta(isTr ? PAGE_META.devlogTr : PAGE_META.devlog);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 space-y-12">
      <header className="space-y-3 border-b border-gray-800 pb-8">
        <span className="inline-block rounded-full bg-purple-900 px-3.5 py-1 text-xs font-bold tracking-widest text-purple-100 uppercase">
          {isTr ? "GELİŞTİRİCİ GÜNLÜĞÜ" : "DEVLOG"}
        </span>
        <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          {isTr ? "Gökbörü Geliştirme Günlüğü" : "Gökbörü Development Log"}
        </h1>
        <p className="text-lg text-gray-300">
          {isTr
            ? "Geliştirme sürecinden güncellemeler, mekanik derinlikler ve stüdyo notları."
            : "Development updates, mechanic deep-dives, and studio notes from IYI Studios."}
        </p>
      </header>

      <div className="space-y-12">
        {DEVLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            id={post.slug}
            className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/80 shadow-xl"
          >
            {post.coverImage && (
              <div className="aspect-video w-full overflow-hidden bg-black/50">
                <img
                  {...responsive(post.coverImage, "(min-width: 896px) 896px, 100vw")}
                  alt={isTr ? post.title.tr : post.title.en}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="space-y-4 p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                <time dateTime={post.date} className="font-semibold text-purple-300">
                  {post.date}
                </time>
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-gray-700 px-2.5 py-0.5 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                {isTr ? post.title.tr : post.title.en}
              </h2>
              <p className="text-base font-medium text-gray-200">
                {isTr ? post.summary.tr : post.summary.en}
              </p>
              <div className="space-y-3 pt-2 text-gray-300 leading-relaxed">
                {(isTr ? post.body.tr : post.body.en).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-800 bg-gray-900 p-6">
        <div>
          <h2 className="text-lg font-bold text-white">
            {isTr ? "Gökbörü'yü Steam'de Takip Et" : "Follow Gökbörü on Steam"}
          </h2>
          <p className="text-sm text-gray-400">
            {isTr ? "Ücretsiz demo çok yakında." : "Free demo coming soon."}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <WishlistButton
            campaign={isTr ? "gokboru_page_tr" : "gokboru_page"}
            label={isTr ? "Steam'de İstek Listesine Ekle" : "Wishlist on Steam"}
          />
          <Link
            to={isTr ? "/tr/gokboru" : "/gokboru"}
            className="rounded-full border border-gray-700 px-5 py-3 text-sm font-bold text-gray-200 hover:border-gray-500 hover:text-white"
          >
            {isTr ? "Oyun Sayfası" : "Game Page"}
          </Link>
        </div>
      </footer>
    </div>
  );
}
