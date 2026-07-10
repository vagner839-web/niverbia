// Os 12 arquétipos de personalidade (base junguiana), em pt-BR.
// Edite textos, forças, sombra e o "ângulo do ebook" à vontade — o site lê tudo daqui.

export type ArchetypeId =
  | "inocente"
  | "explorador"
  | "sabio"
  | "heroi"
  | "rebelde"
  | "mago"
  | "cara_comum"
  | "amante"
  | "bobo"
  | "cuidador"
  | "criador"
  | "governante";

export interface Archetype {
  id: ArchetypeId;
  nome: string;
  /** Lema / frase de efeito do arquétipo. */
  frase: string;
  emoji: string;
  /** Cor de destaque (hex) usada no cartão de resultado. */
  cor: string;
  /** Essência em 2–3 frases. */
  descricao: string;
  desejo: string;
  medo: string;
  /** Pontos fortes (a "luz" do arquétipo). */
  forcas: string[];
  /** A "sombra" — o que sabota esse arquétipo quando ele age no automático. */
  sombra: string[];
  /** Gancho de venda: como o ebook ajuda ESTE arquétipo a se dominar. */
  anguloEbook: string;
}

export const ARCHETYPES: Record<ArchetypeId, Archetype> = {
  inocente: {
    id: "inocente",
    nome: "O Inocente",
    frase: "O paraíso é aqui, se você escolher enxergá-lo.",
    emoji: "🕊️",
    cor: "#7FB2E8",
    descricao:
      "Você acredita nas pessoas e no lado bom da vida. Otimismo é sua força de gravidade: onde há caos, você procura a saída simples e honesta.",
    desejo: "Viver em paz, com leveza e sem culpa.",
    medo: "Fazer algo errado e ser punido por isso.",
    forcas: ["Otimismo genuíno", "Fé e esperança", "Simplicidade", "Confiança que contagia"],
    sombra: ["Negação de problemas reais", "Ingenuidade que vira dependência", "Fugir do desconforto"],
    anguloEbook:
      "O ebook mostra como manter sua leveza sem virar ingenuidade — enxergar a realidade de frente e, ainda assim, escolher a esperança de forma madura.",
  },
  explorador: {
    id: "explorador",
    nome: "O Explorador",
    frase: "Não construa gaiolas. A estrada é minha casa.",
    emoji: "🧭",
    cor: "#4FB98A",
    descricao:
      "Você precisa de espaço para respirar. A rotina te sufoca e o novo te chama. Sua vida é uma busca por autenticidade e liberdade.",
    desejo: "Liberdade para descobrir quem você é.",
    medo: "Ficar preso, entediado ou por dentro de uma vida vazia.",
    forcas: ["Autonomia", "Coragem para recomeçar", "Curiosidade sem fim", "Autenticidade"],
    sombra: ["Fuga disfarçada de aventura", "Dificuldade de comprometer", "Nunca sentir que chegou"],
    anguloEbook:
      "O ebook te ajuda a transformar a inquietação em direção — explorar com propósito, sem trocar toda relação e projeto pela próxima novidade.",
  },
  sabio: {
    id: "sabio",
    nome: "O Sábio",
    frase: "A verdade vai te libertar.",
    emoji: "🦉",
    cor: "#6C8CE0",
    descricao:
      "Você quer entender. Antes de agir, precisa compreender como as coisas funcionam. Conhecimento é o seu chão firme.",
    desejo: "Encontrar a verdade e compreender o mundo.",
    medo: "Ser enganado, ignorante ou tomar decisões por impulso.",
    forcas: ["Clareza mental", "Análise profunda", "Sede de aprender", "Objetividade"],
    sombra: ["Paralisia por análise", "Distância emocional", "Estudar para nunca agir"],
    anguloEbook:
      "O ebook mostra como sair da eterna análise e converter conhecimento em decisão — pensar continua sendo sua força, mas sem virar desculpa para não viver.",
  },
  heroi: {
    id: "heroi",
    nome: "O Herói",
    frase: "Onde há vontade, há um caminho.",
    emoji: "🛡️",
    cor: "#E0685B",
    descricao:
      "Você foi feito para superar. Desafios te despertam e você quer provar seu valor com coragem, disciplina e resultado.",
    desejo: "Provar seu valor através de conquistas corajosas.",
    medo: "Fraqueza, vulnerabilidade e ser 'covarde'.",
    forcas: ["Coragem", "Disciplina", "Determinação", "Protege quem ama"],
    sombra: ["Arrogância", "Ver tudo como batalha", "Esgotar-se para provar algo"],
    anguloEbook:
      "O ebook te ensina a escolher as batalhas certas — vencer sem se destruir no processo e sem confundir seu valor com sua próxima conquista.",
  },
  rebelde: {
    id: "rebelde",
    nome: "O Fora-da-Lei",
    frase: "Regras existem para serem quebradas.",
    emoji: "🔥",
    cor: "#C0506E",
    descricao:
      "Você enxerga o que está errado e não aceita fingir que está tudo bem. Rompe com o que não faz sentido — mesmo que incomode.",
    desejo: "Revolução, mudar o que está quebrado.",
    medo: "Ser impotente, comum ou 'engolido' pelo sistema.",
    forcas: ["Coragem de romper", "Autenticidade radical", "Enxerga a hipocrisia", "Provoca mudança"],
    sombra: ["Destruir sem construir", "Rebeldia por rebeldia", "Autossabotagem"],
    anguloEbook:
      "O ebook te mostra como canalizar sua revolta em transformação real — quebrar o que precisa mudar sem quebrar também as pontes que importam.",
  },
  mago: {
    id: "mago",
    nome: "O Mago",
    frase: "Eu faço as coisas acontecerem.",
    emoji: "🔮",
    cor: "#9B6BE0",
    descricao:
      "Você acredita que a realidade pode ser transformada. Enxerga conexões que os outros não veem e transforma visão em realidade.",
    desejo: "Compreender as leis do universo e transformar a realidade.",
    medo: "Consequências negativas e imprevistas dos seus atos.",
    forcas: ["Visão", "Poder de transformar", "Intuição", "Inspira os outros"],
    sombra: ["Manipulação", "Prometer o que não entrega", "Ilusão de controle"],
    anguloEbook:
      "O ebook te ajuda a aterrissar sua visão — transformar ideias poderosas em resultados concretos sem se perder na fantasia ou na manipulação.",
  },
  cara_comum: {
    id: "cara_comum",
    nome: "O Cara-Comum",
    frase: "Todos somos iguais, no fim das contas.",
    emoji: "🤝",
    cor: "#D9A05B",
    descricao:
      "Você é o chão de todo grupo: real, acessível e sem frescura. As pessoas confiam em você porque você não finge ser quem não é.",
    desejo: "Pertencer e se conectar com os outros.",
    medo: "Se destacar de um jeito ruim, ser excluído ou rejeitado.",
    forcas: ["Empatia", "Pés no chão", "Confiabilidade", "Faz todos se sentirem à vontade"],
    sombra: ["Se apagar para se encaixar", "Medo de brilhar", "Ceder demais"],
    anguloEbook:
      "O ebook te mostra como pertencer sem se anular — manter sua humildade e, ao mesmo tempo, ocupar o seu espaço sem pedir desculpas.",
  },
  amante: {
    id: "amante",
    nome: "O Amante",
    frase: "Você é a única coisa que importa.",
    emoji: "💗",
    cor: "#E86FA0",
    descricao:
      "Você vive pela conexão, pela beleza e pela intensidade. Relações e experiências que tocam o coração são o seu combustível.",
    desejo: "Intimidade, beleza e conexões que valham a pena.",
    medo: "Ser indesejado, sozinho ou invisível.",
    forcas: ["Paixão", "Presença", "Sensibilidade estética", "Faz o outro se sentir especial"],
    sombra: ["Dependência afetiva", "Perder-se no outro", "Ciúmes e carência"],
    anguloEbook:
      "O ebook te ajuda a amar de forma inteira sem se perder — cultivar conexões intensas mantendo sua própria identidade de pé.",
  },
  bobo: {
    id: "bobo",
    nome: "O Bobo da Corte",
    frase: "Se eu não posso dançar, não quero fazer parte.",
    emoji: "🎭",
    cor: "#F0B54D",
    descricao:
      "Você traz leveza para onde chega. Vive o presente, ri de si mesmo e enxerga a verdade através do humor.",
    desejo: "Viver o momento com alegria e leveza.",
    medo: "Tédio, peso e ser 'chato' ou apagado.",
    forcas: ["Bom humor", "Espontaneidade", "Alivia tensões", "Enxerga a verdade com leveza"],
    sombra: ["Fugir do sério com piada", "Irresponsabilidade", "Evitar emoções difíceis"],
    anguloEbook:
      "O ebook te mostra como manter a leveza sem fugir do que é importante — usar seu humor como ponte, não como escudo.",
  },
  cuidador: {
    id: "cuidador",
    nome: "O Cuidador",
    frase: "Ama teu próximo como a ti mesmo.",
    emoji: "🌿",
    cor: "#59C2B8",
    descricao:
      "Você sente o que o outro precisa antes mesmo dele pedir. Cuidar é a sua linguagem de amor e a sua vocação.",
    desejo: "Proteger e cuidar dos outros.",
    medo: "Egoísmo, ingratidão e ver quem ama sofrer.",
    forcas: ["Generosidade", "Compaixão", "Proteção", "Presença nos momentos difíceis"],
    sombra: ["Anular-se pelo outro", "Sobrecarga e esgotamento", "Cuidar para ser aceito"],
    anguloEbook:
      "O ebook te ensina a cuidar sem se esgotar — colocar limites saudáveis e se incluir na lista de pessoas que você protege.",
  },
  criador: {
    id: "criador",
    nome: "O Criador",
    frase: "Se dá para imaginar, dá para criar.",
    emoji: "🎨",
    cor: "#E8894B",
    descricao:
      "Você precisa dar forma ao que existe dentro de você. Criar é como você deixa sua marca e dá sentido ao mundo.",
    desejo: "Criar algo de valor duradouro e original.",
    medo: "Mediocridade, visão ou execução medíocres.",
    forcas: ["Imaginação", "Originalidade", "Expressão", "Enxerga possibilidades"],
    sombra: ["Perfeccionismo paralisante", "Nunca terminar", "Autoexigência cruel"],
    anguloEbook:
      "O ebook te ajuda a domar o perfeccionismo e finalmente concluir — criar com liberdade e entregar ao mundo o que hoje mora só na sua cabeça.",
  },
  governante: {
    id: "governante",
    nome: "O Governante",
    frase: "O poder não é tudo. É a única coisa.",
    emoji: "👑",
    cor: "#C9A24B",
    descricao:
      "Você assume a responsabilidade que os outros evitam. Organiza o caos, lidera e cria estrutura onde havia bagunça.",
    desejo: "Controle, ordem e prosperidade duradoura.",
    medo: "Caos, ser destronado ou perder o controle.",
    forcas: ["Liderança", "Responsabilidade", "Visão de longo prazo", "Cria ordem e segurança"],
    sombra: ["Autoritarismo", "Controle excessivo", "Dificuldade de delegar e confiar"],
    anguloEbook:
      "O ebook te mostra como liderar sem controlar tudo — construir ordem e prosperidade delegando com confiança em vez de carregar o mundo sozinho.",
  },
};

/** Lista na ordem canônica (usada também como desempate estável no score). */
export const ARCHETYPE_ORDER: ArchetypeId[] = [
  "heroi",
  "criador",
  "cuidador",
  "governante",
  "mago",
  "sabio",
  "explorador",
  "amante",
  "rebelde",
  "bobo",
  "cara_comum",
  "inocente",
];

export function getArchetype(id: ArchetypeId): Archetype {
  return ARCHETYPES[id];
}

export function isArchetypeId(value: string | null | undefined): value is ArchetypeId {
  return !!value && value in ARCHETYPES;
}
