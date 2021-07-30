import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import FeaturedMedia from "../../components/FeaturedMedia"
import Map from "../../components/Map"

const page = ({ data }) => {
  const {
    page,
    allWpPage: { nodes },
  } = data
  const {
    id,
    title,
    content,
    featuredImage,
    excerpt,
    databaseId,
    uri,
    location,
  } = page

  return (
    <Layout
      bodyClass={`page-template-default page page-id-${databaseId} wp-embed-responsive singular missing-post-thumbnail has-no-pagination not-showing-comments footer-top-visible customize-support`}
    >
      <Seo
        title={title}
        description={excerpt}
        socialImage={featuredImage?.node}
        uri={uri}
      />

      <article
        className={`post-${databaseId} post page type-page status-publish hentry`}
        id={`post-${databaseId}`}
      >
        <header className="entry-header has-text-align-center header-footer-group">
          <div className="entry-header-inner section-inner medium">
            <h1
              className="entry-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
        </header>

        <FeaturedMedia image={featuredImage} />

        <div className="post-inner thin">
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {location?.longitude && location?.latitude && (
            <>
              <div className="entry-content">
                <h2 className="location">Location</h2>

              <figure>

              <Map featured={{ id, title, uri, location }} nodes={nodes} />


              <figcaption>
                Navigate there using{" "}
                <a
                  href={`https://maps.google.com/?q=${location?.latitude},${location?.longitude}&ll=${location?.latitude},${location?.longitude}`}
                >
                  Google Maps
                </a>{" "}
                <a
                  href={`http://maps.apple.com/?sll=${location?.latitude},${location?.longitude}&z=10&t=s`}
                >
                  Apple Maps
                </a>,{" "}
                or{" "}
                <a href={`geo:${location?.latitude},${location?.longitude}`}>
                  another map app
                </a>
              </figcaption>
              </figure>

              </div>

            </>
          )}
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query page($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      ...PageContent
    }
    nextPage: wpPage(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpPage(id: { eq: $previousPage }) {
      title
      uri
    }
    allWpPage(sort: { fields: date, order: ASC }) {
      nodes {
        title
        id
        uri
        location {
          latitude
          longitude
        }
      }
    }
  }
`

export default page
