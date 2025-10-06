import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/Privacypolicy";

export default function App() {
  return (
    <div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}