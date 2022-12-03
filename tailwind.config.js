/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-color': '#41A53D',
        'not-black': '#3E3E3E',
      },

      screens: {
        'extraLarge': '1500px'
      }
    },
  },
  plugins: [],
}
