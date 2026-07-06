// Event configuration — edit these values to update the site content

export const EVENT_DATE = new Date("2026-07-25T19:00:00-03:00");

// PIX — chave (CPF), tipo e titular
export const PIX_KEY = "08130767570"; // valor copiado (só números, mais compatível)
export const PIX_KEY_TYPE = "CPF";
export const PIX_KEY_DISPLAY = "081.307.675-70"; // como aparece na tela
export const PIX_NAME = "Beatriz Barbosa Brito";

export const PERSON_NAME = "Beatriz";
export const EVENT_AGE = "15";
export const EVENT_DATE_DISPLAY = "25/07/2026";
export const EVENT_TIME_DISPLAY = "19:00";

// Local do evento
export const EVENT_LOCATION = {
  lines: [
    "Estrada do Coco,",
    "Condomínio Jardim dos Pássaros,",
    "Casa 7, Lote 13",
  ],
  reference: "Ao lado do Assaí",
  // Link do Google Maps (opcional) — cole aqui para ativar o botão "Ver no mapa"
  mapsUrl: "",
};

// ─────────────────────────────────────────────────────────────
// Lista de Presentes 🎁
// Organize por categoria. Para cada item:
//   icon   → emoji do item
//   name   → nome do presente
//   detail → descrição/tamanho (opcional)
//   brand  → marca/loja (opcional)
// Adicione ou remova itens à vontade — o site atualiza sozinho.
// ─────────────────────────────────────────────────────────────
export interface GiftItem {
  icon: string;
  name: string;
  detail?: string;
  brand?: string;
}

export interface GiftCategory {
  icon: string;
  title: string;
  items: GiftItem[];
}

export const GIFT_LIST: GiftCategory[] = [
  {
    icon: "🎀",
    title: "Perfumaria & Cuidados Pessoais",
    items: [
      {
        icon: "🌸",
        name: "Kit Natura Tododia Flores",
        detail:
          "Creme Corporal Nutritivo 400 ml + Body Splash Flor de Pêssego e Jasmim 200 ml",
      },
      {
        icon: "🍇",
        name: "Body Splash Natura Tododia Amora Vermelha e Jabuticaba",
        detail: "200 ml",
      },
      {
        icon: "🌷",
        name: "Perfume Natura Una Blush",
      },
      {
        icon: "💜",
        name: "Body Splash Nativa SPA Orquídea Noire",
        brand: "O Boticário",
      },
      {
        icon: "💖",
        name: "Body Splash Cuide-se Bem Beijinho",
        brand: "O Boticário",
      },
    ],
  },
];

