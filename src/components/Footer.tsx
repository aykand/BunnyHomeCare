import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaShieldAlt,
  FaFileAlt,
  FaLock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
  FaClipboardList,
} from "react-icons/fa";

import { SiIndeed } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-[17px] md:text-[18px] leading-relaxed">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-14 place-items-start">

        {/* Logo & About */}
        <div className="flex flex-col justify-start space-y-6">
          <img
            src="/logos/BunnyHomeCare_w_logo.webp"
            alt="Bunny Home Care"
            className="h-16 w-auto object-contain mb-4 transition-transform duration-300 hover:scale-105"
          />

          <p className="text-lg leading-relaxed text-white/90 max-w-[260px]">
            Compassionate, multilingual home care services for your family.
            You Deserve Better Care.
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-2 pt-2 flex-nowrap">
            {[
              {
                Icon: FaFacebook,
                href: "https://www.facebook.com/BunnyHomeCare/",
                label: "Facebook",
              },
              {
                Icon: FaInstagram,
                href: "https://www.instagram.com/bunny.homecare/",
                label: "Instagram",
              },
              {
                Icon: FaTiktok,
                href: "https://www.tiktok.com/@bunnyhomecare",
                label: "TikTok",
              },
              {
                Icon: FaYoutube,
                href: "https://www.youtube.com/@bunnyhomecare",
                label: "YouTube",
              },
              {
                Icon: FaLinkedin,
                href: "https://www.linkedin.com/company/bunnyhomecare/",
                label: "LinkedIn",
              },
              {
                Icon: SiIndeed,
                href: "https://www.indeed.com/cmp/Bunny-Home-Care/jobs",
                label: "Indeed",
              },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Bunny Home Care ${label} profile`}
                title={label}
                className="
                  w-8 h-8
                  shrink-0
                  flex items-center justify-center
                  rounded-full
                  bg-white/20
                  hover:bg-white/30
                  transition-all duration-300
                  hover:scale-110
                "
              >
                <Icon
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  focusable="false"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col justify-start space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-3 text-lg">
            {[
              { name: "About Us", href: "#about" },
              { name: "Reviews", href: "#reviews" },
              { name: "Switching", href: "#switching" },
              { name: "Languages", href: "#languages" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.name}>
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

        {/* Legal */}
        <div className="flex flex-col justify-start space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Legal
          </h3>

          <ul className="space-y-3 text-lg">
            {[
              {
                name: "Caregiver Onboarding",
                Icon: FaClipboardList,
                to: "/caregiver-onboarding",
              },
              {
                name: "Non Discrimination Policy",
                Icon: FaShieldAlt,
                to: "/non-discrimination-policy",
              },
              {
                name: "Terms of Service",
                Icon: FaFileAlt,
                to: "/terms-of-service",
              },
              {
                name: "Privacy Policy",
                Icon: FaLock,
                to: "/privacy-policy",
              },
            ].map(({ name, Icon, to }) => (
              <li key={name}>
                <Link
                  to={to}
                  className="flex items-center gap-3 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col justify-start space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Contact Us
          </h3>

          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-4">
              <FaPhone className="w-5 h-5 shrink-0 text-white" />

              <a
                href="tel:+12674839642"
                className="hover:text-white/80 transition-colors"
              >
                +1 (267) 483-9642
              </a>
            </li>

            <li className="flex items-center gap-4">
              <FaEnvelope className="w-5 h-5 shrink-0 text-white" />

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
      <div className="bg-[#28bcb0] py-6 text-center text-sm md:text-base text-white/90 border-t border-white/30">
        <p>
          © {new Date().getFullYear()} Bunny Home Care. All Rights Reserved.
        </p>

        <p className="mt-2 max-w-4xl mx-auto px-6 text-xs md:text-[13px] leading-snug text-white/70">
          We improve our products and advertising by using Microsoft Clarity
          to see how you use our website. By using our site, you agree that we
          and Microsoft can collect and use this data. Our{" "}
          <Link
            to="/privacy-policy"
            className="underline underline-offset-2 hover:text-white transition-colors"
          >
            privacy statement
          </Link>{" "}
          has more details.
        </p>
      </div>
    </footer>
  );
}