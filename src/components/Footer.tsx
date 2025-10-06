import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  Shield,
  FileText,
  Lock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* 1️⃣ Logo & About */}
        <div>
          <img
            src="/logos/BunnyHomeCare_WhiteLogo.png"
            alt="Bunny Home Care"
            className="h-16 mb-6 transition-transform duration-300 hover:scale-105"
          />
          <p className="text-sm leading-relaxed text-white/90 mb-6">
            Compassionate, multilingual home care for your family. We care like
            family — because you are family.
          </p>

          <div className="flex items-center gap-4">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Linkedin, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "About Us", href: "#about" },
              { name: "Switching", href: "#switching" },
              { name: "Languages", href: "#languages" },
              { name: "Reviews", href: "#reviews" },
              { name: "Contact", href: "#contact" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3️⃣ Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Legal</h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Non Discrimination Policy", Icon: Shield },
              { name: "Terms of Service", Icon: FileText },
              { name: "Privacy Policy", Icon: Lock, to: "/privacy-policy" },
            ].map(({ name, Icon, to }, i) => (
              <li key={i}>
                {to ? (
                  <Link
                    to={to}
                    className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    <Icon size={14} /> {name}
                  </Link>
                ) : (
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    <Icon size={14} /> {name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* 4️⃣ Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-white" />
              <a
                href="tel:+12674839642"
                className="hover:text-white/80 transition-colors"
              >
                +1 (267) 483-9642
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-white" />
              <a
                href="mailto:help@bunnyhomecare.com"
                className="hover:text-white/80 transition-colors"
              >
                help@bunnyhomecare.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#28bcb0] py-4 text-center text-sm text-white/90 border-t border-white/30">
        <p>
          © {new Date().getFullYear()} Bunny Home Care. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
