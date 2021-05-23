const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            gray: {
                850: '#18212f',
                ...colors.coolGray,
            },
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
