/**
 * CONFIGURAÇÃO CENTRAL DO PRODUTO — fonte única de verdade.
 * ---------------------------------------------------------
 * Edite ESTE arquivo para atualizar marca, textos do funil, preço, chave PIX,
 * prazo da oferta e o checkout. Tudo no site lê daqui.
 *
 * ⚠️ ANTES DE PUBLICAR, preencha os campos marcados com TODO.
 */

export const BRAND = {
  /** Nome / marca do site. */
  name: "Descubra Seu Arquétipo",
  /** Subtítulo curto usado em SEO. */
  tagline: "Descubra qual dos 12 arquétipos governa a sua personalidade.",
  /** URL final do site (canonical / OpenGraph). Troque pelo seu domínio. */
  siteUrl: "https://descubraseuarquetipo.vercel.app",
  lang: "pt-BR",
};

/** Textos da abertura (Hero / etapa "início"). */
export const HERO = {
  eyebrow: "Teste de personalidade · 100% gratuito",
  titulo: "Descubra o seu Arquétipo de Personalidade",
  subtitulo:
    "São 12 forças que moldam quem somos. Em menos de 2 minutos, descubra qual delas comanda a sua vida — e o que fazer com isso.",
  bullets: [
    "10 perguntas rápidas",
    "Resultado na hora",
    "Sem cadastro para ver o resultado",
  ],
  cta: "Começar o teste",
};

/** O ebook vendido no final (etapa "fim"). */
export const EBOOK = {
  nome: "Dominando o Seu Arquétipo",
  subtitulo:
    "O guia prático para transformar a sua força dominante em vantagem — e desarmar a sombra que te sabota.",
  /** Preço cheio (mostrado riscado). Deixe "" para esconder. */
  precoDe: "R$ 97",
  /** Preço da oferta atual. */
  precoPor: "R$ 27",
  /** Forma de pagamento em destaque no botão principal. */
  beneficios: [
    "Mapa completo dos 12 arquétipos e como eles interagem",
    "Como reconhecer e desarmar a 'sombra' do seu arquétipo",
    "Exercícios práticos para usar a sua força a favor (não contra) você",
    "Como o seu arquétipo aparece em relações, trabalho e dinheiro",
    "Acesso imediato e vitalício, em PDF, para ler onde quiser",
  ],
  garantia:
    "Garantia incondicional de 7 dias: se não fizer sentido para você, devolvemos 100% do valor, sem perguntas.",
  faq: [
    {
      q: "Como recebo o ebook depois de pagar?",
      // TODO: ajuste conforme a sua entrega (link automático, e-mail, plataforma).
      a: "Após a confirmação do pagamento, você recebe o link de download por e-mail/WhatsApp. O acesso é imediato e vitalício.",
    },
    {
      q: "Preciso ter feito o teste para aproveitar?",
      a: "Não. O teste ajuda a personalizar, mas o ebook cobre os 12 arquétipos — serve para qualquer resultado.",
    },
    {
      q: "É baseado em quê?",
      a: "Nos 12 arquétipos de personalidade de raiz junguiana, adaptados para autoconhecimento prático no dia a dia.",
    },
  ],
};

/**
 * Checkout por link externo (cartão / plataforma tipo Hotmart, Kiwify...).
 * Deixe "" para usar SOMENTE o PIX abaixo.
 */
export const CHECKOUT_URL = ""; // TODO: cole aqui o link de checkout, se houver.

/**
 * Pagamento via PIX (alternativa ou principal).
 * ⚠️ Troque pela SUA chave — o valor atual é apenas um placeholder.
 */
export const PIX = {
  ativo: true,
  key: "", // TODO: sua chave PIX (só números para CPF/telefone, ou e-mail/aleatória).
  keyType: "", // ex.: "CPF", "E-mail", "Telefone", "Aleatória"
  keyDisplay: "", // como aparece na tela (ex.: "081.307.675-70")
  name: "", // TODO: nome do titular da conta.
};

/**
 * Prazo da oferta (contagem regressiva de urgência).
 * Ajuste a data. Use uma data futura para a contagem aparecer.
 */
export const OFFER_DEADLINE = new Date("2026-07-31T23:59:59-03:00");
