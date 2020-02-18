import React from "react"
import { graphql } from "gatsby"
import contentParser from "gatsby-wpgraphql-inline-images"
import FluidImage from "../components/fluidImage"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default props => {
  console.log("props: ", props)

  const {
    data: {
      wpgraphql: { page },
    },
  } = props

  const { title, content, featuredImage } = page

  const pluginOptions = {
    wordPressUrl: `${process.env.CMS_URL}`,
    uploadsUrl: `${process.env.CMS_URL}/wp-content/uploads/`,
  }

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>

      {featuredImage && <FluidImage image={featuredImage} />}

      <div>{contentParser({ content }, pluginOptions)}</div>
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
        title
        content
        uri
        featuredImage {
          sourceUrl
          altText
          imageFile {
            childImageSharp {
              fluid(maxWidth: 640, quality: 90, fit: CONTAIN) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
