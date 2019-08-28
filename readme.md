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

## Building

```bash
# Serve development version
bundle exec jekyll serve

# Compile into _site
bundle exec jekyll build
```

Simply pushing this repo to GitHub after running `bundle exec jekyll build` will cause the website to update. You may need to go into CloudFlare and empty the cache to get your changes to show up immediately.
