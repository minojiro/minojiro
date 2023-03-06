/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      aspectRatio: {
        'photo': '4 / 3',
      },
      fontFamily: {
        base: ['Gamja Flower'],
      },
    }
  },
  plugins: [],
};
