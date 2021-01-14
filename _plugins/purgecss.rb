# Loosely adapted from https://www.seancdavis.com/blog/use-purge-css-to-optimize-jekyll/
Jekyll::Hooks.register(:site, :post_write) do |_site|
    # https://stackoverflow.com/a/15157360/7138792
    system("PATH=$(npm bin):$PATH purgecss --css #{Dir.glob('_site/assets/css/*.css').first} --content _site/**/*.html --output #{Dir.glob('_site/assets/css/*.css').first}")
end