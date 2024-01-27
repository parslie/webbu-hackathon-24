/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "gamepage": "16rem 1fr",
        "autofit": "repeat(auto-fit, minmax(16rem, 1fr))",
        "gamecard": "1fr max-content",
        "header": "1fr max-content 1fr"
      },
      gridTemplateRows: {
        "gamepage": "max-content 1fr",
      },
    },
  },
  plugins: [],
}

