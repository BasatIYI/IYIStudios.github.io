import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GamesApps from "./pages/GamesApps";
import Gokboru from "./pages/Gokboru";
import { ExternalRedirect } from "./components/ExternalRedirect";
import { products } from "./data/products";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gokboru" element={<Gokboru />} />
          <Route path="games-apps" element={<GamesApps products={products} />} />
          <Route
            path="google-play-store"
            element={
              <ExternalRedirect
                to="https://play.google.com/store/apps/dev?id=YOUR_DEV_ID"
                label="Google Play"
              />
            }
          />
          <Route
            path="app-store"
            element={
              <ExternalRedirect to="https://apps.apple.com/developer/idYOUR_DEV_ID" label="App Store" />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
