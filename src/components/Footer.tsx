import { useLocation } from "react-router-dom";
import { socialLinks } from "../data/social";

export default function Footer() {
  const location = useLocation();
  const isTr = location.pathname.startsWith("/tr");

  return (
    <footer className="bg-iyigray py-8 mt-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <ul className="flex justify-center gap-6 mb-8" aria-label="IYI Studios on social media">
          {socialLinks.map(({ name, href, Icon, className, iconClass }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`IYI Studios on ${name}`}
                className={`${className} block rounded p-1 transition-colors duration-300`}
              >
                <Icon className={iconClass} />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} IYI Studios. {isTr ? "Tüm hakları saklıdır." : "All rights reserved."} <br />
          <span className="text-xs italic">
            {isTr ? "Ruh ve atmosfere sahip bağımsız oyunlar." : "Indie games with soul and atmosphere."}
          </span>
        </p>
        <div className="mt-4 text-xs text-gray-400">
          <a href="/privacy-policies/" className="underline decoration-gray-600 underline-offset-4 hover:text-white">
            {isTr ? "Gizlilik Politikaları" : "Privacy Policies"}
          </a>
        </div>
      </div>
    </footer>
  );
}
