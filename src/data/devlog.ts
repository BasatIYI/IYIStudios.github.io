import marketingFacts from "../../marketing-facts.json";

export interface DevlogPost {
  slug: string;
  date: string;
  title: { en: string; tr: string };
  summary: { en: string; tr: string };
  tags: string[];
  coverImage?: string;
  body: { en: string[]; tr: string[] };
}

const { boons, synergies, permanentUpgrades, bosses, date, dateTr } = marketingFacts.launch;

export const DEVLOG_POSTS: DevlogPost[] = [
  {
    slug: "chapter-1-shrine-of-kut-and-visual-update",
    date: "2026-11-18",
    title: {
      en: "Devlog #1: Chapter 1, Shrine of Kut, and the Road to Full Release",
      tr: "Geliştirici Günlüğü #1: Bölüm 1, Kut Mabedi ve Tam Sürüme Doğru",
    },
    summary: {
      en: `A closer look at Gökbörü's Visual Update, ${boons} divine Boons, ${synergies} Duo Synergies, and our target full release in ${date}.`,
      tr: `Gökbörü'nün Görsel Güncellemesi, ${boons} ilahi Kut, ${synergies} ikili sinerji ve ${dateTr} tam sürüm hedeflerimize yakından bakış.`,
    },
    tags: ["Devlog", "Visual Update", "Shrine of Kut"],
    coverImage: "/media/games/gokboru/screenshot-07.webp",
    body: {
      en: [
        "Welcome to the official Gökbörü development log. Over the past month, we overhauled the visual atmosphere, combat clarity, and meta-progression loop ahead of our upcoming free Prologue demo.",
        `Chapter 1 introduces the Haunted Trade Road and Peri Kızı, alongside the Shrine of Kut featuring ${permanentUpgrades} permanent upgrades and the Run Chronicle so players can analyze every run.`,
        `In combat, ${boons} mythological Boons can now combine into ${synergies} Legendary Duo Synergies—including Celestial Wolf, Iron Fortress, Solar Conquest, Sky Archer's Wrath, Eternal Ayaz, and Storm of the Steppe—preparing you for ${bosses} mythic bosses on the road to ${date} Full Release.`,
      ],
      tr: [
        "Resmî Gökbörü geliştirici günlüğüne hoş geldiniz. Geçtiğimiz ay boyunca yaklaşan ücretsiz Prolog demosu öncesinde oyunun görsel atmosferini, dövüş okunabilirliğini ve kalıcı gelişim döngüsünü baştan sona yeniledik.",
        `Bölüm 1 ile birlikte Perili Ticaret Yolu ve Peri Kızı boss karşılaşması oyuna eklendi. Ayrıca ${permanentUpgrades} kalıcı yükseltme sunan Kut Mabedi (Shrine of Kut) ve geçmiş koşularınızı inceleyebileceğiniz Run Chronicle sistemi devreye alındı.`,
        `Savaş sırasında ${boons} mitolojik Kut (Boon) artık ${synergies} efsanevi ikili sinerjiye dönüşebiliyor. ${dateTr} Tam Sürüm yolculuğunda ${bosses} kadim bossa karşı yeni build'ler denemeye devam ediyoruz.`,
      ],
    },
  },
];
