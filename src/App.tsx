import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/Privacypolicy";
import NonDiscrimination from "./pages/NonDiscrimination";
import TermsOfService from "./pages/TermsOfService";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useEffect } from "react";


export default function App() {
  const { pathname, search, hash, key } = useLocation();

  // Tarayıcının otomatik scroll restore davranışını kapat
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // URL değiştiğinde (hash YOKSA) sayfanın en üstüne çık
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, search, key]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 🌐 Global Navbar */}
      <Navbar />

      {/* 📄 Route alanı */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/non-discrimination-policy"
            element={<NonDiscrimination />}
          />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>

      {/* 💬 WhatsApp Chat (her sayfada görünür) */}
      <FloatingWhatsApp
        phoneNumber="+15557011444"
        accountName="Bunny Home Care"
        avatar="/logos/BunnyHomeCare.webp"
        chatMessage="Hello 👋 How can we help you today?"
        statusMessage="Typically replies within 5 mins"
        placeholder="Type your message..."
        darkMode={false}
        allowEsc
        allowClickAway
        notification
        notificationSound
        className="fixed bottom-6 right-6 z-50" // 👈 sola sabitlendi
      /> 

      {/* ⚙️ Global Footer */}
      <Footer />
    </div>
  );
}
