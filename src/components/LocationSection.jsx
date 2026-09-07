export default function LocationSection() {
  const coordinates = '31°26\'22.5"N 74°16\'55.7"E';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=31.439583,74.282139`;
  const embedMapsUrl = `https://maps.google.com/maps?q=31.439583,74.282139&hl=en&z=16&output=embed`;

  return (
    <section id="location" className="py-14 sm:py-20 lg:py-24 bg-[#11100F] border-t border-[#292522] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-[#E33B20]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* LEFT: LOCATION DETAILS */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#F0B83D]" />
              <span className="text-[#F0B83D] font-condensed text-xs sm:text-sm uppercase tracking-[0.25em] font-bold">
                FIND US & VISIT
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#F5EFE5] tracking-tight leading-[1.05]">
              LOCATION & <span className="text-[#E33B20]">HOURS</span>
            </h2>

            <p className="text-[#9B958B] text-sm sm:text-base leading-relaxed">
              Step in for the sizzling aroma of fresh smashed patties or pick up your hot takeaway orders directly from our kitchen counter.
            </p>

            <div className="space-y-3 sm:space-y-4 pt-1">
              {/* Address card */}
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 bg-[#151311] border border-[#292522] rounded-xl transition-all duration-200 hover:border-[#E33B20]/40">
                <div className="w-9 h-9 rounded-lg bg-[#090909] border border-[#292522] flex items-center justify-center text-[#E33B20] shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-condensed font-bold text-xs sm:text-sm uppercase text-[#F5EFE5] tracking-wider">
                    RESTAURANT ADDRESS
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9B958B] mt-0.5 font-medium">
                    Umer Cash and Carry, Main Road, Nowgam
                  </p>
                  <p className="text-[11px] text-[#F0B83D] mt-1 font-mono">
                    📍 {coordinates}
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 bg-[#151311] border border-[#292522] rounded-xl transition-all duration-200 hover:border-[#E33B20]/40">
                <div className="w-9 h-9 rounded-lg bg-[#090909] border border-[#292522] flex items-center justify-center text-[#E33B20] shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-condensed font-bold text-xs sm:text-sm uppercase text-[#F5EFE5] tracking-wider">
                    PHONE & WHATSAPP
                  </h4>
                  <a
                    href="https://wa.me/923063250741"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#F5EFE5] hover:text-[#E33B20] transition-colors font-medium mt-0.5 inline-block"
                  >
                    0306 3250741 / +92 306 3250741
                  </a>
                </div>
              </div>

              {/* Hours card */}
              <div className="flex items-start gap-3.5 p-3.5 sm:p-4 bg-[#151311] border border-[#292522] rounded-xl transition-all duration-200 hover:border-[#F0B83D]/40">
                <div className="w-9 h-9 rounded-lg bg-[#090909] border border-[#292522] flex items-center justify-center text-[#F0B83D] shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-condensed font-bold text-xs sm:text-sm uppercase text-[#F5EFE5] tracking-wider">
                    OPERATING HOURS
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9B958B] mt-0.5">
                    Open Daily: 1:00 PM – 1:00 AM (Midnight)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: MAP CARD */}
          <div className="lg:col-span-7">
            <div className="bg-[#151311] border border-[#292522] rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-[#292522]">
                <div>
                  <span className="text-[10px] sm:text-xs font-condensed font-bold uppercase tracking-widest text-[#E33B20]">
                    NOWGAM BRANCH
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase text-[#F5EFE5]">
                    FORGE SMASH KITCHEN
                  </h3>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#E33B20] hover:bg-[#c42f17] text-[#F5EFE5] text-xs font-condensed font-bold uppercase tracking-wider rounded-lg transition-all shadow-[0_0_15px_rgba(227,59,32,0.4)] self-start sm:self-auto"
                >
                  <span>GET DIRECTIONS</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Interactive Embedded Google Maps Frame */}
              <div className="mt-4 sm:mt-5 aspect-[16/10] sm:aspect-[16/9] w-full bg-[#090909] rounded-xl border border-[#292522] relative overflow-hidden">
                <iframe
                  title="FORGE Location Map"
                  src={embedMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-[#9B958B]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Dine-In & Takeaway Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#F0B83D]">★</span>
                  <span>Coordinates: 31°26&apos;22.5&quot;N 74°16&apos;55.7&quot;E</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
