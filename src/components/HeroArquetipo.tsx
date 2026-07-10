import { HERO } from "@/lib/product";
import { ARCHETYPES, ARCHETYPE_ORDER } from "@/lib/archetypes";

/** Abertura do funil (etapa "início"): promessa + CTA para começar o teste. */
export default function HeroArquetipo({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16">
      {/* Anel de arquétipos ao fundo */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.14]"
        aria-hidden="true"
      >
        <div className="animate-float text-[13vw] sm:text-[9vw] leading-none tracking-widest select-none whitespace-nowrap">
          {ARCHETYPE_ORDER.map((id) => ARCHETYPES[id].emoji).join(" ")}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
        <span
          className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-arc-gold/30 bg-arc-surface/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-arc-gold"
          style={{ animationDelay: "0.05s" }}
        >
          {HERO.eyebrow}
        </span>

        <h1
          className="animate-fade-up font-serif font-bold leading-[1.05] text-4xl sm:text-6xl md:text-7xl text-arc-ink"
          style={{ animationDelay: "0.15s" }}
        >
          Descubra o seu{" "}
          <span className="text-gold">Arquétipo</span> de Personalidade
        </h1>

        <p
          className="animate-fade-up text-arc-muted text-lg sm:text-xl leading-relaxed max-w-xl"
          style={{ animationDelay: "0.3s" }}
        >
          {HERO.subtitulo}
        </p>

        <ul
          className="animate-fade-up flex flex-wrap items-center justify-center gap-3 mt-1"
          style={{ animationDelay: "0.4s" }}
        >
          {HERO.bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 rounded-full bg-arc-surface/70 border border-arc-line px-4 py-2 text-sm text-arc-ink/80"
            >
              <svg className="w-4 h-4 text-arc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {b}
            </li>
          ))}
        </ul>

        <button
          onClick={onStart}
          className="animate-fade-up group mt-4 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-arc-gold-deep to-arc-gold px-9 py-4 text-lg font-bold text-arc-bg shadow-lg shadow-arc-gold/20 hover:shadow-arc-gold/40 hover:scale-[1.03] active:scale-95 transition-all duration-200"
          style={{ animationDelay: "0.5s" }}
        >
          {HERO.cta}
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 7l5 5-5 5M6 12h12" />
          </svg>
        </button>

        <p
          className="animate-fade-up text-xs text-arc-muted/70"
          style={{ animationDelay: "0.6s" }}
        >
          Baseado nos 12 arquétipos de personalidade de raiz junguiana.
        </p>
      </div>
    </section>
  );
}
