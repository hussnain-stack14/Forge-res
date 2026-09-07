import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#11100F] border-t border-[#292522] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: STORY CONTENT */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#F0B83D]" />
              <span className="text-[#F0B83D] font-condensed text-xs sm:text-sm uppercase tracking-[0.25em] font-bold">
                OUR CRAFT & PASSION
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#F5EFE5] tracking-tight leading-[0.95]">
              THE ART OF <br />
              <span className="text-[#E33B20]">THE SMASH</span>
            </h2>

            <p className="text-[#9B958B] text-base sm:text-lg font-sans leading-relaxed">
              At <strong className="text-[#F5EFE5]">FORGE</strong>, we don&apos;t just make burgers — we forge culinary masterpieces. High heat, cast-iron searing, and relentless passion create the caramelized, lacy edges that define true smashed perfection.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#292522]">
              <div>
                <span className="font-display text-3xl sm:text-4xl text-[#E33B20] font-black">
                  100%
                </span>
                <p className="font-condensed font-bold text-xs uppercase text-[#F5EFE5] tracking-wider mt-1">
                  Fresh Ground Beef
                </p>
                <p className="text-xs text-[#9B958B] mt-0.5">
                  Never frozen, seasoned to perfection
                </p>
              </div>

              <div>
                <span className="font-display text-3xl sm:text-4xl text-[#F0B83D] font-black">
                  450°F
                </span>
                <p className="font-condensed font-bold text-xs uppercase text-[#F5EFE5] tracking-wider mt-1">
                  Cast-Iron Sear
                </p>
                <p className="text-xs text-[#9B958B] mt-0.5">
                  Locking in intense crust & juices
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: STORY VISUAL */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#292522] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <Image
                src="/images/loaded-fries.jpg"
                alt="FORGE Gourmet loaded fries and culinary experience"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11100F]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#090909]/90 backdrop-blur-md rounded-lg border border-[#292522]">
                <p className="font-condensed text-xs uppercase tracking-widest text-[#F0B83D] font-bold">
                  KITCHEN PHILOSOPHY
                </p>
                <p className="text-sm font-sans text-[#F5EFE5] mt-1 italic">
                  &ldquo;Crafted with passion, served with attitude. Every single burger is smashed fresh to order.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
