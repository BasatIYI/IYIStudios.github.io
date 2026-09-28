import { socialLinks } from "../data/social";

export default function Footer() {
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
          © {new Date().getFullYear()} IYI Studios. All rights reserved. <br />
          <span className="text-xs italic">Indie games with soul and atmosphere.</span>
        </p>
        <div className="mt-4 text-xs text-gray-400">
          <a href="/privacy-policies/" className="underline decoration-gray-600 underline-offset-4 hover:text-white">
            Privacy Policies
          </a>
        </div>
      </div>
    </footer>
  );
}
