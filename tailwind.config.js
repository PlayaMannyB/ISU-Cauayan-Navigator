

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'isu-green': '#046A38',
        'isu-green-light': '#0B6E4F',
        'isu-gold': '#D4A437',
        'isu-gold-light': '#E8C547',
        'isu-mint': '#00FF7F',
        'isu-mint-soft': '#3DDC97',
        'isu-charcoal': '#0E1512',
        'isu-charcoal-light': '#162420',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow-mint': '0 0 20px rgba(0, 255, 127, 0.35)',
      }
    },
  },
  plugins: [],
}

