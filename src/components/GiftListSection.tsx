import { GIFT_LIST, GiftItem } from "@/lib/constants";

function GiftCard({ item }: { item: GiftItem }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl bg-white/70 border border-bia-blush/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Icon bubble */}
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-bia-blush to-bia-rose/30 text-2xl shadow-inner">
        {item.icon}
      </div>

      <div className="flex flex-col gap-1 min-w-0">
        <p className="font-serif text-bia-deep font-semibold text-lg leading-snug">
          {item.name}
        </p>
        {item.detail && (
          <p className="text-bia-deep/55 text-sm leading-snug">{item.detail}</p>
        )}
        {item.brand && (
          <span className="mt-1 inline-flex w-fit items-center gap-1 rounded-full bg-bia-rose/10 text-bia-fuchsia text-xs font-semibold px-3 py-1">
            {item.brand}
          </span>
        )}
      </div>
    </div>
  );
}

export default function GiftListSection() {
  if (GIFT_LIST.length === 0) return null;

  return (
    <section
      id="lista-de-presentes"
      className="scroll-mt-8 py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px bg-bia-rose/30" />
            <span className="text-2xl">🎁</span>
            <div className="flex-1 h-px bg-bia-rose/30" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-bia-deep text-center">
            Lista de Presentes
          </h2>
          <p className="text-bia-deep/50 text-center max-w-lg">
            Algumas ideias que a Beatriz vai amar. Fique à vontade para
            escolher — o carinho é o que mais importa. 💝
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-12 mt-10">
          {GIFT_LIST.map((category) => (
            <div key={category.title}>
              {/* Category title */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-bia-fuchsia text-center">
                  {category.title}
                </h3>
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {category.items.map((item) => (
                  <GiftCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Nudge to the PIX section */}
        <div className="mt-14 text-center">
          <p className="text-bia-deep/60 text-base mb-4 font-serif italic text-lg">
            Prefere presentear de outra forma?
          </p>
          <a
            href="#presentes"
            className="inline-flex items-center gap-2 border-2 border-bia-rose/40 text-bia-deep font-semibold px-7 py-3 rounded-full hover:bg-bia-rose/10 hover:border-bia-rose transition-all duration-200"
          >
            <span>💸</span>
            Contribuir via PIX
          </a>
        </div>
      </div>
    </section>
  );
}
