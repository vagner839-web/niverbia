import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bia-light": "#FBF6F1",   // creme (papel)
        "bia-blush": "#F4D6DD",   // rosa suave
        "bia-rose": "#DC7C92",    // rosê principal
        "bia-fuchsia": "#C75E79", // rosê profundo
        "bia-deep": "#A8425A",    // rosê escuro (textos)
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
          "0%, 100%": { boxShadow: "0 0 8px 2px rgba(220,124,146,0.12)" },
          "50%": { boxShadow: "0 0 20px 5px rgba(220,124,146,0.28)" },
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
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite",
        glow: "glow 2.4s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        pulse2: "pulse2 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
