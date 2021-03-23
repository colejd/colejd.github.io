import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { concatPaths } from "../utils/path-utils"

let jon = {
  "@type": "Person",
  name: "Jonathan Cole",
  givenName: "Jonathan",
  familyName: "Cole",
  sameAs: ["https://github.com/colejd"],
}

export function AppPageStructuredData({ app, debug }) {
  let schemaApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.frontmatter.appName,
    operatingSystem: app.frontmatter.appPlatform,
    applicationCategory: app.frontmatter.appCategory,
    offers: {
      "@type": "Offer",
      price: app.frontmatter.appPrice,
      priceCurrency: "USD",
    },
  }

  return (
    <>
      {debug === true && (
        <pre>
          <b>JSON-LD:</b>
          <br />
          {JSON.stringify(schemaApp, null, 2)}
        </pre>
      )}
      <Helmet>
        {
          <script type="application/ld+json">
            {JSON.stringify(schemaApp)}
          </script>
        }
      </Helmet>
    </>
  )
}

export function BlogPostStructuredData({ post, debug }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            language
            siteUrl
          }
        }
      }
    `
  )
  const metadata = site.siteMetadata

  let schemaArticle = {
    "@context": "http://schema.org",
    "@type": "BlogPosting",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": concatPaths(metadata.siteUrl, post.fields.slug || ""),
    },

    // Article metadata
    inLanguage: metadata.language,
    author: jon,
    publisher: {
      ...jon,
      logo: {
        "@type": "ImageObject",
        url: concatPaths(metadata.siteUrl, `/assets/images/avatar.png`),
      },
    },

    // Article information
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.dateModified,
    isAccessibleForFree: true,
    keywords: post.frontmatter.keywords,
    headline: post.frontmatter.title,
    description: post.frontmatter.description || post.excerpt,
    wordCount: post.fields.readingTime.words,
    timeRequired: msToISO601Duration(post.fields.readingTime.time), // ISO 8601 Duration format
  }

  // Add image to schema if available
  if (post.frontmatter.coverPhoto != null) {
    schemaArticle.image = {
      "@type": "ImageObject",
      url: concatPaths(metadata.siteUrl, post.frontmatter.coverPhoto.publicURL),
    }
  }
  return (
    <>
      {debug === true && (
        <pre>
          <b>JSON-LD:</b>
          <br />
          {JSON.stringify(schemaArticle, null, 2)}
        </pre>
      )}
      <Helmet>
        {
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>
        }
      </Helmet>
    </>
  )
}

/**
 * Converts the given amount of milliseconds to an ISO 8601 Duration string.
 * See https://en.wikipedia.org/wiki/ISO_8601#Durations for more.
 * @param {*} ms Milliseconds
 * @returns ISO 8601 Duration string
 */
function msToISO601Duration(ms) {
  let remaining = Math.round(ms / 1000) // Convert from ms to seconds

  let hoursComponent = Math.floor(remaining / 3600)
  remaining = remaining % 3600

  let minutesComponent = Math.floor(remaining / 60)
  remaining = remaining % 60

  let secondsComponent = remaining

  return `PT${hoursComponent}H${minutesComponent}M${secondsComponent}S`
}

// /**
//  * Converts the given time in milliseconds to a human-readable time-to-read string, e.g. `"N hours, N minutes"`.
//  * @param {*} ms Milliseconds
//  * @returns String in format `"N minutes"` if minutes < 60, otherwise `"N hours, N minutes"`
//  */
// function msToHumanReadableDuration(ms) {
//   let remaining = Math.round(ms / 1000) // Convert from ms to seconds

//   let hoursComponent = Math.floor(remaining / 3600)
//   remaining = remaining % 3600

//   let minutesComponent = Math.floor(remaining / 60)
//   remaining = remaining % 60

//   // let secondsComponent = remaining

//   let components = []
//   if (hoursComponent !== 0) components.push(`${hoursComponent} hours`)
//   if (minutesComponent !== 0) components.push(`${minutesComponent} minutes`)

//   return components.join(", ")
// }
