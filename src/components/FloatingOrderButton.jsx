"use client";

import { useState, useEffect } from "react";

export default function FloatingOrderButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Keep visible or fade in after small scroll
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-10 opacity-0 scale-90 pointer-events-none"
      }`}
    >
      <a
        href="https://wa.me/923063250741?text=Hi%20FORGE!%20I'd%20like%20to%20place%20an%20order%20now."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 sm:px-6 sm:py-3.5 bg-[#E33B20] hover:bg-[#c42f17] text-[#F5EFE5] rounded-full shadow-[0_4px_25px_rgba(227,59,32,0.6)] hover:shadow-[0_6px_35px_rgba(227,59,32,0.85)] transition-all duration-300 hover:scale-105 active:scale-95 border border-[#F5EFE5]/10 animate-subtle-pulse"
        aria-label="Order on WhatsApp"
      >
        <span className="text-base sm:text-lg">📱</span>
        <span className="font-condensed font-bold text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap">
          ORDER NOW
        </span>
        <span className="hidden sm:inline-block transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </a>
    </div>
  );
}
