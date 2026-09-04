// src/App.tsx

import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/Privacypolicy";
import NonDiscrimination from "./pages/NonDiscrimination";
import TermsOfService from "./pages/TermsOfService";
import CaregiverOnboarding from './pages/CaregiverOnboarding';
import BlogHome from "./pages/BlogHome";
import BlogPost from "./pages/BlogPost";
import PayCalculator from "./pages/PayCalculator";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useEffect } from "react";

export default function App() {
  const { pathname, search, hash, key } = useLocation();

  // Disable browser's automatic scroll restoration behavior
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Scroll to the top of the page when URL changes (unless a hash link is used)
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
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/caregiver-onboarding" element={<CaregiverOnboarding />} />
          <Route path="/pay-calculator" element={<PayCalculator />} />
        </Routes>
      </div>

      {/* 💬 WhatsApp Chat (her sayfada görünür) */}
      <FloatingWhatsApp
        phoneNumber="+15557011444"
        accountName="Bunny Home Care"
        avatar="/logos/bunny support.png" // CORRECTED PATH
        chatMessage="👋 How can we help? While a specialist replies, please share your full name and email to better assist you."
        statusMessage="Typically replies within 5 mins"
        placeholder="Type your message..."
        darkMode={false}
        allowEsc
        allowClickAway
        notification
        notificationSound
        className="fixed bottom-6 right-6 z-50"
      />

      {/* ⚙️ Global Footer */}
      <Footer />
    </div>
  );
}
