import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg: "#121212",
        primary: "#f29766",
        secondary: "#5db0d7",
        hover: "#1a323d",
        foreground: "#c0c0c0",
        link: "#9e9eff",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
