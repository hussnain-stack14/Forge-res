export default function LocationSection() {
  return (
    <section id="location" className="py-20 bg-[#11100F] border-t border-[#292522] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: LOCATION INFO */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#F0B83D]" />
              <span className="text-[#F0B83D] font-condensed text-xs sm:text-sm uppercase tracking-[0.25em] font-bold">
                FIND US & VISIT
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-[#F5EFE5] tracking-tight">
              LOCATION & <span className="text-[#E33B20]">HOURS</span>
            </h2>

            <p className="text-[#9B958B] text-sm sm:text-base leading-relaxed">
              Step in for the sizzling aroma of fresh smashed patties or pick up your hot takeaway orders directly from our kitchen.
            </p>

            <div className="space-y-4 pt-2">
              {/* Address card */}
              <div className="flex items-start gap-4 p-4 bg-[#151311] border border-[#292522] rounded-lg">
                <div className="w-9 h-9 rounded-lg bg-[#090909] border border-[#292522] flex items-center justify-center text-[#E33B20] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-condensed font-bold text-sm uppercase text-[#F5EFE5] tracking-wider">
                    RESTAURANT ADDRESS
                  </h4>
                  <p className="text-sm text-[#9B958B] mt-0.5">
                    Umer Cash and Carry, Main Road, Nowgam
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex items-start gap-4 p-4 bg-[#151311] border border-[#292522] rounded-lg">
                <div className="w-9 h-9 rounded-lg bg-[#090909] border border-[#292522] flex items-center justify-center text-[#E33B20] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-condensed font-bold text-sm uppercase text-[#F5EFE5] tracking-wider">
                    PHONE & WHATSAPP
                  </h4>
                  <a
                    href="tel:03063250741"
                    className="text-sm text-[#F5EFE5] hover:text-[#E33B20] transition-colors font-medium mt-0.5 inline-block"
                  >
                    0306 3250741 / +92 306 3250741
                  </a>
                </div>
              </div>

              {/* Hours card */}
              <div className="flex items-start gap-4 p-4 bg-[#151311] border border-[#292522] rounded-lg">
                <div className="w-9 h-9 rounded-lg bg-[#090909] border border-[#292522] flex items-center justify-center text-[#F0B83D] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-condensed font-bold text-sm uppercase text-[#F5EFE5] tracking-wider">
                    OPERATING HOURS
                  </h4>
                  <p className="text-sm text-[#9B958B] mt-0.5">
                    Open Daily: 1:00 PM – 1:00 AM (Midnight)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: MAP / AMBIENT CARD */}
          <div className="lg:col-span-7">
            <div className="bg-[#151311] border border-[#292522] rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#292522]">
                <div>
                  <span className="text-[10px] font-condensed font-bold uppercase tracking-widest text-[#E33B20]">
                    NOWGAM BRANCH
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase text-[#F5EFE5]">
                    FORGE SMASH KITCHEN
                  </h3>
                </div>
                <a
                  href="https://maps.google.com/?q=Nowgam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#090909] hover:bg-[#1a1816] text-[#F5EFE5] border border-[#292522] text-xs font-condensed font-bold uppercase tracking-wider rounded transition-colors"
                >
                  <span>GET DIRECTIONS</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Styled Visual Map Placeholder / Graphic */}
              <div className="mt-6 aspect-[16/9] bg-[#090909] rounded-xl border border-[#292522] relative overflow-hidden flex items-center justify-center">
                {/* Map Grid Graphic */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E33B20_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex flex-col items-center animate-bounce">
                    <div className="w-12 h-12 rounded-full bg-[#E33B20] text-white flex items-center justify-center shadow-[0_0_20px_#E33B20]">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="mt-2 px-3 py-1 bg-[#11100F] border border-[#292522] rounded-full shadow-lg">
                      <span className="font-condensed font-bold text-xs uppercase text-[#F5EFE5] tracking-wider">
                        FORGE. NOWGAM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[#9B958B]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Dine-In & Takeaway Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Free Street Parking Nearby</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
