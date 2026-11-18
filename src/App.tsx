import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GamesApps from "./pages/GamesApps";
import Gokboru from "./pages/Gokboru";
import Links from "./pages/Links";
import Creators from "./pages/Creators";
import Press from "./pages/Press";
import Devlog from "./pages/Devlog";
import NotFound from "./pages/NotFound";
import { ExternalRedirect } from "./components/ExternalRedirect";
import { products } from "./data/products";

/** Router-agnostic route table: BrowserRouter in the browser, StaticRouter when prerendering. */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tr" element={<Home lang="tr" />} />
        <Route path="gokboru" element={<Gokboru />} />
        <Route path="tr/gokboru" element={<Gokboru lang="tr" />} />
        <Route path="games" element={<GamesApps products={products} />} />
        <Route path="tr/games" element={<GamesApps products={products} lang="tr" />} />
        <Route path="links" element={<Links />} />
        <Route path="tr/links" element={<Links lang="tr" />} />
        <Route path="creators" element={<Creators />} />
        <Route path="tr/creators" element={<Creators lang="tr" />} />
        <Route path="press" element={<Press />} />
        <Route path="tr/press" element={<Press lang="tr" />} />
        <Route path="devlog" element={<Devlog />} />
        <Route path="tr/devlog" element={<Devlog lang="tr" />} />
        <Route path="games-apps" element={<Navigate to="/games" replace />} />
        <Route
          path="google-play-store"
          element={
            <ExternalRedirect to="https://play.google.com/store/apps/dev?id=YOUR_DEV_ID" label="Google Play" />
          }
        />
        <Route
          path="app-store"
          element={
            <ExternalRedirect to="https://apps.apple.com/developer/idYOUR_DEV_ID" label="App Store" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
