# Jon's Website

## Setup

```bash
# Install Ruby and rbenv if you don't have them yet
brew install rbenv
rbenv install 2.6.3

# Check to make sure you're using the Ruby installation you just made
rbenv version

# Install Ruby dependencies
gem install bundler
bundle install

# Install NPM dependencies
npm install
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
```

Simply pushing your changes on `master` to GitHub will cause the website to update. The built website will be pushed to the `gh-pages` branch. You may need to go into CloudFlare and empty the cache to get your changes to show up immediately.

## Notes to self
- You can specify `excerpt-override` in the front matter of a blog post to override the excerpt rendered in each blog preview card. If you don't define it, an excerpt will be generated from the blog post text. You can control when the excerpt ends with the `<!--more-->` tag.
- `description` in the front matter of a blog post is used for social media previews and Google search.
