import Image from "next/image";

export default function DeliverySection() {
  return (
    <section id="delivery" className="py-20 lg:py-24 bg-[#090909] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#E33B20]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: LARGE FOOD / TAKEAWAY IMAGE */}
          <div className="lg:col-span-6 order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#292522] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <Image
                src="/images/delivery.jpg"
                alt="Hot and Fresh FORGE Burger Takeaway Box"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Dark subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909]/70 via-transparent to-transparent" />

              {/* Delivery speed badge */}
              <div className="absolute top-4 left-4 bg-[#11100F]/90 backdrop-blur-md border border-[#292522] px-4 py-2 rounded-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E33B20]/20 flex items-center justify-center text-[#E33B20]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-condensed tracking-widest text-[#9B958B]">
                    Average Delivery
                  </p>
                  <p className="text-xs font-condensed font-bold text-[#F5EFE5]">
                    30–45 MINS FAST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="lg:col-span-6 order-2 space-y-6">
            {/* Gold Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#F0B83D]" />
              <span className="text-[#F0B83D] font-condensed text-xs sm:text-sm uppercase tracking-[0.25em] font-bold">
                ORDER NOW
              </span>
            </div>

            {/* Large Heading */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#F5EFE5] tracking-tight leading-[0.95]">
              HOT & <span className="text-[#E33B20]">FRESH</span>
            </h2>

            {/* Body Text */}
            <p className="text-[#9B958B] text-base sm:text-lg font-sans leading-relaxed">
              Enjoy your favorite burgers from the comfort of your home. Fast
              and reliable delivery, packaged in heat-retaining boxes so every
              single bite stays as crispy and juicy as straight off our cast-iron grill.
            </p>

            {/* Delivery Perks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3 bg-[#11100F] border border-[#292522] rounded-lg">
                <div className="w-8 h-8 rounded bg-[#151311] border border-[#292522] flex items-center justify-center text-[#E33B20]">
                  {/* Scooter / Delivery icon */}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-condensed font-bold text-xs uppercase text-[#F5EFE5] tracking-wider">
                    Direct To Door
                  </h4>
                  <p className="text-[11px] text-[#9B958B]">Nowgam & surrounding areas</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#11100F] border border-[#292522] rounded-lg">
                <div className="w-8 h-8 rounded bg-[#151311] border border-[#292522] flex items-center justify-center text-[#F0B83D]">
                  {/* Insulated Box / Warm icon */}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-condensed font-bold text-xs uppercase text-[#F5EFE5] tracking-wider">
                    Thermal Insulated
                  </h4>
                  <p className="text-[11px] text-[#9B958B]">Crispy & steaming hot</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <a
                href="https://wa.me/923063250741?text=Hi%20FORGE!%20I'd%20like%20to%20place%20a%20delivery%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#E33B20] hover:bg-[#c42f17] text-[#F5EFE5] font-condensed text-sm font-bold tracking-widest uppercase rounded transition-all duration-300 shadow-[0_0_25px_rgba(227,59,32,0.45)] hover:shadow-[0_0_35px_rgba(227,59,32,0.7)] hover:-translate-y-0.5"
              >
                <span>ORDER NOW</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
