# Jon's Website

This is a static Jekyll website. To build, it uses Node via JS to invoke Jekyll via Ruby to invoke PostCSS via Node via JS which is really just fine by me.

## Setup

```bash
# Install Ruby and rbenv if you don't have them yet
brew install rbenv
rbenv install 2.7.0

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

You have a few commands available:

* `npm run develop` - Build and watch development version
    - Nodemon watches source files for changes. If changes are found, `bundle exec jekyll build` is run and the result is put in `_site`. Browser-sync, which is watching `_site`, will host this folder and refresh the page if any changes are detected.
    - You could just run `bundle exec jekyll serve`. However, it seems to do some sort of incremental compilation that doesn't know how to handle CSS includes. If you modify a CSS file included in another file, the including file will not be regenerated. The recommended command forces a complete rebuild.
* `npm run compile_dev` - Builds the development version of the website into `_site`.
* `npm run compile_prod` - Builds the production version of the website into `_site`.

Simply pushing your changes on `master` to GitHub will cause the website to update. The built website will be pushed to the `gh-pages` branch. You may need to go into CloudFlare and empty the cache to get your changes to show up immediately.

## Notes to self
- You can specify `excerpt-override` in the front matter of a blog post to override the excerpt rendered in each blog preview card. If you don't define it, an excerpt will be generated from the blog post text. You can control when the excerpt ends with the `<!--more-->` tag.
- `description` in the front matter of a blog post is used for social media previews and Google search.
- You can add a `modifiedDate` to the front matter of a blog post, though it isn't implemented in the GUI yet. See blog-post-schema.html for details.