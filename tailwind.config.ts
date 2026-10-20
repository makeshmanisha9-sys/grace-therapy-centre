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
        navy: {
          950: "#071524", // midnight blue
          900: "#0E2947", // deep blue
          850: "#133153",
          800: "#17385D", // brand primary navy
          700: "#1E4774",
          600: "#2B5E96",
          500: "#3D77B8",
          400: "#5A94D4",
          200: "#C7DBF0",
          100: "#E2ECF7",
          50: "#F2F6FB",
        },
        gold: {
          900: "#6B4D16",
          800: "#8B651F",
          700: "#A87C2B",
          600: "#C49A50", // brand gold accent
          500: "#D3AC66",
          400: "#E2BF7E",
          300: "#EED299",
          200: "#F5E4B9",
          100: "#FBF3DC",
          50: "#FDFBF5",
        },
        ivory: {
          DEFAULT: "#FCFAF6",
          50: "#FDFDFB",
          100: "#FCFAF6",
          200: "#F7F3EB",
          300: "#EFE9DD",
          border: "#E8E0D2",
        },
        slateBg: "#EDF2F7",
        charcoal: {
          950: "#1D2939",
          900: "#344054", // body text
          700: "#475467",
          600: "#667085",
          500: "#98A2B3",
          400: "#D0D5DD",
          300: "#EAECF0",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "'Times New Roman'", "serif"],
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 12px -2px rgba(23, 56, 93, 0.05)",
        card: "0 4px 20px -2px rgba(23, 56, 93, 0.06), 0 2px 6px -1px rgba(23, 56, 93, 0.03)",
        cardHover: "0 20px 35px -8px rgba(23, 56, 93, 0.12), 0 6px 16px -4px rgba(23, 56, 93, 0.06)",
        goldGlow: "0 4px 24px -2px rgba(196, 154, 80, 0.28)",
        floating: "0 10px 30px -5px rgba(14, 41, 71, 0.15)",
        glass: "0 8px 32px 0 rgba(23, 56, 93, 0.08)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
