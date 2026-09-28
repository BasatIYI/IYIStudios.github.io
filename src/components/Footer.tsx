import { socialLinks } from "../data/social";

export default function Footer() {
  return (
    <footer className="bg-iyigray py-8 mt-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map(({ name, href, Icon, className, iconClass }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${className} transition-colors duration-300`}
            >
              <Icon className={iconClass} />
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} IYI Studios. All rights reserved. <br />
          <span className="text-xs italic">Indie games with soul and atmosphere.</span>
        </p>
        <div className="mt-4 text-xs text-gray-600">
          <a href="/privacy-policies" className="hover:text-gray-400">
            Privacy Policies
          </a>
        </div>
      </div>
    </footer>
  );
}
