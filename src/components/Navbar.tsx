import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full top-0 z-20">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/logos/BunnyHomeCare_Logo.png"
              alt="Bunny Home Care"
              className="h-12 w-auto cursor-pointer transition-transform duration-200 hover:scale-105 hover:opacity-90"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a
            href="#about"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#benefits"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            What We Offer
          </a>
          <a
            href="#switching"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Switching
          </a>
          <a
            href="#languages"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Languages
          </a>
          <a
            href="#trust"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Trust
          </a>
          <a
            href="#reviews"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Reviews
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden md:block bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
        >
          Switch Now
        </a>

        <button
          className="md:hidden text-blue-600 text-3xl focus:outline-none transition-colors duration-300 hover:text-blue-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg fixed top-16 left-0 w-full z-10 py-6 transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-2 hover:text-blue-600 transition-colors duration-300"
            >
              About Us
            </a>
            <a
              href="#benefits"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-2 hover:text-blue-600 transition-colors duration-300"
            >
              What We Offer
            </a>
            <a
              href="#switching"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-2 hover:text-blue-600 transition-colors duration-300"
            >
              Switching
            </a>
            <a
              href="#languages"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-2 hover:text-blue-600 transition-colors duration-300"
            >
              Languages
            </a>
            <a
              href="#trust"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-2 hover:text-blue-600 transition-colors duration-300"
            >
              Trust
            </a>
            <a
              href="#reviews"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-2 hover:text-blue-600 transition-colors duration-300"
            >
              Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-2 hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
