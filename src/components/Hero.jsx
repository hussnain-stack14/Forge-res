import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[680px] lg:min-h-[750px] flex items-center bg-[#090909] overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20"
    >
      {/* Background ambient lighting / glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E33B20]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-[#F0B83D]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#E33B20]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle texture/vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#090909]/40 to-[#090909] pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 xl:col-span-6 text-left flex flex-col justify-center space-y-6">
            {/* Gold eyebrow label */}
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#F0B83D]" />
              <span className="text-[#F0B83D] font-condensed text-xs sm:text-sm uppercase tracking-[0.25em] font-bold">
                PREMIUM BURGERS
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] leading-[0.92] uppercase font-black tracking-tight text-[#F5EFE5]">
              SMASHED TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5EFE5] via-[#F5EFE5] to-[#E33B20]">
                PERFECTION
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#9B958B] text-base sm:text-lg max-w-xl leading-relaxed font-sans font-normal">
              Juicy, crispy, and loaded with flavor. Our smashed burgers are
              crafted with the finest ingredients for a taste you&apos;ll never forget.
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="https://wa.me/923063250741?text=Hi%20FORGE!%20I'd%20like%20to%20place%20an%20order%20for%20delivery%20or%20takeaway."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E33B20] hover:bg-[#c42f17] text-[#F5EFE5] font-condensed text-sm font-bold tracking-widest uppercase rounded transition-all duration-300 shadow-[0_0_25px_rgba(227,59,32,0.45)] hover:shadow-[0_0_35px_rgba(227,59,32,0.7)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>ORDER NOW</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1.5 text-base">
                  →
                </span>
              </a>

              <a
                href="#menu"
                className="inline-flex items-center justify-center px-7 py-4 bg-[#151311] hover:bg-[#1c1a17] text-[#F5EFE5] border border-[#292522] hover:border-[#F5EFE5]/40 font-condensed text-sm font-bold tracking-widest uppercase rounded transition-all duration-200 hover:-translate-y-0.5"
              >
                VIEW MENU
              </a>
            </div>

            {/* Quick trust snippet */}
            <div className="pt-4 flex items-center gap-6 text-xs text-[#9B958B]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E33B20] animate-ping" />
                <span className="text-[#F5EFE5] font-condensed tracking-wider">
                  HOT & SIZZLING DAILY
                </span>
              </div>
              <div className="h-3 w-px bg-[#292522]" />
              <div className="font-condensed tracking-wider">
                100% FRESH GROUND BEEF
              </div>
            </div>
          </div>

          {/* RIGHT BURGER VISUAL */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center items-center mt-6 lg:mt-0">
            {/* Atmospheric backlight & food glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E33B20]/25 via-transparent to-[#F0B83D]/15 rounded-full filter blur-2xl transform scale-90" />

            <div className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-square lg:aspect-[4/3.5] rounded-2xl overflow-hidden border border-[#292522]/60 shadow-[0_20px_60px_rgba(0,0,0,0.8)] group">
              <Image
                src="/images/hero-burger1.jpg"
                alt="FORGE Smashed Sizzling Burger"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Seamless blend gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/60 via-transparent to-transparent hidden lg:block" />

              {/* Floating Quality Badge */}
              <div className="absolute bottom-4 right-4 bg-[#11100F]/90 backdrop-blur-md border border-[#292522] px-4 py-2 rounded shadow-xl flex items-center gap-2.5">
                <span className="text-[#F0B83D] text-lg">★</span>
                <div>
                  <p className="text-[10px] uppercase font-condensed tracking-widest text-[#9B958B]">
                    Specialty
                  </p>
                  <p className="text-xs font-condensed font-bold tracking-wider text-[#F5EFE5]">
                    SIGNATURE SMASH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
