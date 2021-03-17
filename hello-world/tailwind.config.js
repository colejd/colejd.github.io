const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'], // TODOjon: Do I need to point at blog posts?
  darkMode: false, // or 'media' or 'class'
  theme: {
    nightwind: {
      // typography: true,
    },
    extend: {
      // Add new colors
      colors: {
        brand: {
          light: colors.blue[500],
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
      },

      // Add custom breakpoints
      screens: {
        '65ch': '65ch', // Breakpoint between sm and md. Identifies when the main column has hit its max width.
        'widescreen': {'raw': '(min-aspect-ratio: 16/8)'}, // Breakpoint for widescreen monitor aspect ratio
        'ultrawide': {'raw': '(min-aspect-ratio: 21/8)'}, // Breakpoint for ultrawide monitor aspect ratio
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
