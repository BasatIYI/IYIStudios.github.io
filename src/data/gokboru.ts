// Official copy and system requirements for Gökbörü, synchronized with marketing-facts.json and the live Steam store page.
import marketingFacts from "../../marketing-facts.json";

const { boons, synergies, permanentUpgrades, bosses } = marketingFacts.launch;
const { storageGB } = marketingFacts.tech;

export const aiDisclosure = {
  en: {
    heading: "AI Generated Content Disclosure",
    lead: "The developers describe how their game uses AI Generated Content like this:",
    body: "Generative AI tools were utilized during development to assist in the creation of visual concept art, narrative illustrations, and preliminary 3D asset modeling. All AI-assisted assets have been manually reviewed, retouched, and integrated by the development team to fit the game's unique artistic vision. No AI content is generated in real-time during gameplay.",
  },
  tr: {
    heading: "Yapay Zekâ (AI) İçerik Beyanı",
    lead: "Geliştiriciler, oyunlarında Yapay Zekâ Tarafından Üretilen İçeriği nasıl kullandıklarını şu şekilde açıklamaktadır:",
    body: "Geliştirme sürecinde görsel konsept sanatları, hikâye illüstrasyonları ve ön 3D varlık modellemelerinin oluşturulmasına yardımcı olmak amacıyla üretken yapay zekâ araçlarından yararlanılmıştır. Yapay zekâ destekli tüm varlıklar, oyunun özgün sanatsal vizyonuna uyum sağlayacak şekilde geliştirme ekibi tarafından manuel olarak incelenmiş, rötuşlanmış ve entegre edilmiştir. Oynanış sırasında gerçek zamanlı olarak hiçbir yapay zekâ içeriği üretilmemektedir.",
  },
};

export const gokboruCopy = {
  name: "Gökbörü",
  tagline: `Draw a line, close the loop, crush every demon caught inside. A 3D arcade action roguelite born from Turkic mythology — every open line is a gamble. Power up with ${boons} divine Boons, unlock ${synergies} synergies and chase the high score.`,
  features: [
    {
      title: "Draw the Line, Claim the Land",
      body: "Leave safe ground, sweep a line across the 3D arena and close it back onto your territory to cleanse everything you enclose. Purge at least 90% of the arena to triumph.",
      video: "/media/games/gokboru/loops/rec_01_wolf_dash_loop.mp4",
      poster: "/media/games/gokboru/screenshot-13.webp",
    },
    {
      title: `${boons} Divine Boons & ${synergies} Duo Synergies`,
      body: "Shape distinct builds each run with elemental synergies like Celestial Wolf, Iron Fortress, Solar Conquest, Sky Archer's Wrath, Eternal Ayaz and Storm of the Steppe. Reroll fates with Umay's blessing.",
      video: "/media/games/gokboru/loops/rec_05_synergy_awakened.mp4",
      poster: "/media/games/gokboru/screenshot-11.webp",
    },
    {
      title: "Chapter 1: Haunted Trade Road & Peri Kızı",
      body: "Venture into the sun-scorched oasis sanctuary. Morph into the Winged Wolf with custom celestial trails, deflect flying fairy blades, dodge deadly line-lunges, and unleash the cleansing fountain wave.",
      video: "/media/games/gokboru/loops/rec_03_cleanse_wave_fountain.mp4",
      poster: "/media/games/gokboru/screenshot-14.webp",
    },
    {
      title: `Shrine of Kut (${permanentUpgrades} Permanent Upgrades)`,
      body: `Spend sacred Kut gathered across runs at the ancient stone Shrine of Kut to unlock ${permanentUpgrades} permanent upgrades, and analyze past runs in the Chronicle.`,
      video: "/media/games/gokboru/loops/rec_04_shrine_of_kut_ui.mp4",
      poster: "/media/games/gokboru/screenshot-12.webp",
    },
    {
      title: `${bosses} Mythic Boss Battles`,
      body: "Confront legendary figures from Turkic mythology—each testing a specific flaw: Peri Kılıcı, Tepegöz, Alkarısı, Karabasan, Yel Büke, Abra & Yutpa, Kara Şaman, Erlik Kızları, Temir Han, and the Lord of the Underworld, Erlik Han.",
      video: "/media/games/gokboru/loops/rec_02_deflect_iron_fortress.mp4",
      poster: "/media/games/gokboru/screenshot-05.webp",
    },
    {
      title: "Cinematic Epics in Dede Korkut's Spirit",
      body: "Fight as Kızagan and Baybörü, guided by Bürküt across handcrafted top-down arenas with cutscenes that can be rewatched anytime in the Story Gallery.",
      poster: "/media/games/gokboru/screenshot-10.webp",
    },
  ],
  world: {
    heading: "Rooted in Turkic mythology",
    paragraphs: [
      "Erlik, Lord of the Underworld, has broken through to the surface. His shadow demons, the Körmös, crawl across the earth and corrupt everything they touch.",
      "You fight back as Kızagan, the legendary hero of the prologue, and as Baybörü, commander of the Gökbörü—the Celestial Wolf's army—while Bürküt, messenger of the sky god Ülgen, guides your way across haunted trade roads, ruined cities, the Underworld gate and Erlik's throne room.",
    ],
  },
  systemRequirements: {
    columns: ["Minimum", "Recommended"] as const,
    rows: [
      { label: "OS", values: ["Windows 10 64-bit", "Windows 10/11 64-bit"] },
      {
        label: "Processor",
        values: ["Intel Core i5-6500 / AMD Ryzen 3 1300X (4-core)", "Intel Core i5-9400 / AMD Ryzen 5 3600"],
      },
      { label: "Memory", values: ["8 GB RAM", "16 GB RAM"] },
      {
        label: "Graphics",
        values: ["NVIDIA GTX 1050 Ti 4 GB / AMD RX 570 4 GB", "NVIDIA GTX 1660 Super / AMD RX 5600 XT (6 GB)"],
      },
      { label: "DirectX", values: ["Version 11", "Version 12"] },
      { label: "Storage", values: [`${storageGB} GB available space`, `${storageGB} GB available space (SSD)`] },
      { label: "Notes", values: ["1080p, Low/Balanced quality", "1080p, High quality, 60 FPS"] },
    ],
  },
};

