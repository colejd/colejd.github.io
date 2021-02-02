# # Loosely adapted from https://www.seancdavis.com/blog/use-purge-css-to-optimize-jekyll/
# # Jekyll::Hooks.register(:site, :post_write) do |_site|
# #     # https://stackoverflow.com/a/15157360/7138792
# #     # system("PATH=$(npm bin):$PATH purgecss --css #{Dir.glob('_site/assets/css/*.css').first} --content _site/**/*.html --output #{Dir.glob('_site/assets/css/*.css').first}")
# #     system("npm run uncss")
# # end

require 'htmlbeautifier'
require 'htmlcompressor'

# Jekyll::Hooks.register(:site, :post_render) do |_site|
#     # https://stackoverflow.com/a/15157360/7138792
#     Dir.glob('_site/**/*.html').each do |file_name|
#         read_file = File.open(file_name)
#         file_data = read_file.read
#         read_file.close

#         # Beautify
#         # cleaned_html = HtmlBeautifier.beautify file_data

#         # Compress
#         cleaned_html = HtmlCompressor::Compressor.new.compress file_data

#         File.write(file_name, cleaned_html)

#         # system("bundle exec htmlbeautifier #{file}")
#     end
# end