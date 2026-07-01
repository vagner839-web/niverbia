"use client";

import { useState } from "react";
import { PIX_KEY } from "@/lib/constants";

function PixCard() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    if (!PIX_KEY) return;
    navigator.clipboard.writeText(PIX_KEY).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <div className="bg-gradient-to-br from-bia-blush via-white to-bia-rose/10 rounded-3xl p-8 sm:p-10 shadow-inner border border-bia-rose/20 max-w-md mx-auto">
      <div className="flex flex-col items-center gap-5">
        {/* PIX icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-bia-fuchsia to-bia-rose flex items-center justify-center shadow-lg shadow-bia-rose/30">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.164 3.793a1.17 1.17 0 0 1 1.672 0l2.176 2.176a.5.5 0 0 0 .354.147h1.695c.653 0 1.183.53 1.183 1.183v1.695a.5.5 0 0 0 .147.354l2.176 2.176a1.17 1.17 0 0 1 0 1.672l-2.176 2.176a.5.5 0 0 0-.147.354v1.695c0 .653-.53 1.183-1.183 1.183h-1.695a.5.5 0 0 0-.354.147l-2.176 2.176a1.17 1.17 0 0 1-1.672 0l-2.176-2.176a.5.5 0 0 0-.354-.147H6.939a1.183 1.183 0 0 1-1.183-1.183v-1.695a.5.5 0 0 0-.147-.354L3.433 12.836a1.17 1.17 0 0 1 0-1.672l2.176-2.176a.5.5 0 0 0 .147-.354V6.939c0-.653.53-1.183 1.183-1.183h1.695a.5.5 0 0 0 .354-.147l2.176-2.176z" />
          </svg>
        </div>

        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-bia-deep/40 mb-1">
            Chave PIX
          </p>
          {PIX_KEY ? (
            <p className="font-mono text-xl font-semibold text-bia-deep break-all">
              {PIX_KEY}
            </p>
          ) : (
            <p className="font-mono text-base text-bia-deep/30 italic">
              Chave em breve
            </p>
          )}
        </div>

        {PIX_KEY && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-gradient-to-r from-bia-fuchsia to-bia-rose text-white font-semibold px-6 py-3 rounded-full shadow-md shadow-bia-rose/30 hover:shadow-bia-rose/50 hover:scale-105 active:scale-95 transition-all duration-200 text-sm"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Copiado!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copiar chave
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default function GiftSection() {
  return (
    <section id="presentes" className="scroll-mt-8 py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-bia-blush/20">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px bg-bia-rose/30" />
            <span className="text-2xl">🎁</span>
            <div className="flex-1 h-px bg-bia-rose/30" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-bia-deep text-center">
            Presentes
          </h2>
        </div>

        {/* Elegant text */}
        <div className="mb-12 text-center">
          <div className="relative inline-block">
            <div className="absolute -top-4 -left-4 text-4xl text-bia-rose/20 font-dancing select-none">&ldquo;</div>
            <p className="text-bia-deep/70 text-lg sm:text-xl leading-relaxed font-light max-w-2xl mx-auto px-6 italic">
              Sua presença já é o maior presente que eu poderia receber.
              Mas se o seu coração quiser me presentear, aceito com muito carinho
              um presente especial, uma contribuição via PIX, ou as duas coisas juntas
              — cada gesto de amor será guardado com enorme gratidão.
            </p>
            <div className="absolute -bottom-4 -right-4 text-4xl text-bia-rose/20 font-dancing select-none">&rdquo;</div>
          </div>
        </div>

        {/* Options display */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-bia-deep/50 text-sm font-medium">
          <div className="flex items-center gap-2 bg-white/60 border border-bia-blush rounded-full px-4 py-2">
            <span>🎀</span> Presentinho especial
          </div>
          <div className="text-bia-rose font-bold text-lg">ou</div>
          <div className="flex items-center gap-2 bg-white/60 border border-bia-blush rounded-full px-4 py-2">
            <span>💸</span> Contribuição via PIX
          </div>
          <div className="text-bia-rose font-bold text-lg">ou</div>
          <div className="flex items-center gap-2 bg-white/60 border border-bia-blush rounded-full px-4 py-2">
            <span>✨</span> Os dois juntos!
          </div>
        </div>

        {/* PIX Card */}
        <PixCard />
      </div>
    </section>
  );
}
