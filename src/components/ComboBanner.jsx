import Image from "next/image";

export default function ComboBanner() {
  return (
    <section id="combo" className="py-12 sm:py-16 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-[#292522] min-h-[300px] sm:min-h-[340px] lg:min-h-[360px] flex items-center bg-[#11100F] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {/* BACKGROUND CINEMATIC PHOTO */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/combo.jpg"
              alt="FORGE Burger Fries and Drink Combo"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-right sm:object-center opacity-85 scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Multi-layered cinematic overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-[#090909]/85 to-transparent sm:w-3/4 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent sm:hidden z-10" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#090909]/60 z-10 pointer-events-none" />
          </div>

          {/* CONTENT */}
          <div className="relative z-20 max-w-xl p-8 sm:p-12 lg:p-16 space-y-4">
            {/* Small gold label */}
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#F0B83D]" />
              <span className="text-[#F0B83D] font-condensed text-xs sm:text-sm uppercase tracking-[0.25em] font-bold">
                PERFECT COMBO
              </span>
            </div>

            {/* Large banner title */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase font-black tracking-tight text-[#F5EFE5] leading-[1.05]">
              BURGER + FRIES <br className="hidden sm:inline" />
              <span className="text-[#E33B20]">+ DRINK</span>
            </h2>

            {/* Description */}
            <p className="text-[#9B958B] text-sm sm:text-base font-sans leading-relaxed max-w-md">
              The ultimate meal. Bigger flavor. Better value. Pair your favorite smashed patty with our loaded seasoned fries and ice-cold beverage.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/923063250741?text=Hi%20FORGE!%20I%20want%20to%20order%20the%20Burger%20%2B%20Fries%20%2B%20Drink%20Perfect%20Combo."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#E33B20] hover:bg-[#c42f17] text-[#F5EFE5] font-condensed text-xs sm:text-sm font-bold tracking-widest uppercase rounded transition-all duration-300 shadow-[0_0_20px_rgba(227,59,32,0.5)] hover:shadow-[0_0_30px_rgba(227,59,32,0.8)] hover:-translate-y-0.5"
              >
                <span>ORDER COMBO</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
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
