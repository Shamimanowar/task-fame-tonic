/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "fame-gradient": "linear-gradient(90deg, #FC004E 0%, #10CBE0 100%)",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
      },
      fontWeight: {
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      colors: {
        "fame-pink": "#FC004E",
        "fame-cyan": "#00E7F9",
      },
    },
  },
  plugins: [],
  safelist: [
    "text-fame-cyan",
    "text-fame-pink",
    "bg-fame-gradient",
    "font-figtree",
    "font-urbanist",
    "font-extrabold",
  ],
};
