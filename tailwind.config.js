/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-1': '#403F3F',
        'gray-2': '#9F9F9F',
      },
      fontFamily: {
        'nunito': ["Nunito", 'serif', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

