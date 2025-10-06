import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PrivacyPolicy from "./pages/Privacypolicy";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* ✅ Her sayfada en üstte görünecek */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      {/* Footer her sayfada en altta görünecek */}
      <Footer />
    </div>
  );
}
