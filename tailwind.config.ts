import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#121212",
        primary: "#f29766",
        secondary: "#5db0d7",
        link: "#9e9eff",
        foreground: "#c0c0c0",
        hover: "#4686a3",
      },
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            color: theme("colors.foreground"),
            a: {
              color: theme("colors.link"),
              "&:hover": {
                textDecoration: "underline",
              },
            },
            p: {
              color: theme("colors.white"),
              lineHeight: "normal",
              fontSize: "0.875rem",
            },
            "h1, h2, h3, h4": {
              color: theme("colors.primary"),
              fontWeight: "bold",
              lineHeight: "normal",
              marginTop: "0.5rem",
              marginBottom: "1rem",
            },
            h1: {
              fontSize: "1.25rem",
            },
            h2: {
              fontSize: "1.125rem",
            },
            h3: {
              fontSize: "1rem",
            },
            ul: {
              listStyleType: "disc",
              fontSize: "0.875rem",
            },
            ol: {
              listStyleType: "decimal",
              fontSize: "0.875rem",
            },
            li: {
              color: theme("colors.white"),
              lineHeight: "normal",
              fontSize: "0.875rem",
              marginBottom: "0.5rem",
            },
            blockquote: {
              color: theme("colors.secondary"),
              "&::before": { content: "none" },
              "&::after": { content: "none" },
            },
            pre: {
              backgroundColor: theme("colors.neutral.700"),
              color: theme("colors.white"),
              borderRadius: "0",
              "&::before": { content: "none" },
              "&::after": { content: "none" },
            },
            code: {
              backgroundColor: theme("colors.neutral.700"),
              color: theme("colors.white"),
              borderRadius: "0",
              "&::before": { content: "none" },
              "&::after": { content: "none" },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
