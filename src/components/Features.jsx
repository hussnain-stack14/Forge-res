export default function Features() {
  const features = [
    {
      title: "PREMIUM INGREDIENTS",
      description: "Fresh, high-quality ingredients in every bite.",
      icon: (
        <svg
          className="w-6 sm:w-7 h-6 sm:h-7 text-[#E33B20]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10c0-3.866 3.582-7 8-7s8 3.134 8 7"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13h18M3 17h18M4 21h16a2 2 0 002-2v-1H2v1a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "BOLD FLAVORS",
      description: "Crafted with passion, served with attitude.",
      icon: (
        <svg
          className="w-6 sm:w-7 h-6 sm:h-7 text-[#E33B20]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 16.121A3 3 0 1012.001 11c-.5 1-1.5 1.5-2.122 5.121z"
          />
        </svg>
      ),
    },
    {
      title: "FAST DELIVERY",
      description: "Hot, fresh and right to your door.",
      icon: (
        <svg
          className="w-6 sm:w-7 h-6 sm:h-7 text-[#E33B20]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "FOOD SAFETY",
      description: "Clean kitchen. Safe food. Always.",
      icon: (
        <svg
          className="w-6 sm:w-7 h-6 sm:h-7 text-[#E33B20]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#11100F] border-y border-[#292522] py-6 sm:py-8 lg:py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 divide-[#292522]">
          {features.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-start gap-3.5 sm:gap-4 pt-4 first:pt-0 sm:pt-2 transition-all duration-300 hover:bg-[#151311]/50 group rounded-lg p-2.5 sm:p-3`}
            >
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#090909] border border-[#292522] group-hover:border-[#E33B20]/40 group-hover:shadow-[0_0_15px_rgba(227,59,32,0.25)] transition-all shrink-0">
                {item.icon}
              </div>
              <div className="space-y-0.5 sm:space-y-1">
                <h3 className="font-condensed font-bold text-xs sm:text-sm lg:text-base tracking-wider text-[#F5EFE5] uppercase group-hover:text-[#E33B20] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9B958B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
