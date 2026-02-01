// FILE: src/pages/GamesApps.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GamesApps = ({ products }) => {
    const games = products.filter(p => p.type === 'Game');
    const apps = products.filter(p => p.type === 'App');

    const ProductCard = ({ product, hoverClass = 'hover:animate-wave-glow' }) => {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);
        const [isHovered, setIsHovered] = useState(false);
        const [showDescription, setShowDescription] = useState(false);

        useEffect(() => {
            let interval;
            if (isHovered && product.screenshots && product.screenshots.length > 1) {
                interval = setInterval(() => {
                    setCurrentImageIndex((prev) => (prev + 1) % product.screenshots.length);
                }, 2000);
            } else {
                setCurrentImageIndex(0);
            }
            return () => clearInterval(interval);
        }, [isHovered, product.screenshots]);

        return (
            <div
                className={`group bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 ${hoverClass} transition duration-300 flex flex-row aspect-square border border-gray-800 shadow-xl relative`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Left Side: Content (55%) */}
                <div className="w-[55%] p-4 md:p-6 flex flex-col z-20 bg-gray-900/40 backdrop-blur-sm text-left">
                    <div className="mb-2">
                        <span className={`px-2 py-0.5 text-[7px] md:text-[8px] font-black tracking-widest rounded-full uppercase ${product.type === 'Game' ? 'bg-blue-600/80 text-blue-100' : 'bg-green-600/80 text-green-100'}`}>
                            {product.type}
                        </span>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4 mb-3">
                        {/* Enlarged Product Icon to the LEFT of the Name */}
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden border border-white/20 shadow-lg shrink-0">
                            <img src={product.icon} alt="" className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-base md:text-2xl font-black text-white group-hover:text-blue-400 transition-colors line-clamp-2 uppercase tracking-tighter leading-none">
                            {product.name}
                        </h2>
                    </div>

                    {/* Description / Introduction (Left Aligned) */}
                    <div className="flex-grow overflow-hidden mb-4">
                        <p className="text-[10px] md:text-[12px] leading-relaxed text-gray-400 font-medium italic line-clamp-4 md:line-clamp-6">
                            "{product.description}"
                        </p>
                    </div>

                    <div className="mt-auto flex flex-col gap-4">
                        {/* Enlarged & Centered Store Logos */}
                        <div className="flex items-center justify-center gap-6 py-2 bg-black/20 rounded-lg">
                            <svg className="h-5 w-auto text-white opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.18.176-.294.417-.294.686 0 .285.124.538.322.713.01.008.02.017.032.025l.004.004L20.44 14.162c.451-.252.753-.732.753-1.284 0-.54-.291-1.01-.724-1.266L3.676.386C3.66.377.316-.294.316.516c0 .487.316.885.714 1.008.134.041.272.062.414.062.298 0 .573-.092.802-.25l.003-.002.32-.2L3.61 1.814zM14.498 12.701l3.078 3.078-14.15 8.125 11.072-11.203zm3.784-3.784l-2.906 2.906 10.428-10.552-7.522 7.646zm-2.06 2.06L5.15 2.5l11.072 11.203-3.078-3.078 3.078-3.078z" />
                            </svg>
                            <svg className="h-5 w-auto text-white opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-1.99.77-3.28.82-1.32.05-2.32-1.31-3.15-2.5-1.68-2.45-2.92-6.91-1.19-9.91.85-1.48 2.37-2.42 4.02-2.45 1.26-.03 2.44.85 3.2.85.77 0 2.2-.107 3.7.63 1.54.67 2.1 2.04 2.1 2.04-.31.14-2.88 1.12-2.88 4.28 0 3.73 3.3 4.97 3.3 4.97-.02.05-.51 1.76-1.74 3.58zM15.89 3c-.15 2.1-1.85 3.7-3.6 3.7-.17 0-.34-.02-.51-.04.16-2.12 1.87-3.73 3.6-3.73.18 0 .35.01.51.07z" />
                            </svg>
                        </div>

                        {/* Button */}
                        {product.type === 'Game' ? (
                            <a
                                href={product.playLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] md:text-[11px] font-black rounded-md transition-all text-center uppercase tracking-widest shadow-lg shadow-blue-900/20 active:scale-95"
                            >
                                PLAY NOW
                            </a>
                        ) : (
                            <a
                                href={product.installLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] md:text-[11px] font-black rounded-md transition-all text-center uppercase tracking-widest shadow-lg shadow-emerald-900/20 active:scale-95"
                            >
                                INSTALL NOW
                            </a>
                        )}
                    </div>
                </div>

                {/* Right Side: Images (45%) */}
                <div className="w-[45%] h-full relative overflow-hidden bg-black">
                    <img
                        src={product.screenshots ? product.screenshots[currentImageIndex] : product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition duration-700 ease-in-out" // Removed zoom
                    />
                    {/* Dark gradient to blend with left side */}
                    <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-900 to-transparent"></div>

                    {/* Pagination Dots (Restored at bottom of image) */}
                    {product.screenshots && product.screenshots.length > 1 && (
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {product.screenshots.map((_, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setCurrentImageIndex(index)}
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${currentImageIndex === index
                                        ? 'bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                                        : 'bg-white/40 hover:bg-white/70'
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Games & Apps</span>
            </h1>

            {/* Games Section */}
            <div className="mb-20">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter text-white uppercase group flex items-center gap-4">
                        <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-blue-500"></span>
                        GAMES
                        <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-blue-500"></span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center justify-center max-w-7xl mx-auto">
                    {games.map((product) => (
                        <div key={product.id} className="w-full max-w-[500px]">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Apps Section */}
            <div className="mb-10 content-left">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter text-white uppercase group flex items-center gap-4">
                        <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-green-500"></span>
                        APPS
                        <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-green-500"></span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full mt-2 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center justify-center max-w-7xl mx-auto">
                    {apps.map((product) => (
                        <div key={product.id} className="w-full max-w-[500px]">
                            <ProductCard product={product} hoverClass="hover:animate-wave-glow-green" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GamesApps
