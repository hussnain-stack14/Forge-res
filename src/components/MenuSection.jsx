"use client";

import { useState } from "react";
import MenuCard from "./MenuCard";

const burgersData = [
  {
    id: "forge-classic",
    image: "/images/forge-classic.jpg",
    title: "FORGE CLASSIC",
    description: "Single smashed patty, cheese, lettuce, special sauce.",
    price: "Rs. 650",
    tag: "BESTSELLER",
    category: "burgers",
  },
  {
    id: "forge-boss",
    image: "/images/forge-boss.jpg",
    title: "FORGE BOSS",
    description: "Double smashed patties, cheese, grilled onions, lettuce.",
    price: "Rs. 950",
    tag: "SIGNATURE",
    category: "burgers",
  },
  {
    id: "chicken-fillet",
    image: "/images/chicken-fillet.jpg",
    title: "CHICKEN FILLET",
    description: "Crispy chicken, cheese, lettuce, special sauce.",
    price: "Rs. 490",
    category: "burgers",
  },
  {
    id: "hot-spicy",
    image: "/images/hot-spicy.jpg",
    title: "HOT & SPICY",
    description: "Spicy chicken, cheese, lettuce, hot sauce.",
    price: "Rs. 530",
    tag: "SPICY",
    category: "burgers",
  },
];

const sidesData = [
  {
    id: "loaded-fries",
    image: "/images/loaded-fries.jpg",
    title: "LOADED SMASH FRIES",
    description: "Golden fries loaded with melted cheese, chopped beef bacon, jalapenos & sauce.",
    price: "Rs. 450",
    tag: "FAN FAVORITE",
    category: "sides",
  },
  {
    id: "forge-combo-pack",
    image: "/images/combo.jpg",
    title: "TRIPLE SMASH COMBO",
    description: "Double smash burger + Loaded Fries + Chilled Drink + Dipping Sauce.",
    price: "Rs. 1,250",
    tag: "VALUE PACK",
    category: "combos",
  },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [showFullMenuModal, setShowFullMenuModal] = useState(false);

  const displayItems =
    activeTab === "all"
      ? burgersData
      : activeTab === "sides"
      ? sidesData
      : burgersData.filter((item) => item.category === activeTab);

  return (
    <section id="menu" className="py-20 lg:py-24 bg-[#090909] relative">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#E33B20]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#F0B83D]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#292522] pb-6">
          <div>
            {/* Gold label */}
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-0.5 bg-[#F0B83D]" />
              <span className="text-[#F0B83D] font-condensed text-xs sm:text-sm uppercase tracking-[0.25em] font-bold">
                OUR MENU
              </span>
            </div>
            {/* Large heading */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#F5EFE5] tracking-tight">
              BURGERS
            </h2>
          </div>

          {/* RIGHT SIDE LINK / BUTTON */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFullMenuModal(true)}
              type="button"
              className="group inline-flex items-center gap-2 text-sm font-condensed font-bold tracking-widest uppercase text-[#E33B20] hover:text-[#F5EFE5] transition-colors cursor-pointer py-1"
            >
              <span>VIEW FULL MENU</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>

        {/* 4-CARD RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {burgersData.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* BOTTOM CALLOUT */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#9B958B] font-sans">
            Craving customization? Extra cheese, additional patties, or special sauces available upon request on WhatsApp.
          </p>
        </div>
      </div>

      {/* FULL MENU MODAL */}
      {showFullMenuModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#11100F] border border-[#292522] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#292522]">
              <div>
                <span className="text-[#F0B83D] font-condensed text-xs uppercase tracking-widest font-bold">
                  FORGE KITCHEN
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-[#F5EFE5] uppercase">
                  COMPLETE MENU
                </h3>
              </div>
              <button
                onClick={() => setShowFullMenuModal(false)}
                className="p-2 text-[#9B958B] hover:text-[#F5EFE5] rounded-lg bg-[#151311] border border-[#292522] transition-colors"
                aria-label="Close menu modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Grid */}
            <div className="mt-6 space-y-8">
              <div>
                <h4 className="font-condensed font-bold text-lg text-[#E33B20] tracking-wider uppercase mb-4 border-b border-[#292522]/60 pb-1">
                  Smashed Beef & Chicken Burgers
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {burgersData.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 bg-[#151311] border border-[#292522] rounded-lg flex justify-between items-start"
                    >
                      <div>
                        <h5 className="font-condensed font-bold text-[#F5EFE5] text-base">
                          {item.title}
                        </h5>
                        <p className="text-xs text-[#9B958B] mt-1">
                          {item.description}
                        </p>
                      </div>
                      <span className="font-condensed font-bold text-[#E33B20] text-sm ml-3 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-condensed font-bold text-lg text-[#F0B83D] tracking-wider uppercase mb-4 border-b border-[#292522]/60 pb-1">
                  Loaded Sides & Combos
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sidesData.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 bg-[#151311] border border-[#292522] rounded-lg flex justify-between items-start"
                    >
                      <div>
                        <h5 className="font-condensed font-bold text-[#F5EFE5] text-base">
                          {item.title}
                        </h5>
                        <p className="text-xs text-[#9B958B] mt-1">
                          {item.description}
                        </p>
                      </div>
                      <span className="font-condensed font-bold text-[#E33B20] text-sm ml-3 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#292522] flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-[#9B958B]">
                All prices are inclusive of taxes. Hot takeaway & delivery available.
              </p>
              <a
                href="https://wa.me/923063250741?text=Hi%20FORGE!%20I%20checked%20out%20your%20full%20menu%20and%20want%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#E33B20] hover:bg-[#c42f17] text-[#F5EFE5] font-condensed font-bold text-xs uppercase tracking-widest rounded shadow-[0_0_15px_rgba(227,59,32,0.4)] text-center"
              >
                ORDER FULL MENU ON WHATSAPP →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
