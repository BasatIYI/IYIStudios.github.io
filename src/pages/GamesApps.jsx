// FILE: src/pages/GamesApps.jsx
import { useState, useEffect } from 'react'

const GamesApps = ({ products }) => {
    const games = products.filter(p => p.type === 'Game');
    const apps = products.filter(p => p.type === 'App');

    const ProductCard = ({ product, hoverClass = 'hover:animate-wave-glow' }) => {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);
        const [isHovered, setIsHovered] = useState(false);

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
                className={`group bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 ${hoverClass} transition transform hover:-translate-y-1 duration-300 flex flex-col h-full border border-gray-800 shadow-xl`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="aspect-[9/16] overflow-hidden relative">
                    {/* Image Slider */}
                    <img
                        src={product.screenshots ? product.screenshots[currentImageIndex] : product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition duration-700 ease-in-out transform group-hover:scale-105"
                    />

                    {/* Type Badge */}
                    <div className="absolute top-3 right-3 z-20">
                        <span className={`px-3 py-1 text-[10px] font-bold tracking-wider rounded-full shadow-lg ${product.type === 'Game' ? 'bg-blue-600' : 'bg-green-600'}`}>
                            {product.type.toUpperCase()}
                        </span>
                    </div>

                    {/* Game Icon Overlay (Bottom-Left) */}
                    <div className="absolute bottom-4 left-4 w-16 h-16 rounded-xl overflow-hidden shadow-2xl border border-white/30 z-20 transition-transform duration-300 group-hover:scale-110">
                        <img
                            src={product.icon}
                            alt={`${product.name} icon`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Gradient Overlay for Icon Visibility & Depth */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 z-10"></div>

                    {/* Pagination Dots */}
                    {product.screenshots && product.screenshots.length > 1 && (
                        <div className="absolute bottom-4 right-4 flex gap-1.5 z-30">
                            {product.screenshots.map((_, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setCurrentImageIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${currentImageIndex === index
                                        ? 'bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                                        : 'bg-white/40 hover:bg-white/70'
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center justify-between gap-2 mb-5">
                        <h2 className="text-xl font-bold group-hover:text-blue-400 transition-colors line-clamp-1">{product.name}</h2>
                        <div className="flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {/* Google Play Icon */}
                            <svg className="h-4 w-auto text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186c-.18.176-.294.417-.294.686 0 .285.124.538.322.713.01.008.02.017.032.025l.004.004L20.44 14.162c.451-.252.753-.732.753-1.284 0-.54-.291-1.01-.724-1.266L3.676.386C3.66.377.316-.294.316.516c0 .487.316.885.714 1.008.134.041.272.062.414.062.298 0 .573-.092.802-.25l.003-.002.32-.2L3.61 1.814zM14.498 12.701l3.078 3.078-14.15 8.125 11.072-11.203zm3.784-3.784l-2.906 2.906 10.428-10.552-7.522 7.646zm-2.06 2.06L5.15 2.5l11.072 11.203-3.078-3.078 3.078-3.078z" />
                            </svg>
                            {/* App Store Icon */}
                            <svg className="h-4 w-auto text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-1.99.77-3.28.82-1.32.05-2.32-1.31-3.15-2.5-1.68-2.45-2.92-6.91-1.19-9.91.85-1.48 2.37-2.42 4.02-2.45 1.26-.03 2.44.85 3.2.85.77 0 2.2-.107 3.7.63 1.54.67 2.1 2.04 2.1 2.04-.31.14-2.88 1.12-2.88 4.28 0 3.73 3.3 4.97 3.3 4.97-.02.05-.51 1.76-1.74 3.58zM15.89 3c-.15 2.1-1.85 3.7-3.6 3.7-.17 0-.34-.02-.51-.04.16-2.12 1.87-3.73 3.6-3.73.18 0 .35.01.51.07z" />
                            </svg>
                        </div>
                    </div>

                    <div className="mt-auto">
                        {product.type === 'Game' ? (
                            <a
                                href={product.playLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-block py-2.5 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white text-center text-sm font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/20 active:scale-95"
                            >
                                PLAY NOW
                            </a>
                        ) : (
                            <a
                                href={product.installLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-block py-2.5 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white text-center text-sm font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/20 active:scale-95 border border-white/10"
                            >
                                INSTALL NOW
                            </a>
                        )}
                    </div>
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
            <div className="mb-14">
                <div className="flex items-center gap-6 mb-8">
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-gray-700"></div>
                    <h2 className="text-2xl font-bold whitespace-nowrap">Games</h2>
                    <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-gray-700"></div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {games.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            {/* Apps Section */}
            <div>
                <div className="flex items-center gap-6 mb-8">
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-gray-700"></div>
                    <h2 className="text-2xl font-bold whitespace-nowrap">Apps</h2>
                    <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-gray-700"></div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {apps.map((product) => (
                        <ProductCard key={product.id} product={product} hoverClass="hover:animate-wave-glow-green" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GamesApps
