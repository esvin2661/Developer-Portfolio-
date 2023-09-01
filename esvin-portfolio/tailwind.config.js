/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0284C7",
        primaryDark: "#016EAB",
        primaryLight: "#03A9F4",
        secondary: "#FFC107",
        secondaryDark: "#FFA000",
        secondaryLight: "#FFD54F",
        accent: "#4CAF50",
        accentDark: "#388E3C",
        accentLight: "#81C784",
        neutralDark: "#333",
        neutralMid: "#777",
        neutralLight: "#F4F4F4",
        success: "#00C853",
        danger: "#D32F2F",
        warning: "#FF9800",
        info: "#2196F3",
        denim: {
          50: "#f1f6fe",
          100: "#e3ecfb",
          200: "#c0d9f7",
          300: "#88b9f1",
          400: "#4995e7",
          500: "#2279d5",
          600: "#145eb8",
          700: "#114a93",
          800: "#12407a",
          900: "#153765",
          950: "#0e2343",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
