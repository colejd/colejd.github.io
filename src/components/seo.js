/**
 * SEO component for Gatsby Head API
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, debug }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            authorTwitter
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  let metadataDefaults = {
    description: metaDescription,
    "og:title": title,
    "og:description": metaDescription,
    "og:type": "website",
    "og:site_name": site.siteMetadata?.title,
    "twitter:card": "summary",
    "twitter:creator": site.siteMetadata?.authorTwitter,
    "twitter:title": title,
    "twitter:description": metaDescription,
  }

  // Overwrite/append defaults with `meta` prop
  for (const [key, value] of Object.entries(meta)) {
    metadataDefaults[key] = value
  }

  // Convert to array of <meta> tags
  const metaTags = Object.entries(metadataDefaults).map(([key, value]) => (
    <meta key={key} name={key} content={value} />
  ))

  return (
    <>
      <html lang={lang} />
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      {metaTags}
      {debug && (
        <pre>
          <b>Meta Tags:</b>
          <br />
          {JSON.stringify(metadataDefaults, null, 2)}
        </pre>
      )}
    </>
  )
}

SEO.defaultProps = {
  lang: `en-US`,
  meta: {},
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.object,
  title: PropTypes.string.isRequired,
}

export default SEO
