// Perguntas do teste ("as variáveis"). Cada opção soma pontos para um ou mais arquétipos.
// Para editar: mude os textos, adicione perguntas ou ajuste os pontos. O resultado se recalcula.

import type { ArchetypeId } from "./archetypes";

export interface QuizOption {
  text: string;
  /** Pontos que esta resposta dá a cada arquétipo. */
  pontos: Partial<Record<ArchetypeId, number>>;
}

export interface QuizQuestion {
  id: number;
  pergunta: string;
  opcoes: QuizOption[];
}

export const QUIZ: QuizQuestion[] = [
  {
    id: 1,
    pergunta: "O que mais te move no dia a dia?",
    opcoes: [
      { text: "Manter a paz e ver o lado bom das coisas", pontos: { inocente: 2 } },
      { text: "Descobrir e experimentar coisas novas", pontos: { explorador: 2 } },
      { text: "Entender como tudo funciona de verdade", pontos: { sabio: 2 } },
      { text: "Superar desafios e provar do que sou capaz", pontos: { heroi: 2 } },
    ],
  },
  {
    id: 2,
    pergunta: "Em um grupo, você costuma ser a pessoa que...",
    opcoes: [
      { text: "Questiona as regras que não fazem sentido", pontos: { rebelde: 2 } },
      { text: "Enxerga possibilidades que ninguém viu", pontos: { mago: 2 } },
      { text: "Deixa todo mundo à vontade, sem frescura", pontos: { cara_comum: 2 } },
      { text: "Cria conexão e intimidade com as pessoas", pontos: { amante: 2 } },
    ],
  },
  {
    id: 3,
    pergunta: "Seu jeito favorito de estar no mundo é...",
    opcoes: [
      { text: "Rindo, com leveza e vivendo o momento", pontos: { bobo: 2 } },
      { text: "Cuidando de quem eu amo", pontos: { cuidador: 2 } },
      { text: "Criando algo que só existe porque eu fiz", pontos: { criador: 2 } },
      { text: "Organizando o caos e assumindo o controle", pontos: { governante: 2 } },
    ],
  },
  {
    id: 4,
    pergunta: "O que mais te assusta?",
    opcoes: [
      { text: "Fazer algo errado e ser punido por isso", pontos: { inocente: 2 } },
      { text: "Ser fraco ou não dar conta", pontos: { heroi: 2 } },
      { text: "Ser rejeitado ou não pertencer", pontos: { cara_comum: 2 } },
      { text: "Ver quem eu amo sofrer", pontos: { cuidador: 2 } },
    ],
  },
  {
    id: 5,
    pergunta: "Um fim de semana perfeito para você é...",
    opcoes: [
      { text: "Uma viagem sem roteiro, indo aonde der", pontos: { explorador: 2 } },
      { text: "Botar pra fora aquilo que te incomoda e agitar as coisas", pontos: { rebelde: 2 } },
      { text: "Um encontro intenso, boa comida e beleza por perto", pontos: { amante: 2 } },
      { text: "Colocar um projeto criativo de pé", pontos: { criador: 2 } },
    ],
  },
  {
    id: 6,
    pergunta: "As pessoas te procuram quando precisam de...",
    opcoes: [
      { text: "Um conselho lúcido e bem pensado", pontos: { sabio: 2 } },
      { text: "Alguém que faça a coisa impossível acontecer", pontos: { mago: 2 } },
      { text: "Uma boa risada e alívio da tensão", pontos: { bobo: 2 } },
      { text: "Direção, ordem e alguém que assuma a responsabilidade", pontos: { governante: 2 } },
    ],
  },
  {
    id: 7,
    pergunta: "Qual dessas frases combina mais com você?",
    opcoes: [
      { text: "A vida é simples, somos nós que complicamos", pontos: { inocente: 2 } },
      { text: "Se dá pra imaginar, dá pra fazer acontecer", pontos: { mago: 2 } },
      { text: "Sem conexão, nada faz sentido", pontos: { amante: 2 } },
      { text: "Alguém precisa assumir — e esse alguém sou eu", pontos: { governante: 2 } },
    ],
  },
  {
    id: 8,
    pergunta: "O que te deixa realmente satisfeito?",
    opcoes: [
      { text: "Chegar onde ninguém tinha chegado", pontos: { explorador: 2 } },
      { text: "Vencer algo que parecia impossível", pontos: { heroi: 2 } },
      { text: "Ver alguém que cuidei ficar bem", pontos: { cuidador: 2 } },
      { text: "Terminar uma criação exatamente como imaginei", pontos: { criador: 2 } },
    ],
  },
  {
    id: 9,
    pergunta: "O que mais te irrita nas outras pessoas?",
    opcoes: [
      { text: "Falarem sem entender do assunto", pontos: { sabio: 2 } },
      { text: "Aceitarem injustiça calada", pontos: { rebelde: 2 } },
      { text: "Serem arrogantes e se acharem melhores", pontos: { cara_comum: 2 } },
      { text: "Levarem tudo a sério demais", pontos: { bobo: 2 } },
    ],
  },
  {
    id: 10,
    pergunta: "No fundo, o que você mais deseja para a sua vida?",
    opcoes: [
      { text: "Coragem para enfrentar o que vier", pontos: { heroi: 2 } },
      { text: "Transformar a realidade ao meu redor", pontos: { mago: 2 } },
      { text: "Amor e conexões que valham a pena", pontos: { amante: 2 } },
      { text: "Proteger e sustentar quem eu amo", pontos: { cuidador: 2 } },
    ],
  },
];

export const TOTAL_QUESTIONS = QUIZ.length;
