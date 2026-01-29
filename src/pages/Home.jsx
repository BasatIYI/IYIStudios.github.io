// FILE: src/pages/Home.jsx
import { Link } from 'react-router-dom'

const Home = () => {
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const x = (window.innerWidth - clientX) / 50;
        const y = (window.innerHeight - clientY) / 50;
        const heroBg = document.querySelector('.hero-bg-parallax');
        if (heroBg) {
            heroBg.style.transform = `translate(${x}px, ${y}px) scale(1.1)`; // Scale slightly to avoid edges
        }
    };

    return (
        <div className="flex flex-col" onMouseMove={handleMouseMove}>
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* Usage: Main hero background. 2560x1440 (16:9). */}
                    {/* Usage: Main hero background. 2560x1440 (16:9). */}
                    <img
                        src="/media/hero/hero-bg.png"
                        alt="Hero Background"
                        className="hero-bg-parallax w-full h-full object-cover opacity-40 transition-transform duration-100 ease-out"
                        onError={(e) => e.target.style.backgroundColor = '#1a1a1a'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-iyiblack via-transparent to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up">
                        Indie games with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">soul</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">atmosphere</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Creating immersive digital experiences for mobile and PC.
                    </p>
                    <div className="flex justify-center animate-fade-in-up delay-200">
                        <Link to="/games-apps" className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_35px_rgba(79,70,229,0.6)] transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            GAMES & APPS
                        </Link>
                    </div>
                </div>
            </section>

            {/* Platforms Bar */}
            <div className="bg-iyiblack border-y border-gray-800/30 py-8 overflow-hidden">
                <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-12 md:gap-20">
                    {/* Google Play */}
                    <div className="flex flex-col items-center gap-3 opacity-20 hover:opacity-100 transition-all duration-500 cursor-default grayscale hover:grayscale-0 group">
                        <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3.609 1.814L13.792 12 3.61 22.186c-.18.176-.294.417-.294.686 0 .285.124.538.322.713.01.008.02.017.032.025l.004.004L20.44 14.162c.451-.252.753-.732.753-1.284 0-.54-.291-1.01-.724-1.266L3.676.386C3.66.377.316-.294.316.516c0 .487.316.885.714 1.008.134.041.272.062.414.062.298 0 .573-.092.802-.25l.003-.002.32-.2L3.61 1.814zM14.498 12.701l3.078 3.078-14.15 8.125 11.072-11.203zm3.784-3.784l-2.906 2.906 10.428-10.552-7.522 7.646zm-2.06 2.06L5.15 2.5l11.072 11.203-3.078-3.078 3.078-3.078z" />
                        </svg>
                        <span className="text-[10px] font-bold tracking-widest text-white uppercase group-hover:text-blue-400 transition-colors">Google Play</span>
                    </div>
                    {/* App Store */}
                    <div className="flex flex-col items-center gap-3 opacity-20 hover:opacity-100 transition-all duration-500 cursor-default grayscale hover:grayscale-0 group">
                        <svg className="h-7 w-auto" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-1.99.77-3.28.82-1.32.05-2.32-1.31-3.15-2.5-1.68-2.45-2.92-6.91-1.19-9.91.85-1.48 2.37-2.42 4.02-2.45 1.26-.03 2.44.85 3.2.85.77 0 2.2-.107 3.7.63 1.54.67 2.1 2.04 2.1 2.04-.31.14-2.88 1.12-2.88 4.28 0 3.73 3.3 4.97 3.3 4.97-.02.05-.51 1.76-1.74 3.58zM15.89 3c-.15 2.1-1.85 3.7-3.6 3.7-.17 0-.34-.02-.51-.04.16-2.12 1.87-3.73 3.6-3.73.18 0 .35.01.51.07z" />
                        </svg>
                        <span className="text-[10px] font-bold tracking-widest text-white uppercase group-hover:text-blue-400 transition-colors">App Store</span>
                    </div>
                    {/* Steam */}
                    <div className="flex flex-col items-center gap-3 opacity-20 hover:opacity-100 transition-all duration-500 cursor-default grayscale hover:grayscale-0 group">
                        <svg className="h-7 w-auto" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.654c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.83-4.093V9.01c0-2.51 2.042-4.551 4.551-4.551 2.51 0 4.551 2.042 4.551 4.551 0 2.51-2.042 4.551-4.551 4.551-.122 0-.243-.005-.363-.014l-4.089 2.83c.002.063.006.125.006.188 0 1.786-1.448 3.234-3.234 3.234-1.787 0-3.234-1.448-3.234-3.234 0-.173.015-.342.043-.506L.2 12.012c.11 6.647 5.511 11.988 12.148 11.988 6.708 0 12.148-5.44 12.148-12.148S19.055 0 12.347 0h-.368zM8.366 17.203c-1.107 0-2.003-.896-2.003-2.003 0-1.107.896-2.003 2.003-2.003 1.106 0 2.003.896 2.003 2.003 0 1.107-.897 2.003-2.003 2.003zm7.565-10.745c-1.396 0-2.528 1.132-2.528 2.528 0 1.396 1.132 2.528 2.528 2.528 1.396 0 2.528-1.132 2.528-2.528s-1.132-2.528-2.528-2.528z" />
                        </svg>
                        <span className="text-[10px] font-bold tracking-widest text-white uppercase group-hover:text-blue-400 transition-colors">Steam</span>
                    </div>
                    {/* Epic Games */}
                    <div className="flex flex-col items-center gap-3 opacity-20 hover:opacity-100 transition-all duration-500 cursor-default grayscale hover:grayscale-0 group">
                        <svg className="h-7 w-auto" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0L2.4 2.8v18.4L12 24l9.6-2.8V2.8L12 0zm7.2 19.3l-7.2 2.1-7.2-2.1V4.7l7.2-2.1 7.2 2.1v14.6zM12 5.6l-4.8 1.4v10l4.8 1.4 4.8-1.4v-10L12 5.6zm2.4 9.4l-2.4.7-2.4-.7V9l2.4-.7 2.4.7v5.4z" />
                        </svg>
                        <span className="text-[10px] font-bold tracking-widest text-white uppercase group-hover:text-blue-400 transition-colors">Epic Games</span>
                    </div>
                </div>
            </div>

            {/* Featured PC Project Section */}
            <section className="py-20 bg-gray-900 border-t border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            {/* Usage: PC Project Cinematic Cover. 1200x1600 (3:4). */}
                            <img
                                src="/media/games/pc-project/pc-project.png"
                                alt="New PC Project"
                                className="rounded-lg shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 hover:animate-wave-glow-purple transition duration-500"
                            />
                        </div>
                        <div className="md:w-1/2 text-left">
                            <span className="inline-block px-3 py-1 bg-purple-900 text-purple-200 text-xs font-bold rounded-full mb-4">IN DEVELOPMENT</span>
                            <h2 className="text-4xl font-bold mb-4">Project: Wolfed</h2>
                            <p className="text-gray-400 text-lg mb-6">
                                Our first major PC title. An atmospheric exploration game that challenges your perception of reality.
                                Currently in alpha stages.
                            </p>
                            <div className="flex gap-4">
                                <span className="px-6 py-2 border border-gray-600 rounded text-gray-400 cursor-default">
                                    Coming Soon to Steam
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
