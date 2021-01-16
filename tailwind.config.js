const colors = require('tailwindcss/colors')

module.exports = {
    /*
    Per https://stevenwestmoreland.com/2021/01/using-tailwind-css-with-jekyll.html:
    The purge configuration option includes common Jekyll directories.
    When building for production, Tailwind uses this option to remove
    unused styles and optimize your CSS. Any files in your project that
    reference the Tailwind styles by name should be included in this array.
    */
    purge: [
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './_pages/**/*.md',
      './*.html',
      './*.md',
    ],
    darkMode: 'media',
    theme: {
      extend: {
        // Add new colors
        colors: {
          brand: {
            light: colors.blue[500],
            DEFAULT: '#1fb6ff',
            dark: '#009eeb',
          },
        },
        // Fix code blocks
        typography: (theme) => ({
          DEFAULT: {
            css: {
              table: {
                pre: {
                  margin: 0,
                  fontSize: '1em',
                }
              },
              tbody: {
                td: {
                  '&:first-child': { pre: { paddingRight: 0, }, },
                  '&:last-child': { pre: { paddingLeft: 0, }, },
                },
              },
            }
          }
        }),
      },
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }