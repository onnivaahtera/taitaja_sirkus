/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: '#4e3e2a',
        footer: '#4e3e2a',
      },
    },
  },
  plugins: [],
}
