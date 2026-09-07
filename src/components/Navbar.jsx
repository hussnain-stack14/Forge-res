"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ["home", "menu", "combo", "about", "delivery", "location", "contact"];
      const scrollPosition = window.scrollY + 180;

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home", id: "home" },
    { name: "MENU", href: "#menu", id: "menu" },
    { name: "COMBO", href: "#combo", id: "combo" },
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "DELIVERY", href: "#delivery", id: "delivery" },
    { name: "LOCATION", href: "#location", id: "location" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090909]/92 backdrop-blur-md border-b border-[#292522] shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3 sm:py-3.5"
          : "bg-gradient-to-b from-[#090909]/95 via-[#090909]/60 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="#home"
          onClick={() => setMobileMenuOpen(false)}
          className="group flex items-baseline gap-0.5 tracking-wider transition-transform hover:scale-105"
        >
          <span className="font-display text-2xl xs:text-3xl sm:text-4xl text-[#F5EFE5] tracking-tight font-black">
            FORGE
          </span>
          <span className="font-display text-2xl xs:text-3xl sm:text-4xl text-[#E33B20] font-black">
            .
          </span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
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
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E33B20] shadow-[0_0_8px_#E33B20] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT CTA BUTTON (DESKTOP) */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://wa.me/923063250741?text=Hi%20FORGE!%20I'd%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#E33B20] hover:bg-[#c42f17] text-[#F5EFE5] font-condensed text-xs font-bold tracking-wider uppercase rounded-md transition-all duration-200 shadow-[0_0_18px_rgba(227,59,32,0.4)] hover:shadow-[0_0_25px_rgba(227,59,32,0.7)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>ORDER NOW</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex lg:hidden items-center gap-2.5">
          {/* Mobile quick CTA for extra small screens */}
          <a
            href="https://wa.me/923063250741?text=Hi%20FORGE!%20I'd%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden px-3 py-1.5 bg-[#E33B20] text-[#F5EFE5] font-condensed text-[11px] font-bold tracking-wider uppercase rounded shadow-[0_0_12px_rgba(227,59,32,0.4)]"
          >
            ORDER
          </a>

          {/* Hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 text-[#F5EFE5] hover:text-[#E33B20] focus:outline-none transition-colors rounded-lg bg-[#11100F] border border-[#292522]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE FULL DRAWER OVERLAY */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090909]/98 backdrop-blur-2xl border-b border-[#292522] px-6 py-6 transition-all duration-200 shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-condensed tracking-widest uppercase py-2.5 px-3 rounded-md transition-colors ${
                  activeSection === link.id
                    ? "bg-[#151311] text-[#E33B20] font-bold border-l-2 border-[#E33B20]"
                    : "text-[#F5EFE5]/80 hover:text-[#F5EFE5] hover:bg-[#11100F]"
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2">
              <a
                href="https://wa.me/923063250741?text=Hi%20FORGE!%20I'd%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 bg-[#E33B20] hover:bg-[#c42f17] text-[#F5EFE5] text-center font-condensed text-sm font-bold tracking-wider uppercase rounded-lg shadow-[0_0_20px_rgba(227,59,32,0.5)] flex items-center justify-center gap-2"
              >
                <span>ORDER ON WHATSAPP</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
