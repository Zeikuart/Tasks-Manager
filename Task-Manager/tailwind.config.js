/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        blueV4: "#418BFE",
        blueV3: "#399DDA",
        blueV2: "#43B9ED",
        blueV1: "#EEF8FE",
        blueButtonBorder: "#60B0E1"
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      merri: ['Merriweather', 'serif']
    }
  },
  plugins: [],
}