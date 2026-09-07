"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ["home", "menu", "combo", "delivery", "location", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home", id: "home" },
    { name: "MENU", href: "#menu", id: "menu" },
    { name: "COMBO", href: "#combo", id: "combo" },
    { name: "DELIVERY", href: "#delivery", id: "delivery" },
    { name: "LOCATION", href: "#location", id: "location" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090909]/90 backdrop-blur-md border-b border-[#292522]/80 shadow-2xl py-3.5"
          : "bg-gradient-to-b from-[#090909]/95 via-[#090909]/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="#home"
          className="group flex items-baseline gap-0.5 tracking-wider transition-transform hover:scale-105"
        >
          <span className="font-display text-3xl sm:text-4xl text-[#F5EFE5] tracking-tight font-black">
            FORGE
          </span>
          <span className="font-display text-3xl sm:text-4xl text-[#E33B20] font-black">
            .
          </span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-condensed tracking-widest transition-all duration-200 uppercase relative py-1 ${
                  isActive
                    ? "text-[#E33B20] font-bold"
                    : "text-[#F5EFE5]/80 hover:text-[#F5EFE5]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E33B20] shadow-[0_0_8px_#E33B20] rounded-full animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT CTA BUTTON */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/923063250741?text=Hi%20FORGE!%20I'd%20like%20to%20order%20some%20smashed%20burgers."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#E33B20] hover:bg-[#c42f17] text-[#F5EFE5] font-condensed text-xs font-bold tracking-wider uppercase rounded transition-all duration-200 shadow-[0_0_18px_rgba(227,59,32,0.4)] hover:shadow-[0_0_25px_rgba(227,59,32,0.7)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>ORDER NOW</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="https://wa.me/923063250741"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-[#E33B20] text-[#F5EFE5] font-condensed text-[11px] font-bold tracking-wider uppercase rounded shadow-[0_0_12px_rgba(227,59,32,0.4)]"
          >
            ORDER
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 text-[#F5EFE5] hover:text-[#E33B20] focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#11100F]/98 backdrop-blur-xl border-b border-[#292522] px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-condensed tracking-widest uppercase py-2 border-b border-[#292522]/40 transition-colors ${
                  activeSection === link.id ? "text-[#E33B20] font-bold" : "text-[#F5EFE5]/80 hover:text-[#F5EFE5]"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/923063250741?text=Hi%20FORGE!%20I'd%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-3 bg-[#E33B20] hover:bg-[#c42f17] text-[#F5EFE5] text-center font-condensed text-sm font-bold tracking-wider uppercase rounded shadow-[0_0_20px_rgba(227,59,32,0.5)] flex items-center justify-center gap-2"
            >
              <span>ORDER ON WHATSAPP</span>
              <span>→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
