import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { AppleIcon, EpicGamesIcon, GooglePlayIcon, PhoneIcon, SteamIcon } from "../components/icons";

const stores = [
  { name: "Google Play", Icon: GooglePlayIcon, size: "h-6" },
  { name: "App Store", Icon: AppleIcon, size: "h-7" },
  { name: "Steam", Icon: SteamIcon, size: "h-7" },
  { name: "Epic Games", Icon: EpicGamesIcon, size: "h-7" },
];

export default function Home() {
  const handleMouseMove = (e: MouseEvent) => {
    const x = (window.innerWidth - e.clientX) / 50;
    const y = (window.innerHeight - e.clientY) / 50;
    const bg = document.querySelector<HTMLElement>(".hero-bg-parallax");
    if (bg) bg.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
  };

  return (
    <div className="flex flex-col" onMouseMove={handleMouseMove}>
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/media/hero/hero-bg.png"
            alt="Hero Background"
            className="hero-bg-parallax w-full h-full object-cover opacity-40 transition-transform duration-100 ease-out"
            onError={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-iyiblack via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up">
            Indie games with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">soul</span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              atmosphere
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Creating immersive digital experiences for mobile and PC.
          </p>
          <div className="flex justify-center animate-fade-in-up delay-200">
            <Link
              to="/games-apps"
              className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_35px_rgba(79,70,229,0.6)] transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <PhoneIcon className="w-5 h-5" />
              GAMES &amp; APPS
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-iyiblack border-y border-gray-800/30 py-4 md:py-8 overflow-hidden">
        <div className="container mx-auto px-2 md:px-4 flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-20">
          {stores.map(({ name, Icon, size }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-3 opacity-20 hover:opacity-100 transition-all duration-500 cursor-default grayscale hover:grayscale-0 group"
            >
              <Icon className={`${size} w-auto`} />
              <span className="text-[10px] font-bold tracking-widest text-white uppercase group-hover:text-blue-400 transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/media/games/pc-project/pc-project.png"
                alt="New PC Project"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 hover:animate-wave-glow-purple transition duration-500"
              />
            </div>
            <div className="md:w-1/2 text-left">
              <span className="inline-block px-3 py-1 bg-purple-900 text-purple-200 text-xs font-bold rounded-full mb-4">
                IN DEVELOPMENT
              </span>
              <h2 className="text-4xl font-bold mb-4">Project: Gökbörü</h2>
              <p className="text-gray-400 text-lg mb-6">
                Our first major PC title. An atmospheric exploration game that challenges your perception of reality
                with Turkic mythology. Currently in alpha stages.
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
  );
}
