// Lógica pura de pontuação — recebe as respostas do quiz e devolve o ranking de arquétipos.

import { ARCHETYPE_ORDER, type Archetype, type ArchetypeId, getArchetype } from "./archetypes";
import type { QuizOption } from "./quiz";

export interface RankedArchetype {
  archetype: Archetype;
  score: number;
  /** Porcentagem relativa ao maior score (0–100), útil para barras. */
  pct: number;
}

export interface QuizResult {
  winner: Archetype;
  ranking: RankedArchetype[];
}

/**
 * Soma os pontos de todas as opções escolhidas e ranqueia os arquétipos.
 * Empates são resolvidos pela ordem canônica (ARCHETYPE_ORDER), garantindo
 * um vencedor estável e determinístico.
 */
export function computeResult(selecionadas: QuizOption[]): QuizResult {
  const totais = new Map<ArchetypeId, number>();

  for (const opcao of selecionadas) {
    for (const [id, pts] of Object.entries(opcao.pontos)) {
      const key = id as ArchetypeId;
      totais.set(key, (totais.get(key) ?? 0) + (pts ?? 0));
    }
  }

  const maxScore = Math.max(1, ...Array.from(totais.values()));

  const ranking: RankedArchetype[] = ARCHETYPE_ORDER.map((id) => ({
    archetype: getArchetype(id),
    score: totais.get(id) ?? 0,
    pct: Math.round(((totais.get(id) ?? 0) / maxScore) * 100),
  }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      // desempate estável pela ordem canônica
      return ARCHETYPE_ORDER.indexOf(a.archetype.id) - ARCHETYPE_ORDER.indexOf(b.archetype.id);
    });

  return { winner: ranking[0].archetype, ranking };
}
