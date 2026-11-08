// Official copy and system requirements for Gökbörü, synchronized with the live Steam store page.

export const gokboruCopy = {
  name: "Gökbörü",
  tagline:
    "Draw lines, claim territory and purge Erlik's demons in this 3D territory-capture action roguelite rooted in Turkic mythology. Master divine Boons, unleash arena power-ups, survive 10 mythic bosses and chase high scores — every open line is a gamble.",
  features: [
    {
      title: "Draw the Line, Claim the Land",
      body: "Leave safe ground, sweep a line across the 3D arena and close it back onto your territory to cleanse everything you enclose. Purge at least 90% of the arena to triumph.",
    },
    {
      title: "Divine Boons (Kut System)",
      body: "Shape your build with divine Boons that alter your movement and survival: Dash to safety, Deflect ignited trail shocks, and freeze time with Blizzard Mastery.",
    },
    {
      title: "High-Risk, High-Reward Gambling",
      body: "Small captures are steady; giant sweeps skyrocket your score and combo multipliers, but open lines ignite when touched by Erlik's minions.",
    },
    {
      title: "10 Mythic Boss Battles",
      body: "Confront legendary figures from Turkic mythology—each testing a specific flaw: Peri Kılıcı, Tepegöz, Alkarısı, Karabasan, Yel Büke, Abra & Yutpa, Kara Şaman, Erlik Kızları, Temir Han, and the Lord of the Underworld, Erlik Han.",
    },
    {
      title: "Tactical Arena Power-Ups",
      body: "Enclose battlefield Power Boxes to claim Speed Boosts (Wolf Spirit), Freeze (Breath of Ülgen), Sky Arrows, Kızagan's Lance, Minion Clears and Extra Lives.",
    },
    {
      title: "Cinematic Epics in Dede Korkut's Spirit",
      body: "Fight as Kızagan and Baybörü, guided by Bürküt across handcrafted top-down arenas with cutscenes that can be rewatched anytime in the Story Gallery.",
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
      { label: "Storage", values: ["3 GB available space", "3 GB available space (SSD)"] },
      { label: "Notes", values: ["1080p, Low/Balanced quality", "1080p, High quality, 60 FPS"] },
    ],
  },
};
