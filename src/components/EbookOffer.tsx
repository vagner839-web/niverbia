"use client";

import { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { EBOOK, PIX, CHECKOUT_URL } from "@/lib/product";
import type { Archetype } from "@/lib/archetypes";

/** Card de PIX com copiar-e-colar da chave (padrão reaproveitado do site original). */
function PixCard() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    if (!PIX.key) return;
    navigator.clipboard.writeText(PIX.key).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <div className="rounded-3xl bg-arc-bg/50 border border-arc-gold/20 p-6 sm:p-8">
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-arc-gold-deep to-arc-gold flex items-center justify-center shadow-lg shadow-arc-gold/20">
          <svg className="w-7 h-7 text-arc-bg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.164 3.793a1.17 1.17 0 0 1 1.672 0l2.176 2.176a.5.5 0 0 0 .354.147h1.695c.653 0 1.183.53 1.183 1.183v1.695a.5.5 0 0 0 .147.354l2.176 2.176a1.17 1.17 0 0 1 0 1.672l-2.176 2.176a.5.5 0 0 0-.147.354v1.695c0 .653-.53 1.183-1.183 1.183h-1.695a.5.5 0 0 0-.354.147l-2.176 2.176a1.17 1.17 0 0 1-1.672 0l-2.176-2.176a.5.5 0 0 0-.354-.147H6.939a1.183 1.183 0 0 1-1.183-1.183v-1.695a.5.5 0 0 0-.147-.354L3.433 12.836a1.17 1.17 0 0 1 0-1.672l2.176-2.176a.5.5 0 0 0 .147-.354V6.939c0-.653.53-1.183 1.183-1.183h1.695a.5.5 0 0 0 .354-.147l2.176-2.176z" />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-arc-muted mb-1">
            Pague com PIX {PIX.key && PIX.keyType ? `· ${PIX.keyType}` : ""}
          </p>
          {PIX.key ? (
            <>
              <p className="font-mono text-lg font-semibold text-arc-ink break-all">
                {PIX.keyDisplay || PIX.key}
              </p>
              {PIX.name && (
                <p className="mt-1 text-sm text-arc-muted">{PIX.name}</p>
              )}
            </>
          ) : (
            <p className="font-mono text-sm text-arc-muted/50 italic">
              Chave PIX em breve
            </p>
          )}
        </div>
        {PIX.key && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 rounded-full border border-arc-gold/40 px-6 py-3 text-sm font-semibold text-arc-gold hover:bg-arc-gold/10 transition"
          >
            {copied ? "Chave copiada! ✅" : "Copiar chave PIX"}
          </button>
        )}
      </div>
    </div>
  );
}

/** Etapa "fim" (parte 2): a oferta do ebook, personalizada pelo arquétipo. */
export default function EbookOffer({ archetype }: { archetype: Archetype }) {
  return (
    <section className="px-4 pb-20 pt-4">
      <div className="max-w-2xl mx-auto">
        {/* Ponte personalizada */}
        <div className="rounded-3xl border border-arc-gold/25 bg-gradient-to-b from-arc-surface2/60 to-arc-surface/60 p-8 sm:p-10 shadow-2xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-arc-gold/15 border border-arc-gold/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-arc-gold">
              O próximo passo do {archetype.nome} {archetype.emoji}
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-arc-ink">
              Descobrir foi só o começo.
            </h2>
            <p className="mt-3 text-arc-muted leading-relaxed">
              {archetype.anguloEbook}
            </p>
          </div>

          {/* Ebook */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
            <div
              className="flex-shrink-0 flex h-40 w-32 items-center justify-center rounded-lg text-5xl shadow-xl"
              style={{
                background: "linear-gradient(135deg, #241E45, #100C1F)",
                border: "1px solid #E8C37E44",
                boxShadow: "0 16px 40px -12px rgba(232,195,126,0.35)",
              }}
            >
              📖
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-serif text-2xl font-bold text-gold">{EBOOK.nome}</h3>
              <p className="mt-1 text-sm text-arc-muted">{EBOOK.subtitulo}</p>
            </div>
          </div>

          {/* Benefícios */}
          <ul className="mt-6 space-y-2.5">
            {EBOOK.beneficios.map((b) => (
              <li key={b} className="flex gap-3 text-sm text-arc-ink/85">
                <svg className="w-5 h-5 flex-shrink-0 text-arc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {b}
              </li>
            ))}
          </ul>

          {/* Preço */}
          <div className="mt-8 text-center">
            <div className="flex items-baseline justify-center gap-3">
              {EBOOK.precoDe && (
                <span className="text-lg text-arc-muted line-through">{EBOOK.precoDe}</span>
              )}
              <span className="font-serif text-5xl font-bold text-gold">{EBOOK.precoPor}</span>
            </div>
            <p className="mt-1 text-xs text-arc-muted">pagamento único · acesso vitalício</p>
          </div>

          {/* Urgência */}
          <div className="mt-7">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-arc-gold mb-3">
              A oferta termina em
            </p>
            <CountdownTimer />
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center gap-3">
            {CHECKOUT_URL ? (
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-arc-gold-deep to-arc-gold px-10 py-4 text-lg font-bold text-arc-bg shadow-lg shadow-arc-gold/25 hover:scale-[1.03] active:scale-95 transition-all"
              >
                Quero o ebook agora
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </a>
            ) : (
              <p className="text-center text-sm text-arc-muted">
                Garanta o seu pelo PIX abaixo 👇
              </p>
            )}
          </div>

          {/* PIX */}
          <div className="mt-6">
            <PixCard />
          </div>

          {/* Garantia */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-arc-bg/40 border border-arc-line p-4">
            <span className="text-2xl">🛡️</span>
            <p className="text-sm text-arc-muted">{EBOOK.garantia}</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-8">
          <h3 className="text-center font-serif text-2xl font-bold text-arc-ink mb-5">
            Perguntas frequentes
          </h3>
          <div className="space-y-3">
            {EBOOK.faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-arc-line bg-arc-surface/60 p-5 [&_summary]:cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-arc-ink list-none">
                  {item.q}
                  <span className="text-arc-gold transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-arc-muted leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
