import { Link } from "react-router-dom";
import { PhoneIcon } from "./icons";
import { responsive } from "../images";

export default function Navbar() {
  return (
    <nav className="bg-iyiblack border-b border-gray-800 p-4 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-white hover:text-gray-300 transition group"
        >
          <img
            {...responsive("/media/branding/companylogo.png", "40px")}
            width={40}
            height={40}
            alt="IYI Studios Logo"
            className="w-10 h-10 object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span>IYI Studios</span>
        </Link>
        <div className="space-x-4 hidden md:flex items-center">
          <Link
            to="/gokboru"
            className="px-4 py-2 text-sm font-bold tracking-wide text-gray-300 hover:text-white transition-colors"
          >
            GÖKBÖRÜ
          </Link>
          <Link
            to="/games"
            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full hover:from-blue-600 hover:to-purple-600 text-gray-300 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group/nav"
          >
            <PhoneIcon className="w-4 h-4 group-hover/nav:animate-bounce" />
            <span className="text-sm font-bold tracking-wide">GAMES &amp; APPS</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
