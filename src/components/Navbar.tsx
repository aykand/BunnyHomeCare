import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 fixed w-full top-0 z-[99999] transition-all duration-300">
        <div className="flex items-center">
          <Link to="/" className="group">
            <img
              src="/logos/BunnyHomeCare_Logo.png"
              alt="Bunny Home Care"
              className="h-12 xl:w-auto cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 object-contain drop-shadow-sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </Link>
        </div>

        <nav className="hidden lg:flex space-x-8">
          <a
            href="#about"
            className="relative text-gray-700 font-medium transition-all duration-300 hover:text-primary group px-3 py-2"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#benefits"
            className="relative text-gray-700 font-medium transition-all duration-300 hover:text-primary group px-3 py-2"
          >
            What We Offer
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
           <a
            href="#reviews"
            className="relative text-gray-700 font-medium transition-all duration-300 hover:text-primary group px-3 py-2"
          >
            Reviews
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#switching"
            className="relative text-gray-700 font-medium transition-all duration-300 hover:text-primary group px-3 py-2"
          >
            Switching
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#languages"
            className="relative text-gray-700 font-medium transition-all duration-300 hover:text-primary group px-3 py-2"
          >
            Languages
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#trust"
            className="relative text-gray-700 font-medium transition-all duration-300 hover:text-primary group px-3 py-2"
          >
            Accreditations
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="relative text-gray-700 font-medium transition-all duration-300 hover:text-primary group px-3 py-2"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <a
          href="#switching"
          className="hidden lg:block bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:from-teal-500 hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Switch Now
        </a>

        <button
          className="lg:hidden text-primary text-3xl focus:outline-none transition-all duration-300 group p-2 rounded-xl hover:bg-primary/10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <IoClose className="transform transition-transform duration-300 rotate-90 group-hover:rotate-180 group-hover:text-red-500" />
          ) : (
            <RxHamburgerMenu className="transition-all duration-300 group-hover:text-primary/80" />
          )}
        </button>
      </header>
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-100 fixed top-20 left-0 w-full z-10 py-8 transition-all duration-300 animate-slideDown">
          <nav className="flex flex-col space-y-2 max-w-sm mx-auto">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 text-gray-700 font-medium bg-gray-50/80 border border-gray-200/60 hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 rounded-xl mx-4 group backdrop-blur-sm"
            >
              <span className="flex items-center justify-between">
                About Us
                <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </span>
            </a>
            <a
              href="#benefits"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 text-gray-700 font-medium bg-gray-50/80 border border-gray-200/60 hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 rounded-xl mx-4 group backdrop-blur-sm"
            >
              <span className="flex items-center justify-between">
                What We Offer
                <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </span>
            </a>
            <a
              href="#switching"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 text-gray-700 font-medium bg-gray-50/80 border border-gray-200/60 hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 rounded-xl mx-4 group backdrop-blur-sm"
            >
              <span className="flex items-center justify-between">
                Switching
                <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </span>
            </a>
            <a
              href="#languages"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 text-gray-700 font-medium bg-gray-50/80 border border-gray-200/60 hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 rounded-xl mx-4 group backdrop-blur-sm"
            >
              <span className="flex items-center justify-between">
                Languages
                <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </span>
            </a>
            <a
              href="#trust"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 text-gray-700 font-medium bg-gray-50/80 border border-gray-200/60 hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 rounded-xl mx-4 group backdrop-blur-sm"
            >
              <span className="flex items-center justify-between">
                Accreditations
                <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </span>
            </a>
            <a
              href="#reviews"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 text-gray-700 font-medium bg-gray-50/80 border border-gray-200/60 hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 rounded-xl mx-4 group backdrop-blur-sm"
            >
              <span className="flex items-center justify-between">
                Reviews
                <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </span>
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 text-gray-700 font-medium bg-gray-50/80 border border-gray-200/60 hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 rounded-xl mx-4 group backdrop-blur-sm"
            >
              <span className="flex items-center justify-between">
                Contact
                <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </span>
            </a>

            {/* Mobile CTA Button */}
            <div className="px-4 pt-4">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full bg-primary text-white px-6 py-4 rounded-xl font-semibold text-center hover:from-teal-500 hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Switch Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
