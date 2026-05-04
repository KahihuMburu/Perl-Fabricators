import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A66C2",
        slate: {
          950: "#0A0F1C",
          900: "#0F172A",
          800: "#1E2937",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgb(10 102 194 / 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;