// FILE: src/components/Layout.jsx
import { Outlet, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-iyiblack text-gray-200">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
