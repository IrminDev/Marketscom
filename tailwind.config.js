/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      backgroundImage: {
        'escom': "url('/assets/escom.jpg')",
        'escom2': "url('/assets/escom2.jpg')",
        'escom3': "url('/assets/escom3.jpg')",
      },
      gridTemplateColumns: {
        'form':"repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
}

