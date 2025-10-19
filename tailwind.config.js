/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37",
        dark: "#0e0e0e",
        light: "#fdf4dc"
      }
    }
  },
  plugins: []
};
