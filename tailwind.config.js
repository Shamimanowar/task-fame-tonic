/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fame-pink": "#FC004E",
        "fame-cyan": "#00E7F9",
        secondary: {
          100: "#A9A9A9",
          200: "#ABABAB",
        },
      },
      backgroundImage: {
        "fame-gradient": "linear-gradient(90deg, #FC004E 0%, #10CBE0 100%)",
      },
      fontFamily: {
        urbanist: ["var(--font-urbanist)", "Urbanist", "sans-serif"],
        figtree: ["var(--font-figtree)", "Figtree", "sans-serif"],
      },
      fontWeight: {
        500: "500",
        600: "600",
        700: "700",
        800: "800",
      },
    },
  },
  plugins: [],
};
