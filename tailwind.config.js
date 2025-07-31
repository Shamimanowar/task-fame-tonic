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
      dropShadow: {
        "fame-cyan": "0 5px 5px rgba(252, 0, 78, 1)",
      },
      boxShadow: {
        "fame-button": "2px 2px 10px 0px rgba(0, 231, 249, 1)",
      },
      fontSize: {
        "10": "10px",
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
