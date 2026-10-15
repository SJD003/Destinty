import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        destinty: { bg: "#070A12", card: "#0F1424", border: "#1E2A4A", accent: "#3B82F6", glow: "#00D9FF" }
      },
      animation: { 'pulse-glow': 'pulseGlow 3s ease-in-out infinite' },
      keyframes: { pulseGlow: { '0%,100%': { boxShadow: '0 0 20px rgba(0,217,255,0.3)' }, '50%': { boxShadow: '0 0 40px rgba(0,217,255,0.6)' } } }
    }
  },
  plugins: [],
};
export default config;
