
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#bfa37a', // zacht goud
        },
      },
      fontFamily: {
        display: ['ui-serif', 'Georgia', 'serif'],
        body: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
