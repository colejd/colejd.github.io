import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

let jon = {
  "@type": "Person",
  name: "Jonathan Cole",
  givenName: "Jonathan",
  familyName: "Cole",
  sameAs: ["https://github.com/colejd"],
}

export default function BlogPostStructuredData({ post, debug }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            language
            baseURL
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
      "@id": concatPaths(metadata.baseURL, post.fields.slug || ""),
    },

    // Article metadata
    inLanguage: metadata.language,
    author: jon,
    publisher: {
      ...jon,
      logo: {
        "@type": "ImageObject",
        url: `${metadata.baseURL}assets/images/avatar.png`,
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
      url: concatPaths(metadata.baseURL, post.frontmatter.coverPhoto.publicURL),
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
 * Concatenate the given path strings, preventing "//" in the middle.
 */
function concatPaths(path1, path2) {
  // Remove trailing slash
  if (path1.charAt(path1.length - 1) === "/") {
    path1 = path1.substring(0, path1.length - 1)
  }
  // Remove leading slash
  if (path2[0] === "/") {
    path2 = path2.substring(1)
  }
  return `${path1}/${path2}`
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
