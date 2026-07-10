import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta do produto de arquétipo — premium, sóbria, "psicológica".
        "arc-bg": "#100C1F", // fundo (índigo quase preto)
        "arc-surface": "#1A1533", // cartões
        "arc-surface2": "#241E45", // elevado
        "arc-gold": "#E8C37E", // acento principal (CTAs, destaques)
        "arc-gold-deep": "#C9A24B",
        "arc-violet": "#8B7BE8", // acento secundário
        "arc-ink": "#F4F1FF", // texto principal
        "arc-muted": "#A79FC7", // texto secundário
        "arc-line": "#332B57", // bordas
      },
      fontFamily: {
        script: ["Great Vibes", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        serif: ["Cormorant Garamond", "serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 8px 2px rgba(232,195,126,0.12)" },
          "50%": { boxShadow: "0 0 22px 6px rgba(232,195,126,0.30)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulse2: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite",
        glow: "glow 2.4s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        pulse2: "pulse2 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
