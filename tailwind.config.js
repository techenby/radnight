const colors = require('tailwindcss/colors')

module.exports = {
    purge: false,
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                'light-sm': '0 1px 2px 0 rgba(255, 255, 255, 0.1)',
                'light': '0 1px 3px 0 rgba(255, 255, 255 0.1), 0 1px 2px 0 rgba(255, 255, 255 0.06)',
                'light-md': '0 4px 6px -1px rgba(255, 255, 255 0.1), 0 2px 4px -1px rgba(255, 255, 255 0.06)',
                'light-lg': '0 10px 15px -3px rgba(255, 255, 255 0.1), 0 4px 6px -2px rgba(255, 255, 255 0.05)',
                'light-xl': '0 20px 25px -5px rgba(255, 255, 255 0.1), 0 10px 10px -5px rgba(255, 255, 255 0.04)',
            },
            colors: {
                gray: {
                    850: '#18212f',
                    ...colors.coolGray,
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
