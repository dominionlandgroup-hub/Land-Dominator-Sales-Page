import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple:  "#5C2977",
          purpleLight: "#7B3FA0",
          purpleDark: "#3d1a50",
          gold:    "#A07520",
          goldLight: "#D5A940",
          goldDark: "#7A5818",
          ink:     "#0a0510",
          inkLight:"#150a25",
          inkMid:  "#1e1030",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0a0510 0%, #1a0d2e 50%, #0f0820 100%)",
        "purple-glow":
          "radial-gradient(ellipse at center, #5C2977 0%, transparent 70%)",
        "gold-gradient":
          "linear-gradient(135deg, #D5A940 0%, #e8c06a 100%)",
        "card-gradient":
          "linear-gradient(135deg, #1e1030 0%, #150a25 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
