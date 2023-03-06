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
      maxWidth: {
        photoContainer: 'min(100vw, 112vh)',
      }
    }
  },
  plugins: [],
};
