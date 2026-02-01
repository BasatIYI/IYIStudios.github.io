// FILE: src/App.jsx
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import GamesApps from './pages/GamesApps'

/* content for Store Redirects */
const GooglePlayRedirect = () => {
    window.location.href = 'https://play.google.com/store/apps/dev?id=YOUR_DEV_ID';
    return <div className="p-10 text-center">Redirecting to Google Play...</div>;
};
const AppStoreRedirect = () => {
    window.location.href = 'https://apps.apple.com/developer/idYOUR_DEV_ID';
    return <div className="p-10 text-center">Redirecting to App Store...</div>;
};

// Data for products 
const products = [
    {
        id: 'galaxy-go',
        name: 'Galaxy Go',
        type: 'Game',
        description: 'Embark on an intergalactic journey like never before with Galaxy Go - the ultimate space-themed infinite runner game on Google Play and App Store! 🚀 Choose from 5 sleek and powerful spacecraft, each with unique stats and abilities. Level them up to unleash their full potential as you navigate through the depths of space.',
        image: '/media/games/galaxy-go/screenshot-1.png',
        screenshots: [
            '/media/games/galaxy-go/screenshot-1.png',
            '/media/games/galaxy-go/screenshot-2.png',
            '/media/games/galaxy-go/screenshot-3.png',
            '/media/games/galaxy-go/screenshot-4.png',
            '/media/games/galaxy-go/screenshot-5.png'
        ],
        icon: '/media/games/galaxy-go/icon.png',
        playLink: 'https://galaxygo.iyistudios.com',
        installLink: 'https://play.google.com/store/apps/details?id=com.iyistudios.galaxygo'
    },
    {
        id: 'color-sticks',
        name: 'Color Sticks',
        type: 'Game',
        description: 'Embark on a thrilling adventure in Color Sticks, an addictive endless runner game. Jump, duck, and weave through obstacles to achieve the highest score. Features: Intuitive controls for seamless gameplay, Cartoon-style graphics with vibrant colors, Boosters and power-ups for extra fun, Endless levels with increasing difficulty Challenge your reflexes in Color Sticks today!',
        image: '/media/games/color-sticks/screenshot-1.png',
        screenshots: [
            '/media/games/color-sticks/screenshot-1.png',
            '/media/games/color-sticks/screenshot-2.png',
            '/media/games/color-sticks/screenshot-3.png',
            '/media/games/color-sticks/screenshot-4.png',
            '/media/games/color-sticks/screenshot-5.png'
        ],
        icon: '/media/games/color-sticks/icon.png',
        playLink: 'https://colorsticks.iyistudios.com',
        installLink: 'https://play.google.com/store/apps/details?id=com.iyistudios.colorsticks'
    },
    {
        id: 'rolldrop',
        name: 'Rolldrop',
        type: 'Game',
        description: 'Rolldrop is a thrilling water shooter game where precision meets strategy. Spin, aim, and shoot water to drop buckets in over 250 dynamic levels. Features: Rotating circle challenges, Aquatic-themed puzzles with increasing difficulty, Strategic gameplay for all ages, Achievements and leaderboards Immerse yourself in the world of RollDrop!',
        image: '/media/games/rolldrop/screenshot-1.png',
        screenshots: [
            '/media/games/rolldrop/screenshot-1.png',
            '/media/games/rolldrop/screenshot-2.png',
            '/media/games/rolldrop/screenshot-3.png',
            '/media/games/rolldrop/screenshot-4.png',
            '/media/games/rolldrop/screenshot-5.png'
        ],
        icon: '/media/games/rolldrop/icon.png',
        playLink: 'https://rolldrop.iyistudios.com',
        installLink: 'https://play.google.com/store/apps/details?id=com.iyistudios.rolldrop'
    },
    {
        id: 'tetrigun',
        name: 'Tetrigun',
        type: 'Game',
        description: 'Dive into the addictive world of TetriGun, where shape matching meets strategic shooting. Swipe to match shapes and clear rows to advance through vibrant levels. Features: Colorful board with engaging gameplay, Strategic swiping for optimal matches, Power-ups and combos for high scores, Casual yet challenging puzzles Challenge your mind with TetriGun today!',
        image: '/media/games/tetrigun/screenshot-1.png',
        screenshots: [
            '/media/games/tetrigun/screenshot-1.png',
            '/media/games/tetrigun/screenshot-2.png',
            '/media/games/tetrigun/screenshot-3.png',
            '/media/games/tetrigun/screenshot-4.png',
            '/media/games/tetrigun/screenshot-5.png'
        ],
        icon: '/media/games/tetrigun/icon.png',
        playLink: 'https://tetrigun.iyistudios.com',
        installLink: 'https://play.google.com/store/apps/details?id=com.iyistudios.tetrigun'
    },
    {
        id: 'wimc',
        name: 'WIMC',
        type: 'App',
        description: 'Recite your dhikrs in peace without using your hands. • Standard dhikrmatik functions are available in the application. • Unlike other dhikrmatik applications, the automatic option can be activated. And You Can recite your dhikrs without counting',
        image: '/media/apps/wimc/screenshot-1.png',
        screenshots: [
            '/media/apps/wimc/screenshot-1.png',
            '/media/apps/wimc/screenshot-2.png',
            '/media/apps/wimc/screenshot-3.png',
            '/media/apps/wimc/screenshot-4.png',
            '/media/apps/wimc/screenshot-5.png'
        ],
        icon: '/media/apps/wimc/icon.png',
        playLink: 'http://wimc.iyistudios.com',
        installLink: 'http://wimc.iyistudios.com'
    },
    {
        id: 'wimb',
        name: 'WIMB',
        type: 'App',
        description: 'Wimb is a personal finance app, you can offline control over your; • Properties • Monthly Income and Expenses • Summarize Your Total to 17 Other Currencies Exchange Rate • With 18 Local Currency and 10 Diffrent Language Support • All is Offline, Your Privacy Protected • Accounts, Bank Accounts, Cash, And Crypto Coins • Credit Cards, Debit Cards, • Credits and Debits',
        image: '/media/apps/wimb/screenshot-1.png',
        screenshots: [
            '/media/apps/wimb/screenshot-1.png',
            '/media/apps/wimb/screenshot-2.png',
            '/media/apps/wimb/screenshot-3.png',
            '/media/apps/wimb/screenshot-4.png',
            '/media/apps/wimb/screenshot-5.png'
        ],
        icon: '/media/apps/wimb/icon.png',
        playLink: 'http://wimb.iyistudios.com',
        installLink: 'http://wimb.iyistudios.com'
    },
];

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="games-apps" element={<GamesApps products={products} />} />

                    {/* Store Redirects */}
                    <Route path="google-play-store" element={<GooglePlayRedirect />} />
                    <Route path="app-store" element={<AppStoreRedirect />} />

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
