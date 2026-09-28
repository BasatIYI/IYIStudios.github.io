export type ProductType = "Game" | "App";

export interface Product {
  id: string;
  name: string;
  type: ProductType;
  description: string;
  image: string;
  screenshots: string[];
  icon: string;
  playLink: string;
  installLink: string;
}

const media = (folder: string) => ({
  image: `/media/${folder}/screenshot-1.png`,
  screenshots: [1, 2, 3, 4, 5].map((n) => `/media/${folder}/screenshot-${n}.png`),
  icon: `/media/${folder}/icon.png`,
});

export const products: Product[] = [
  {
    id: "galaxy-go",
    name: "Galaxy Go",
    type: "Game",
    description:
      "Embark on an intergalactic journey like never before with Galaxy Go - the ultimate space-themed infinite runner game on Google Play and App Store! 🚀 Choose from 5 sleek and powerful spacecraft, each with unique stats and abilities. Level them up to unleash their full potential as you navigate through the depths of space.",
    ...media("games/galaxy-go"),
    playLink: "https://galaxygo.iyistudios.com",
    installLink: "https://play.google.com/store/apps/details?id=com.iyistudios.galaxygo",
  },
  {
    id: "color-sticks",
    name: "Color Sticks",
    type: "Game",
    description:
      "Embark on a thrilling adventure in Color Sticks, an addictive endless runner game. Jump, duck, and weave through obstacles to achieve the highest score. Features: Intuitive controls for seamless gameplay, Cartoon-style graphics with vibrant colors, Boosters and power-ups for extra fun, Endless levels with increasing difficulty Challenge your reflexes in Color Sticks today!",
    ...media("games/color-sticks"),
    playLink: "https://colorsticks.iyistudios.com",
    installLink: "https://play.google.com/store/apps/details?id=com.iyistudios.colorsticks",
  },
  {
    id: "rolldrop",
    name: "Rolldrop",
    type: "Game",
    description:
      "Rolldrop is a thrilling water shooter game where precision meets strategy. Spin, aim, and shoot water to drop buckets in over 250 dynamic levels. Features: Rotating circle challenges, Aquatic-themed puzzles with increasing difficulty, Strategic gameplay for all ages, Achievements and leaderboards Immerse yourself in the world of RollDrop!",
    ...media("games/rolldrop"),
    playLink: "https://rolldrop.iyistudios.com",
    installLink: "https://play.google.com/store/apps/details?id=com.iyistudios.rolldrop",
  },
  {
    id: "tetrigun",
    name: "Tetrigun",
    type: "Game",
    description:
      "Dive into the addictive world of TetriGun, where shape matching meets strategic shooting. Swipe to match shapes and clear rows to advance through vibrant levels. Features: Colorful board with engaging gameplay, Strategic swiping for optimal matches, Power-ups and combos for high scores, Casual yet challenging puzzles Challenge your mind with TetriGun today!",
    ...media("games/tetrigun"),
    playLink: "https://tetrigun.iyistudios.com",
    installLink: "https://play.google.com/store/apps/details?id=com.iyistudios.tetrigun",
  },
  {
    id: "wimc",
    name: "WIMC",
    type: "App",
    description:
      "Recite your dhikrs in peace without using your hands. • Standard dhikrmatik functions are available in the application. • Unlike other dhikrmatik applications, the automatic option can be activated. And You Can recite your dhikrs without counting",
    ...media("apps/wimc"),
    playLink: "https://wimc.iyistudios.com",
    installLink: "https://wimc.iyistudios.com",
  },
  {
    id: "wimb",
    name: "WIMB",
    type: "App",
    description:
      "Wimb is a personal finance app, you can offline control over your; • Properties • Monthly Income and Expenses • Summarize Your Total to 17 Other Currencies Exchange Rate • With 18 Local Currency and 10 Diffrent Language Support • All is Offline, Your Privacy Protected • Accounts, Bank Accounts, Cash, And Crypto Coins • Credit Cards, Debit Cards, • Credits and Debits",
    ...media("apps/wimb"),
    playLink: "https://wimb.iyistudios.com",
    installLink: "https://wimb.iyistudios.com",
  },
];
