import { graphql } from "gatsby"
import User from "~/@gatsbywpthemes/gatsby-theme-blog-data/components/User"
export default User

export const pageQuery = graphql`
  query ($slug: String!, $limit: Int!, $skip: Int!) {
    allWpPost(
      filter: { author: { node: { slug: { eq: $slug } } } }
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: date }
    ) {
      nodes {
        ...PostTemplateFragment_starter
      }
    }
    wpUser(slug: { eq: $slug }) {
      nicename
      nickname
      name
      slug
      id
      uri
      description
      avatar {
        url
      }
    }
  }
`
