/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#E7C36A",
          black: "#2F3338"
        }
      },
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Inter', 'sans-serif']
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.5)"
      }
    },
  },
  plugins: [],
}
