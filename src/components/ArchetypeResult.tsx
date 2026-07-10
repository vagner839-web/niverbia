"use client";

import { useState } from "react";
import type { QuizResult } from "@/lib/score";
import { BRAND } from "@/lib/product";

/** Etapa "fim" (parte 1): revela o arquétipo dominante. */
export default function ArchetypeResult({
  result,
  onRestart,
}: {
  result: QuizResult;
  onRestart: () => void;
}) {
  const { winner, ranking } = result;
  const [copied, setCopied] = useState(false);
  const top3 = ranking.slice(0, 3);

  function handleShare() {
    const url =
      typeof window !== "undefined"
        ? `${window.location.origin}${window.location.pathname}?arquetipo=${winner.id}`
        : "";
    const texto = `Meu arquétipo é ${winner.nome} ${winner.emoji} — descubra o seu em ${BRAND.name}: ${url}`;

    if (navigator.share) {
      navigator.share({ title: BRAND.name, text: texto, url }).catch(() => {});
      return;
    }
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-arc-gold animate-fade-up">
          O seu arquétipo dominante é
        </p>

        {/* Cartão principal */}
        <div
          className="animate-fade-up mt-5 rounded-3xl border p-8 sm:p-10 text-center shadow-2xl"
          style={{
            animationDelay: "0.1s",
            borderColor: `${winner.cor}55`,
            background: `radial-gradient(ellipse at top, ${winner.cor}22, transparent 70%), #1A1533`,
            boxShadow: `0 20px 60px -20px ${winner.cor}55`,
          }}
        >
          <div
            className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full text-5xl"
            style={{ background: `${winner.cor}22`, border: `1px solid ${winner.cor}66` }}
          >
            {winner.emoji}
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold" style={{ color: winner.cor }}>
            {winner.nome}
          </h2>
          <p className="mt-2 font-serif italic text-lg text-arc-ink/80">
            &ldquo;{winner.frase}&rdquo;
          </p>
          <p className="mt-5 text-arc-muted leading-relaxed">{winner.descricao}</p>

          {/* Desejo / Medo */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="rounded-2xl bg-arc-bg/40 border border-arc-line p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-arc-gold mb-1">
                Seu desejo
              </p>
              <p className="text-sm text-arc-ink/85">{winner.desejo}</p>
            </div>
            <div className="rounded-2xl bg-arc-bg/40 border border-arc-line p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-arc-violet mb-1">
                Seu medo
              </p>
              <p className="text-sm text-arc-ink/85">{winner.medo}</p>
            </div>
          </div>

          {/* Luz e Sombra */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="rounded-2xl bg-arc-bg/40 border border-arc-line p-4">
              <p className="text-sm font-bold text-arc-ink mb-2">☀️ Sua luz</p>
              <ul className="space-y-1.5">
                {winner.forcas.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-arc-muted">
                    <span style={{ color: winner.cor }}>•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-arc-bg/40 border border-arc-line p-4">
              <p className="text-sm font-bold text-arc-ink mb-2">🌑 Sua sombra</p>
              <ul className="space-y-1.5">
                {winner.sombra.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-arc-muted">
                    <span className="text-arc-violet">•</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Composição (top 3) */}
        <div
          className="animate-fade-up mt-5 rounded-3xl border border-arc-line bg-arc-surface/60 p-6"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-sm font-semibold text-arc-ink mb-4">
            Sua composição de arquétipos
          </p>
          <div className="space-y-3">
            {top3.map((r) => (
              <div key={r.archetype.id}>
                <div className="flex justify-between text-sm text-arc-muted mb-1">
                  <span>
                    {r.archetype.emoji} {r.archetype.nome}
                  </span>
                  <span>{r.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-arc-bg/60 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${r.pct}%`, background: r.archetype.cor }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ações */}
        <div className="animate-fade-up mt-5 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "0.3s" }}>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 rounded-full border border-arc-gold/40 px-6 py-3 text-sm font-semibold text-arc-gold hover:bg-arc-gold/10 transition"
          >
            {copied ? "Link copiado! ✅" : "Compartilhar resultado"}
          </button>
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 rounded-full border border-arc-line px-6 py-3 text-sm font-semibold text-arc-muted hover:text-arc-ink hover:border-arc-muted transition"
          >
            Refazer o teste
          </button>
        </div>
      </div>
    </section>
  );
}
