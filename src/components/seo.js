/**
 * SEO component for Gatsby Head API
 */

import * as React from "react"
import PropTypes from "prop-types"

import { useSiteMetadata } from "../hooks/use-site-metadata"

function SEO({ description, lang, meta, title, debug }) {
  const siteMetadata = useSiteMetadata()

  const metaDescription = description || siteMetadata.description
  const fullTitle = siteMetadata.title ? `${title} | ${siteMetadata.title}` : title

  let metadataDefaults = {
    description: metaDescription,
    "og:title": title,
    "og:description": metaDescription,
    "og:type": "website",
    "og:site_name": siteMetadata.title,
    "twitter:card": "summary",
    "twitter:creator": siteMetadata.authorTwitter,
    "twitter:title": title,
    "twitter:description": metaDescription,
  }

  // Overwrite/append defaults with `meta` prop
  for (const [key, value] of Object.entries(meta || {})) {
    metadataDefaults[key] = value
  }

  // Convert to array of <meta> tags
  const metaTags = Object.entries(metadataDefaults).map(([key, value]) => (
    <meta key={key} name={key} content={value} />
  ))

  return (
    <>
      <html lang={lang || `en-US`} />
      <title>{fullTitle}</title>
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

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.object,
  title: PropTypes.string.isRequired,
}

export default SEO
