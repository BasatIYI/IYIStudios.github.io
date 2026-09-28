import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CloseIcon, GamepadIcon, MenuIcon } from "./icons";
import { responsive } from "../images";

const links = [
  { to: "/gokboru", label: "Gökbörü" },
  { to: "/games", label: "Games" },
  { to: "/#about", label: "About" },
  { to: "/#contact", label: "Press / Contact" },
];

const textLink = (active: boolean) =>
  `px-3 py-2 rounded-full text-sm font-bold tracking-wide uppercase transition-colors ${
    active ? "text-white" : "text-gray-300 hover:text-white"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu after navigating or on Esc.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav
      aria-label="Main"
      className="bg-iyiblack border-b border-gray-800 p-4 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-white hover:text-gray-300 transition group"
        >
          <img
            {...responsive("/media/branding/companylogo.png", "40px")}
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span>IYI Studios</span>
        </Link>

        <ul className="hidden md:flex items-center gap-2">
          {links.map(({ to, label }) => (
            <li key={to}>
              {to === "/games" ? (
                <NavLink
                  to={to}
                  className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full hover:from-blue-600 hover:to-purple-600 text-gray-200 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/20 group/nav"
                >
                  <GamepadIcon className="w-4 h-4 group-hover/nav:animate-bounce" />
                  <span className="text-sm font-bold tracking-wide uppercase">{label}</span>
                </NavLink>
              ) : to.includes("#") ? (
                <Link to={to} className={textLink(false)}>
                  {label}
                </Link>
              ) : (
                <NavLink to={to} className={({ isActive }) => textLink(isActive)}>
                  {label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-gray-200 hover:bg-white/10"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <ul
        id="mobile-menu"
        hidden={!open}
        className="md:hidden container mx-auto mt-4 flex-col gap-1 border-t border-gray-800 pt-4 [&:not([hidden])]:flex"
      >
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-bold tracking-wide uppercase text-gray-200 hover:bg-white/5 hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