export const gokboruCopyTr = {
  name: "Gökbörü",
  tagline: `Çizgi çek, alanı kapat, içinde kalan iblisleri yok et. Türk mitolojisinden doğan bu 3D arcade aksiyon roguelite'ta her açık çizgi bir kumar: ${boons} ilahi Kut'la güçlen, ${synergies} efsanevi sinerjiyi aç ve yüksek skoru kovala.`,
  features: [
    {
      title: "Çizgi Çek, Alanı Kapat",
      body: "Güvenli bölgeden çık, 3D arenada çizgini çek ve alanını kapatıp mühürlediğin her şeyi arındır. Zafer için arenanın en az %90'ını temizle.",
      video: "/media/games/gokboru/loops/rec_01_wolf_dash_loop.mp4",
      poster: "/media/games/gokboru/screenshot-13.webp",
    },
    {
      title: `${boons} İlahi Kut & ${synergies} Duo Sinerji`,
      body: "Celestial Wolf, Iron Fortress, Solar Conquest, Sky Archer's Wrath, Eternal Ayaz ve Storm of the Steppe gibi ikili sinerjilerle her koşuda farklı bir build kur. Umay'ın lütfuyla kaderini yeniden çek.",
      video: "/media/games/gokboru/loops/rec_05_synergy_awakened.mp4",
      poster: "/media/games/gokboru/screenshot-11.webp",
    },
    {
      title: "Bölüm-1: Perili Ticaret Yolu & Peri Kızı",
      body: "Güneşin kavurduğu vaha mabedine adım at. Göksel izler bırakan Kanatlı Kurt formuna dönüş, uçan peri kılıçlarını Deflect ile savuştur, ölümcül atılmalardan kaç ve arındırıcı şadırvan dalgasını başlat.",
      video: "/media/games/gokboru/loops/rec_03_cleanse_wave_fountain.mp4",
      poster: "/media/games/gokboru/screenshot-14.webp",
    },
    {
      title: `Kut Tapınağı (${permanentUpgrades} Kalıcı Güçlendirme)`,
      body: `Koşulardan topladığın kutsal Kut cevherlerini kadim taş tapınakta harcayarak ${permanentUpgrades} kalıcı yeteneği yükselt ve Chronicle ile geçmiş koşularını analiz et.`,
      video: "/media/games/gokboru/loops/rec_04_shrine_of_kut_ui.mp4",
      poster: "/media/games/gokboru/screenshot-12.webp",
    },
    {
      title: `${bosses} Efsanevi Boss Savaşı`,
      body: "Türk mitolojisinin kadim figürleriyle yüzleş: Peri Kılıcı, Tepegöz, Alkarısı, Karabasan, Yel Büke, Abra & Yutpa, Kara Şaman, Erlik Kızları, Temir Han ve Yeraltı Hükümdarı Erlik Han.",
      video: "/media/games/gokboru/loops/rec_02_deflect_iron_fortress.mp4",
      poster: "/media/games/gokboru/screenshot-05.webp",
    },
    {
      title: "Dede Korkut Ruhunda Sinematik Destan",
      body: "Kızagan ve Baybörü olarak savaş, gök elçisi Bürküt'ün rehberliğinde top-down arenalarda ilerle; dilediğin an Hikâye Galerisi'nden sinematikleri yeniden izle.",
      poster: "/media/games/gokboru/screenshot-10.webp",
    },
  ],
  world: {
    heading: "Türk Mitolojisinden Doğan Bir Dünya",
    paragraphs: [
      "Yeraltı Hükümdarı Erlik Han yeryüzüne sızdı. Gölge iblisleri Körmösler toprağı kirleterek temas ettikleri her şeyi yozlaştırıyor.",
      "Prolog destanının kahramanı Kızagan ve Gökbörü ordusunun komutanı Baybörü olarak direniyorsun. Gök Tanrı Ülgen'in elçisi Bürküt sana perili ticaret yollarında, harabe şehirlerde, Yeraltı Kapısı'nda ve Erlik'in taht salonunda rehberlik ediyor.",
    ],
  },
  systemRequirements: {
    columns: ["Minimum", "Önerilen"] as const,
    rows: [
      { label: "İşletim sistemi", values: ["Windows 10 64-bit", "Windows 10/11 64-bit"] },
      {
        label: "İşlemci",
        values: ["Intel Core i5-6500 / AMD Ryzen 3 1300X (4 çekirdek)", "Intel Core i5-9400 / AMD Ryzen 5 3600"],
      },
      { label: "Bellek", values: ["8 GB RAM", "16 GB RAM"] },
      {
        label: "Ekran kartı",
        values: ["NVIDIA GTX 1050 Ti 4 GB / AMD RX 570 4 GB", "NVIDIA GTX 1660 Super / AMD RX 5600 XT (6 GB)"],
      },
      { label: "DirectX", values: ["Sürüm 11", "Sürüm 12"] },
      { label: "Depolama", values: [`${storageGB} GB boş alan`, `${storageGB} GB boş alan (SSD)`] },
      { label: "Not", values: ["1080p, Low/Balanced kalite", "1080p, High kalite, 60 FPS"] },
    ],
  },
};
