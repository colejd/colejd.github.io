# colejd.github.io

This is the repo for my personal website.

I am on a neverending vision quest to make this website good as heck. I have rewritten and redesigned it several times:
- Initially built with a simple, custom, Jekyll-like HTML builder
  - Initially with Grunt
  - Rebuilt pipeline with Webpack, content authored in Pug
- Rewrote with Jekyll and Bootstrap
- Replaced Bootstrap with Bulma
- Replaced Bulma with Tailwind
- Ported from Jekyll to Gatsby
- ...and I'll probably do it again.

## Development

This is a Gatsby website. Tailwind is used as the backbone for styling.

Work in Visual Studio Code with the following plugins:
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Notes

* I'm avoiding the use of gatsby-link. Its prefetching behavior is nice, but it causes runtime-loaded JS to never unload unless you refresh the page.
  * I wrote a `RuntimeScript` component which properly removes the script component when the component unmounts on a page change. This isn't enough to remove currently executing JS, though. For that, I'd need to rewrite my runtime-loaded scripts so that I can explicitly release the loaded JS, but even then, that doesn't help for third-party dependencies. To avoid this issue and prevent memory leaks (as it were), I'm just going to leave prefetching off completely.
* The [resume repo](https://github.com/colejd/resume) automatically builds and commits the files into this repo when a commit is pushed. Make sure if you change the location of the PDF and HTML files that you also update the resume repo's workflow file.

## Blog post schema:

* `draft` (`Boolean`, optional): Specify if the post should be published when the site is built for production.
* `dateModified` (`Date`, optional): Specify a date when the blog post was last updated.