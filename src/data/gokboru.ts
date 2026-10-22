// Official copy and system requirements for Gökbörü, synchronized with the live Steam store page.

export const gokboruCopy = {
  name: "Gökbörü",
  tagline:
    "Draw lines, claim territory and cleanse the land of Erlik's demons in this 3D arcade action game rooted in Turkic mythology.",
  features: [
    {
      title: "Draw the Line, Claim the Land",
      body: "Leave safe ground, sweep a line across the 3D arena and close it back onto your territory to cleanse everything you enclose.",
    },
    {
      title: "High-Risk, High-Reward Action",
      body: "Small captures are safe and steady; massive captures build combo multipliers and high scores, but open lines ignite if touched by enemies.",
    },
    {
      title: "Crush the Körmös Horde",
      body: "Seal the ground beneath Erlik's shadow minions to destroy them instantly, or pick them off from a distance with bows, arrows and piercing spears.",
    },
    {
      title: "Mythic Boss Battles",
      body: "Every realm ends with a legendary figure from Turkic myth—face Tepegöz, Alkarısı, Karabasan, Abra & Yutpa, Kara Şaman, Temir Han and Erlik Han.",
    },
    {
      title: "Power-Ups & Tactical Edge",
      body: "Enclose power boxes on the battlefield to grab a temporary edge with Speed Boost, Freeze, Bow & Arrows, Spear throws, Clear Minions and Extra Lives.",
    },
    {
      title: "Epic Story Cutscenes",
      body: "Fight as Kızagan and Baybörü, commander of the Celestial Wolf's army, guided by Bürküt across chapters told in the spirit of the Dede Korkut epics.",
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
      { label: "OS", values: ["Windows 10 (64-bit)", "Windows 10 / 11 (64-bit)"] },
      { label: "Processor", values: ["Intel Core i3-6100 / AMD Ryzen 3 1200", "Intel Core i5-8400 / AMD Ryzen 5 2600"] },
      { label: "Memory", values: ["8 GB RAM", "16 GB RAM"] },
      {
        label: "Graphics",
        values: [
          "NVIDIA GeForce GTX 960 / AMD Radeon RX 470 (2 GB VRAM)",
          "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580 (4 GB+ VRAM)",
        ],
      },
      { label: "DirectX", values: ["Version 11", "Version 11"] },
      { label: "Storage", values: ["4 GB available space", "4 GB available space"] },
    ],
  },
};
