# Loosely adapted from https://www.seancdavis.com/blog/use-purge-css-to-optimize-jekyll/
Jekyll::Hooks.register(:site, :post_write) do |_site|
    system("purgecss --css #{Dir.glob('_site/assets/css/*.css').first} --content _site/**/*.html --output #{Dir.glob('_site/assets/css/*.css').first}")
end