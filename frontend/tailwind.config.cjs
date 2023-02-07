/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2E9DC',
        secondary: '#91C499',
        alt: '#CFD11A',
        bgdark: '#292929',
        bglight: '#69776E',
      },
      container: {
        padding: '1rem',
        center:true,
        },
      fontFamily: {
        coolfont: ['JetBrains Mono', "monospace"]
      }
    },
  },
  plugins: [],
}