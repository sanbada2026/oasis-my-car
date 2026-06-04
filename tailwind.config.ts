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
        navy: {
          DEFAULT: "#0F172A",
          dark: "#020617",
        },
        gold: {
          DEFAULT: "#C5A46E",
          light: "#E8D5B7",
        },
        slate: {
          50: "#F8FAFC",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-kr)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
