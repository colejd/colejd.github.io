const colors = require('tailwindcss/colors')

const disabledCss = {
  "code::before": false,
  "code::after": false,
  "pre code::before": false,
  "pre code::after": false,
  "blockquote p:first-of-type::before": false,
  "blockquote p:last-of-type::after": false,
  pre: false,
  code: false,
  'pre code': false,
  'code::before': false,
  'code::after': false
}

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

        // Disable styles from Typography plugin
        typography: {
          DEFAULT: { css: disabledCss },
          sm: { css: disabledCss },
          lg: { css: disabledCss },
          xl: { css: disabledCss },
          '2xl': { css: disabledCss },
        }
      },
    },
    variants: {},
    important: true, // Prioritize html styles over typography styles
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }