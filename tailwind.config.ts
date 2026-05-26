import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
      },
      borderColor: {
        DEFAULT: "rgba(255,255,255,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
