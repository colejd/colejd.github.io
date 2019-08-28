# Jon's Website

## Setup

```bash
brew install rbenv
rbenv install 2.4.2

# Check to make sure you're using the Ruby installation you just made
rbenv version

gem install bundler
bundle install
```

If you're having trouble getting `gem install bundler` to install to the right directory, you may need to add the following in your `.zshrc`:

```bash
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"
export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"
```

## Building

```bash
# Serve development version
bundle exec jekyll serve

# Compile into _site
bundle exec jekyll build
```

Simply pushing this repo to GitHub after running `bundle exec jekyll build` will cause the website to update. You may need to go into CloudFlare and empty the cache to get your changes to show up immediately.
