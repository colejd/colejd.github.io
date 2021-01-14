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
    darkMode: false,
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }