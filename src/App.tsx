import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PrivacyPolicy from "./pages/Privacypolicy";
import NonDiscrimination from "./pages/NonDiscrimination";
import TermsOfService from "./pages/TermsOfService";
import Footer from "./components/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/non-discrimination-policy" element={<NonDiscrimination />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>

      {/* ✅ WhatsApp widget - tüm sayfalarda görünür */}
      <FloatingWhatsApp
        phoneNumber="+15557011444"
        accountName="Bunny Home Care"
        avatar="/logos/BunnyHomeCare.png"
        chatMessage="Hello 👋 How can we help you today?"
        statusMessage="Typically replies within 5 mins"
        placeholder="Type your message..."
        darkMode={false}
        allowEsc={true}
        allowClickAway={true}
        notification={true}
        notificationSound={true}
        className="whatsapp-left"
      />

      <Footer />
    </div>
  );
}
