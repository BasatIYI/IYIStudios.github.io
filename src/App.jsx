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
