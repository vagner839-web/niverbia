// Event configuration — edit these values to update the site content

export const EVENT_DATE = new Date("2026-07-25T19:00:00-03:00");

// PIX key — paste your PIX key here (phone, CPF, email or random key)
export const PIX_KEY = "";

// WhatsApp que recebe os depoimentos do mural.
// Formato: código do país + DDD + número, SÓ números.
// Exemplo (Brasil, DDD 11): "5511999998888"
export const WHATSAPP_NUMBER = "";

// YouTube video IDs — paste only the ID part from the video URL
// Example: for https://www.youtube.com/watch?v=dQw4w9WgXcQ, use 'dQw4w9WgXcQ'
export const YOUTUBE_VIDEOS = {
  invitation: "", // Vídeo de convite
  location: "",   // Vídeo sobre o local
  giftList: "",   // Vídeo sobre a lista de presentes
};

export const PERSON_NAME = "Bia Brito";
export const EVENT_DATE_DISPLAY = "25 de julho de 2026";
export const EVENT_TIME_DISPLAY = "19h";

// ─────────────────────────────────────────────────────────────
// Mural de Agradecimentos 💝
// A cada PIX recebido, adicione uma pessoa aqui. O mural mostra
// os presentes já feitos e inspira quem ainda vai contribuir.
//   name    → nome de quem presenteou
//   amount  → valor em reais (número). Deixe como 0 para ocultar o valor
//   message → recado curto e carinhoso (opcional)
// Basta editar esta lista e o site atualiza sozinho.
// ─────────────────────────────────────────────────────────────
export interface Contribution {
  name: string;
  amount: number;
  message?: string;
}

export const THANK_YOU_WALL: Contribution[] = [
  // Exemplos — troque pelos PIX reais assim que chegarem:
  { name: "Tia Cláudia", amount: 200, message: "Com todo carinho, aproveite muito!" },
  { name: "Marcos & Fernanda", amount: 150, message: "Feliz aniversário, linda! 💕" },
  { name: "Vovó Lúcia", amount: 300, message: "Que Deus te abençoe sempre." },
  { name: "Rafael", amount: 100, message: "Um presentinho pra sua festa!" },
  { name: "Amiga secreta", amount: 250, message: "Você merece o mundo. 🌸" },
];
