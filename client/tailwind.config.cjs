/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: '#826644',
        footer: '#826644',
        overlay: 'rgba(0,0,0, 0.9)'
      }
    },
  },
  plugins: [],
}
