/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif'],
      'FiraSans': ['Fira Sans', 'sans-serif']
    },
    extend: {
      colors: {
        dark: "#000"
      },
      backgroundColor: {
        'sky-color': '#004E89', // Replace with your desired color code
        'body-color': '#002040'
      },
      backgroundImage: {
        'back-image': "url('/assets/images/background.png')",
        'footer-texture': "url('/assets/images/foot-texture.png')",
      }
    },
  },
  plugins: [],
}
