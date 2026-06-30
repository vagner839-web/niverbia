import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bia-light": "#FFF1F2",
        "bia-blush": "#FECDD3",
        "bia-rose": "#FF6B9D",
        "bia-fuchsia": "#D946EF",
        "bia-deep": "#9D174D",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
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
          "0%, 100%": { boxShadow: "0 0 8px 2px rgba(217,70,239,0.15)" },
          "50%": { boxShadow: "0 0 22px 6px rgba(217,70,239,0.35)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        glow: "glow 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        pulse2: "pulse2 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
