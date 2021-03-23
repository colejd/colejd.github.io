/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
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

  // Overwrite/append defaults if any values are specified for the `meta` parameter
  for (const [key, value] of Object.entries(meta)) {
    metadataDefaults[key] = value
  }

  // Create array of objects that Helmet expects
  let metadata = []
  for (const [key, value] of Object.entries(metadataDefaults)) {
    metadata.push({
      name: key,
      content: value,
    })
  }

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
        meta={metadata}
      />
      {debug && (
        <pre>
          <b>Meta Tags:</b>
          <br />
          {JSON.stringify(metadata, null, 2)}
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
