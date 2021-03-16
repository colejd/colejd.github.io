module.exports = {
  plugins: [
    require('postcss-import'),
    require('@tailwindcss/jit'),
    require('tailwindcss'),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'nesting-rules': true
      }
    }), // Does the work of autoprefixer, postcss-custom-properties, and postcss-nesting
    ...(process.env.JEKYLL_ENV == "production"
      ? [require('cssnano')({ preset: 'default' })]
      : [])
  ]
};