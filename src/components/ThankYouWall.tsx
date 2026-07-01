"use client";

import { useEffect, useRef, useState } from "react";
import { THANK_YOU_WALL, Contribution } from "@/lib/constants";

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

// Animated count-up for the total raised — creates a "wow" effect on scroll
function AnimatedTotal({ target }: { target: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const runAnimation = () => {
      if (started.current) return;
      started.current = true;
      const duration = 1400;
      const start = performance.now();
      function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) runAnimation();
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{formatBRL(value)}</span>;
}

function ContributionCard({ item, rank }: { item: Contribution; rank: number }) {
  const isTop = rank === 0;
  const initial = item.name.trim().charAt(0).toUpperCase() || "♥";

  return (
    <div
      className={`relative flex flex-col gap-3 rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        isTop
          ? "bg-gradient-to-br from-bia-fuchsia/10 via-white to-bia-rose/10 border-bia-fuchsia/30 shadow-md shadow-bia-rose/10"
          : "bg-white/70 border-bia-blush/70 shadow-sm"
      }`}
    >
      {isTop && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-bia-fuchsia to-bia-rose text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
          👑 Presente de destaque
        </span>
      )}

      <div className="flex items-center gap-3">
        {/* Avatar with initial */}
        <div
          className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-inner ${
            isTop
              ? "bg-gradient-to-br from-bia-fuchsia to-bia-rose"
              : "bg-gradient-to-br from-bia-rose to-bia-blush"
          }`}
        >
          {initial}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-bia-deep truncate">{item.name}</p>
          {item.amount > 0 && (
            <p className="text-bia-fuchsia font-extrabold text-lg leading-tight">
              {formatBRL(item.amount)}
            </p>
          )}
        </div>
        <span className="text-2xl">{isTop ? "💖" : "🌷"}</span>
      </div>

      {item.message && (
        <p className="text-bia-deep/60 text-sm italic leading-snug">
          &ldquo;{item.message}&rdquo;
        </p>
      )}
    </div>
  );
}

export default function ThankYouWall() {
  // Sort by amount (highest first) so generous gifts lead — inspires others
  const contributions = [...THANK_YOU_WALL].sort((a, b) => b.amount - a.amount);
  const total = contributions.reduce((sum, c) => sum + c.amount, 0);
  const count = contributions.length;

  if (count === 0) return null;

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px bg-bia-rose/30" />
            <span className="text-2xl">💝</span>
            <div className="flex-1 h-px bg-bia-rose/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-bia-deep text-center">
            Mural de Agradecimentos
          </h2>
          <p className="text-bia-deep/50 text-center max-w-lg">
            Cada gesto de carinho fica registrado aqui com muito amor. Um
            enorme obrigada a quem já fez parte deste momento especial! 🥰
          </p>
        </div>

        {/* Stats bar — social proof */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
          <div className="flex flex-col items-center bg-gradient-to-br from-bia-fuchsia to-bia-rose text-white rounded-2xl px-8 py-4 shadow-lg shadow-bia-rose/30 min-w-[160px]">
            <span className="text-3xl sm:text-4xl font-extrabold leading-none">
              <AnimatedTotal target={total} />
            </span>
            <span className="text-xs font-medium uppercase tracking-widest mt-1 text-white/80">
              já arrecadados
            </span>
          </div>
          <div className="flex flex-col items-center bg-white/70 border border-bia-blush rounded-2xl px-8 py-4 shadow-sm min-w-[140px]">
            <span className="text-3xl sm:text-4xl font-extrabold text-bia-deep leading-none">
              {count}
            </span>
            <span className="text-xs font-medium uppercase tracking-widest mt-1 text-bia-deep/50">
              {count === 1 ? "pessoa querida" : "pessoas queridas"}
            </span>
          </div>
        </div>

        {/* Contributions grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {contributions.map((item, i) => (
            <ContributionCard key={`${item.name}-${i}`} item={item} rank={i} />
          ))}
        </div>

        {/* Gentle nudge to contribute */}
        <div className="mt-12 text-center">
          <p className="text-bia-deep/70 text-lg font-light mb-5 max-w-xl mx-auto">
            Quer deixar o seu carinho nesse mural também?
            <span className="block text-bia-deep/50 text-base mt-1">
              Faça o seu PIX e faça parte dessa corrente de amor. 💕
            </span>
          </p>
          <a
            href="#presentes"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-bia-fuchsia to-bia-rose text-white font-semibold px-8 py-3.5 rounded-full shadow-md shadow-bia-rose/30 hover:shadow-bia-rose/50 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>✨</span>
            Quero presentear também
          </a>
        </div>
      </div>
    </section>
  );
}
