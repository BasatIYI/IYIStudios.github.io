import { FacebookIcon, InstagramIcon, XIcon, YouTubeIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-iyigray py-8 mt-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/iyistudios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@iyigames6606"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-600 transition-colors duration-300"
          >
            <YouTubeIcon className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/IYIStudios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <XIcon className="w-5 h-5 mt-0.5" />
          </a>
          <a
            href="https://www.facebook.com/iyigamesmete"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
          >
            <FacebookIcon className="w-6 h-6" />
          </a>
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
