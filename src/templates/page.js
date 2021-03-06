import React from "react"
import { graphql } from "gatsby"
import contentParser from "gatsby-wpgraphql-inline-images"
import FluidImage from "../components/fluidImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"

export default (props) => {
  // console.log("props: ", props)

  const pluginOptions = {
    wordPressUrl: `${process.env.CMS_URL}`,
    uploadsUrl: `${process.env.CMS_URL}/wp-content/uploads/`,
  }

  const {
    data: {
      wpgraphql: { page },
    },
  } = props

  const { id, title, uri, content, featuredImage, location } = page

  const regex = /<p>(.*?)<\/p>/
  const corresp = regex.exec(content)
  const firstParagraphWithoutHtml = corresp
    ? `${corresp[1].replace(/(<([^>]+)>)/gi /* strip html tags */, "")}...`
    : ""

  return (
    <Layout>
      <SEO
        title={title}
        image={featuredImage}
        article
        description={firstParagraphWithoutHtml}
      />
      <h1>{title}</h1>

      {featuredImage && <FluidImage image={featuredImage} />}

      <div>{contentParser({ content }, pluginOptions)}</div>

      {location?.latitude && location?.longitude && (
        <>
          <h2>Location</h2>
          
          <Map featured={{ id, title, uri, location }} />
        </>
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  fragment GatsbyImageSharpFluid_tracedSVG on ImageSharpFluid {
    tracedSVG
    aspectRatio
    src
    srcSet
    sizes
  }

  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        id
        title
        content
        uri
        location {
          latitude
          longitude
        }
        featuredImage {
          sourceUrl
          altText
          imageFile {
            childImageSharp {
              fluid(maxWidth: 640, quality: 90, fit: CONTAIN) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
              fixed(width: 1200, height: 630) {
                src
              }
            }
          }
        }
      }
    }
  }
`
