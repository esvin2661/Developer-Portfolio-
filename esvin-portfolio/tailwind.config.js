/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { primary: "#0284C7",
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
    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
