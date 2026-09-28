import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GamesApps from "./pages/GamesApps";
import Gokboru from "./pages/Gokboru";
import NotFound from "./pages/NotFound";
import { ExternalRedirect } from "./components/ExternalRedirect";
import { products } from "./data/products";

/** Router-agnostic route table: BrowserRouter in the browser, StaticRouter when prerendering. */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gokboru" element={<Gokboru />} />
        <Route path="games" element={<GamesApps products={products} />} />
        <Route path="games-apps" element={<Navigate to="/games" replace />} />
        <Route
          path="google-play-store"
          element={
            // TODO(placeholder): real Google Play developer ID
            <ExternalRedirect to="https://play.google.com/store/apps/dev?id=YOUR_DEV_ID" label="Google Play" />
          }
        />
        <Route
          path="app-store"
          element={
            // TODO(placeholder): real App Store developer ID
            <ExternalRedirect to="https://apps.apple.com/developer/idYOUR_DEV_ID" label="App Store" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
