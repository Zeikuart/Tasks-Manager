/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        blueV4: "#418BFE",
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      merri: ['Merriweather', 'serif']
    }
  },
  plugins: [],
}