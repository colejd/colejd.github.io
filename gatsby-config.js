module.exports = {
  flags: {
    DEV_SSR: true,
    FAST_DEV: false,
  },
  siteMetadata: {
    siteUrl: `https://jons.website`,
    title: `Jon's Website`,
    description: `Jonathan Cole's website.`,
    author: `Jonathan Cole`,
    authorTwitter: `@12millionbeans`,
    language: `en-US`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://jons.website`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static",
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    "gatsby-plugin-postcss", // TODOjon: Is this in the right place?
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/assets\/images\/svg/, // See below to configure properly
          omitKeys: [
            "xmlnsRdf",
            "xmlnsDc",
            "xmlnsCc",
            "rdfAbout",
            "rdfResource",
          ],
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sharp`,
    {
      // List before gatsby-plugin-offline!
      resolve: `gatsby-plugin-manifest`,
      options: {
        lang: `en-US`,
        name: `Jon's Website`,
        short_name: `Jon's Website`,
        start_url: `/`,
        // background_color: `#663399`,
        // theme_color: `#fff`,
        display: `browser`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!--more-->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: { wrapperStyle: "margin-bottom: 1.0725rem" },
          },
          `gatsby-remark-autolink-headers`,
          // `gatsby-plugin-catch-links`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: "›",
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "list[ordered=false]": "bullet-list",
              },
            },
          },
          `gatsby-remark-reading-time`,
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    // Sitemap generation
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/
        exclude: [],
      },
    },

    // RSS feed generation
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { fileAbsolutePath: {regex: "/(blog)/"}, frontmatter: {draft: { ne: true }} },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Jon's Blog",
          },
        ],
      },
    },

    // Generate robots.txt
    'gatsby-plugin-robots-txt',
  ],
}
