import { graphql } from "gatsby"
import Category from "~/@gatsbywpthemes/gatsby-theme-blog-data/components/Category"

export default Category

export const pageQuery = graphql`
  query ($slug: String!, $limit: Int!, $skip: Int!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        ...PostTemplateFragment_starter
      }
    }
    wpCategory(slug: { eq: $slug }) {
      uri
      name
      description
    }
  }
`
