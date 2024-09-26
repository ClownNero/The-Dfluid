import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 폰트 Exo2
        exo2: ["var(--font-exo-2)"],
        // 폰트 Montserrat
        mont: ["var(--font-montserrat)"],
      },
      colors: {
        "black-opacity-80": "rgba(0,0,0,0.8)",
        "white-opacity-80": "rgba(255, 255, 255, 0.8)",
        "white-opacity-60": "rgba(255, 255, 255, 0.6)",
        "white-opacity-50": "rgba(255, 255, 255, 0.5)",
        "white-opacity-10": "rgba(255, 255, 255, 0.1)",
        "custom-blue": "#18a0fb",
      },
    },
  },
  plugins: [],
};
export default config;
