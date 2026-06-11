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
          DEFAULT: "#4D8397",
          dark: "#3C6B7D",
          light: "#7FA8B7",
          tint: "#E6EEF1",
        },
        cream: "#F3F2ED",
        ink: "#1a1a1a",
        night: "#0f0f0f",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "76rem",
      },
    },
  },
  plugins: [],
};
export default config;
