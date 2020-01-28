import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = props => {
  let sourceUrl, altText
  console.log("props: ", props)

  const {
    data: {
      wpgraphql: { page },
    },
  } = props

  const { title, content, featuredImage } = page

  if (featuredImage) {
    sourceUrl = featuredImage.sourceUrl
    altText = featuredImage.altText
  }

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>

      <img src={sourceUrl || ""} alt={altText || ""} />

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
        featuredImage {
          altText
          sourceUrl(size: LARGE)
        }
      }
    }
  }
`
