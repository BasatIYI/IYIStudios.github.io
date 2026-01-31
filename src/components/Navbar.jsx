// FILE: src/components/Navbar.jsx
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-iyiblack border-b border-gray-800 p-4 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-white hover:text-gray-300 transition group">
                    <img
                        src="/media/branding/companylogo.png"
                        alt="IYI Studios Logo"
                        className="w-10 h-10 object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <span>IYI Studios</span>
                </Link>
                <div className="space-x-4 hidden md:flex items-center">
                    <Link to="/games-apps" className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full hover:from-blue-600 hover:to-purple-600 text-gray-300 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group/nav">
                        <svg className="w-4 h-4 group-hover/nav:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm font-bold tracking-wide">GAMES & APPS</span>
                    </Link>
                </div>
                {/* Mobile Menu Button would go here */}
            </div>
        </nav>
    )
}

export default Navbar
