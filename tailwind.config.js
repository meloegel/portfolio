module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      'foo': "400px"
    },
    extend: {
      backgroundImage: {
        'headerPhoto': "url('/src/Images/HeaderPhoto.jpg')",
      },
      height: {
        'h400px': '25rem',
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
