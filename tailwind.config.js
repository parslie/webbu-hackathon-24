/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../src/images/Wood-texture-1.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      gridTemplateColumns: {
        gamepage: "16rem 1fr",
        autofit: "repeat(auto-fit, minmax(16rem, 1fr))",
        gamecard: "1fr max-content",
        header: "1fr max-content 1fr",
      },
      gridTemplateRows: {
        gamepage: "max-content 1fr",
      },
    },
  },
  plugins: [],
};
