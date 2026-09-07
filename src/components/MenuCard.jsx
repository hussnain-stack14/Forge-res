import Image from "next/image";

export default function MenuCard({ item }) {
  const whatsappUrl = `https://wa.me/923063250741?text=${encodeURIComponent(
    `Hi FORGE! I would like to order: ${item.title} (${item.price})`
  )}`;

  return (
    <div className="group relative bg-[#151311] border border-[#292522] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#E33B20]/50 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] flex flex-col h-full">
      {/* CARD IMAGE CONTAINER */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#090909]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-110"
        />

        {/* Subtle dark gradient overlay on image bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151311] via-transparent to-transparent opacity-70" />

        {/* Tag / Badge if any */}
        {item.tag && (
          <div className="absolute top-3 right-3 bg-[#E33B20] text-[#F5EFE5] text-[10px] font-condensed font-bold tracking-widest uppercase px-2.5 py-1 rounded shadow-md">
            {item.tag}
          </div>
        )}
      </div>

      {/* CARD BODY */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          {/* TITLE & PRICE */}
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-condensed text-xl sm:text-2xl font-bold tracking-wide uppercase text-[#F5EFE5] group-hover:text-[#E33B20] transition-colors">
              {item.title}
            </h3>
            <span className="font-condensed text-lg sm:text-xl font-black text-[#E33B20] whitespace-nowrap">
              {item.price}
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-sm text-[#9B958B] leading-relaxed font-sans line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* QUICK ORDER BUTTON */}
        <div className="pt-2 border-t border-[#292522]/70 flex items-center justify-between">
          <span className="text-[11px] font-condensed uppercase tracking-wider text-[#9B958B]">
            Freshly Smashed
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-condensed font-bold tracking-wider uppercase text-[#F5EFE5] group-hover:text-[#E33B20] transition-colors hover:underline"
          >
            <span>ORDER</span>
            <span className="text-sm">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
