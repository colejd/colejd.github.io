require 'fastimage'

module Jekyll
  module LazyLoadFilter
    def lazy_load_image(input)
      data_src = input.strip
      dir = "" # ENV['JEKYLL_ENV'] == "production" ? "" : "_site"
      separator = ""
      if data_src[0] != '/' then
        separator = "/"
      end
      # "<p>#{Dir.pwd}#{separator}#{data_src}</p>"
      size = FastImage.size("#{Dir.pwd}#{separator}#{data_src}", raise_on_failure: true)
      return "width: #{size[0]}; height: #{size[1]};"
    end
  end
end

Liquid::Template.register_filter(Jekyll::LazyLoadFilter)
