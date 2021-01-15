module.exports = {
    options: {
      parser: require('postcss-scss')
    },
    plugins: [
    //   require('postcss-import'),
      require('tailwindcss'),
    //   require('postcss-preset-env')({ stage: 2 }), // Does the work of autoprefixer, postcss-custom-properties, and postcss-nesting
      ...(process.env.JEKYLL_ENV == "production"
        ? [require('cssnano')({ preset: 'default' })]
        : [])
    ]
};