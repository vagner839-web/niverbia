"use client";

import { useEffect, useMemo, useState } from "react";
import HeroArquetipo from "./HeroArquetipo";
import ArchetypeResult from "./ArchetypeResult";
import EbookOffer from "./EbookOffer";
import { QUIZ, TOTAL_QUESTIONS, type QuizOption } from "@/lib/quiz";
import { computeResult, type QuizResult } from "@/lib/score";
import { getArchetype, isArchetypeId } from "@/lib/archetypes";

type Step = "intro" | "quiz" | "result";

/** Monta um resultado direto a partir de um arquétipo (deep-link ?arquetipo=id). */
function resultFromArchetype(id: string): QuizResult | null {
  if (!isArchetypeId(id)) return null;
  const archetype = getArchetype(id);
  return { winner: archetype, ranking: [{ archetype, score: 1, pct: 100 }] };
}

export default function Quiz() {
  const [step, setStep] = useState<Step>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(QuizOption | null)[]>(
    () => Array(TOTAL_QUESTIONS).fill(null)
  );
  const [result, setResult] = useState<QuizResult | null>(null);

  // Deep-link: abrir direto no resultado compartilhado.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shared = resultFromArchetype(params.get("arquetipo") ?? "");
    if (shared) {
      setResult(shared);
      setStep("result");
    }
  }, []);

  // Rola para o topo a cada troca de etapa/pergunta.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step, current]);

  const progress = useMemo(
    () => Math.round((current / TOTAL_QUESTIONS) * 100),
    [current]
  );

  function start() {
    setAnswers(Array(TOTAL_QUESTIONS).fill(null));
    setResult(null);
    setCurrent(0);
    setStep("quiz");
  }

  function choose(option: QuizOption) {
    const next = [...answers];
    next[current] = option;
    setAnswers(next);

    if (current + 1 < TOTAL_QUESTIONS) {
      setCurrent(current + 1);
    } else {
      setResult(computeResult(next.filter((a): a is QuizOption => a !== null)));
      setStep("result");
    }
  }

  function back() {
    if (current > 0) setCurrent(current - 1);
    else setStep("intro");
  }

  if (step === "intro") {
    return <HeroArquetipo onStart={start} />;
  }

  if (step === "result" && result) {
    return (
      <>
        <ArchetypeResult result={result} onRestart={start} />
        <EbookOffer archetype={result.winner} />
      </>
    );
  }

  // step === "quiz"
  const question = QUIZ[current];
  const selected = answers[current];

  return (
    <section className="min-h-screen px-4 py-12 sm:py-16">
      <div className="max-w-xl mx-auto">
        {/* Barra de progresso */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-arc-muted mb-2">
            <button onClick={back} className="hover:text-arc-ink transition inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar
            </button>
            <span>
              {current + 1} / {TOTAL_QUESTIONS}
            </span>
          </div>
          <div className="h-2 rounded-full bg-arc-surface overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-arc-gold-deep to-arc-gold transition-all duration-300"
              style={{ width: `${Math.max(progress, 6)}%` }}
            />
          </div>
        </div>

        {/* Pergunta */}
        <h2
          key={`q-${question.id}`}
          className="animate-fade-in font-serif text-2xl sm:text-3xl font-bold text-arc-ink text-center mb-8"
        >
          {question.pergunta}
        </h2>

        {/* Opções */}
        <div key={`opts-${question.id}`} className="animate-fade-in flex flex-col gap-3">
          {question.opcoes.map((opcao, i) => {
            const isSelected = selected === opcao;
            return (
              <button
                key={i}
                onClick={() => choose(opcao)}
                className={`group flex items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-200 hover:-translate-y-0.5 ${
                  isSelected
                    ? "border-arc-gold bg-arc-gold/10"
                    : "border-arc-line bg-arc-surface/60 hover:border-arc-gold/50 hover:bg-arc-surface2/60"
                }`}
              >
                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
                    isSelected
                      ? "border-arc-gold bg-arc-gold text-arc-bg"
                      : "border-arc-line text-arc-muted group-hover:border-arc-gold group-hover:text-arc-gold"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-arc-ink/90">{opcao.text}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
