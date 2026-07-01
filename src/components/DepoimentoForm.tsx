"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER, PERSON_NAME } from "@/lib/constants";

export default function DepoimentoForm() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [sent, setSent] = useState(false);

  const numberSet = WHATSAPP_NUMBER.trim().length > 0;
  const canSend = numberSet && nome.trim().length > 0 && mensagem.trim().length > 0;

  function handleSend() {
    if (!canSend) return;

    const linhas = [
      `💝 Depoimento para o aniversário da ${PERSON_NAME}`,
      "",
      `De: ${nome.trim()}`,
    ];
    if (valor.trim()) linhas.push(`Contribuição via PIX: R$ ${valor.trim()}`);
    linhas.push("", `Mensagem:`, mensagem.trim());

    const texto = encodeURIComponent(linhas.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER.trim()}?text=${texto}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const inputClass =
    "w-full rounded-xl border border-bia-blush bg-white/80 px-4 py-3 text-bia-deep placeholder:text-bia-deep/30 outline-none transition focus:border-bia-rose focus:ring-2 focus:ring-bia-rose/20";

  return (
    <div
      id="depoimento"
      className="scroll-mt-8 mt-16 max-w-xl mx-auto bg-gradient-to-br from-white via-bia-light to-bia-blush/30 rounded-3xl p-7 sm:p-9 shadow-lg border border-bia-rose/20"
    >
      <div className="flex flex-col items-center text-center gap-2 mb-7">
        <span className="text-3xl">💌</span>
        <h3 className="text-2xl font-bold text-bia-deep">Deixe seu depoimento</h3>
        <p className="text-bia-deep/60 text-sm leading-relaxed max-w-sm">
          Já fez o seu PIX? Escreva uma mensagem de carinho para a {PERSON_NAME}.
          Suas palavras vão ficar guardadas no mural — um presente que dura para
          sempre. 🥰
        </p>
      </div>

      {sent ? (
        <div className="flex flex-col items-center gap-3 text-center py-6 animate-fade-up">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-bia-fuchsia to-bia-rose flex items-center justify-center shadow-lg shadow-bia-rose/30">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-bia-deep font-semibold text-lg">Obrigada de coração! 💕</p>
          <p className="text-bia-deep/60 text-sm max-w-xs">
            Seu depoimento foi aberto no WhatsApp. É só tocar em enviar para ele
            entrar no mural com todo o carinho.
          </p>
          <button
            onClick={() => {
              setSent(false);
              setNome("");
              setValor("");
              setMensagem("");
            }}
            className="mt-2 text-bia-rose font-medium text-sm underline underline-offset-4 hover:text-bia-fuchsia transition"
          >
            Escrever outro depoimento
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-bia-deep/40 mb-1.5">
              Seu nome
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Como você quer aparecer no mural"
              className={inputClass}
              maxLength={60}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-bia-deep/40 mb-1.5">
              Valor do PIX <span className="normal-case font-normal text-bia-deep/30">(opcional)</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-bia-deep/40 font-medium">R$</span>
              <input
                type="text"
                inputMode="decimal"
                value={valor}
                onChange={(e) => setValor(e.target.value.replace(/[^0-9.,]/g, ""))}
                placeholder="100"
                className={`${inputClass} pl-11`}
                maxLength={10}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-bia-deep/40 mb-1.5">
              Sua mensagem
            </label>
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Escreva com o coração..."
              rows={4}
              className={`${inputClass} resize-none`}
              maxLength={280}
            />
            <p className="text-right text-xs text-bia-deep/30 mt-1">{mensagem.length}/280</p>
          </div>

          <button
            onClick={handleSend}
            disabled={!canSend}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-bia-fuchsia to-bia-rose text-white font-semibold px-6 py-3.5 rounded-full shadow-md shadow-bia-rose/30 transition-all duration-200 enabled:hover:shadow-bia-rose/50 enabled:hover:scale-[1.02] enabled:active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.588-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Enviar depoimento no WhatsApp
          </button>

          {!numberSet && (
            <p className="text-center text-xs text-bia-deep/40">
              O envio será ativado assim que o número de WhatsApp for configurado.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
