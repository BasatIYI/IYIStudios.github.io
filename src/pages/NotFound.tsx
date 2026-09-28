import { Link } from "react-router-dom";
import { PAGE_META, usePageMeta } from "../seo";

export default function NotFound() {
  usePageMeta(PAGE_META.notFound);

  return (
    <div className="container mx-auto flex flex-col items-center px-4 py-32 text-center">
      <p className="mb-2 text-sm font-bold tracking-widest text-purple-300 uppercase">404</p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Page not found</h1>
      <p className="mb-8 max-w-md text-gray-300">The page you are looking for does not exist or has moved.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-bold text-white hover:from-blue-500 hover:to-purple-500"
        >
          Back to home
        </Link>
        <Link to="/gokboru" className="rounded-full border border-gray-600 px-6 py-3 text-sm font-bold text-gray-200 hover:text-white">
          Gökbörü
        </Link>
      </div>
    </div>
  );
}
