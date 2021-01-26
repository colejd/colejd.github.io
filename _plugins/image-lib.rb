require 'fastimage'

module Jekyll

  module ImageLib

    # Size of the image at the input path as "width: <width in px>; height: <height in px>;"
    def image_size_css(input)
      data_src = input.strip
      separator = ""
      if data_src[0] != '/' then
        separator = "/"
      end
      # "<p>#{Dir.pwd}#{separator}#{data_src}</p>"
      size = FastImage.size("#{Dir.pwd}#{separator}#{data_src}", raise_on_failure: true)
      return "width: #{size[0]}; height: #{size[1]};"
    end

    # Size of the image at the input path as "<width in px> <height in px>"
    def image_size_svg(input)
      data_src = input.strip
      separator = ""
      if data_src[0] != '/' then
        separator = "/"
      end
      # "<p>#{Dir.pwd}#{separator}#{data_src}</p>"
      size = FastImage.size("#{Dir.pwd}#{separator}#{data_src}", raise_on_failure: true)
      return "#{size[0]} #{size[1]}"
    end

  end

end

Liquid::Template.register_filter(Jekyll::ImageLib)
