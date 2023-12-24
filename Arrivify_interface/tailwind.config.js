/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brush: ["Comforter Brush", "cursive"],
        Pacifico: ["Pacifico", "cursive"],
        Yantramanav: ['Yantramanav', 'sans-serif']
      },
    },
  },
  plugins: [],
};
