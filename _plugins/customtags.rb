require 'fastimage'

module Jekyll
    class LazyLoadImage < Liquid::Tag

      def initialize(tag_name, variables, tokens)
        super
        @variables = variables.split(" ")

        @data_src = @variables[0]
        @alt_text = @variables[1]
        @style = @variables[2]
      end

      def render(context)
        # "<p>#{Dir.pwd}#{@data_src}</p>"
        size = FastImage.size(Dir.pwd + @data_src, raise_on_failure: true)
        """
        <div style='width: #{size[0]}; height: #{size[1]};'>
            <img style='margin-top: 0; margin-bottom: 0;' data-src='#{@data_src}' alt='#{@alt_text}' />
        </div>
        """
      end
    end
  end

  Liquid::Template.register_tag('lazy_image', Jekyll::LazyLoadImage)
