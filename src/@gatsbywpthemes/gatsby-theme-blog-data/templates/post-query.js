import { graphql } from "gatsby"
import SinglePost from "~/@gatsbywpthemes/gatsby-theme-blog-data/components/Post"

export default SinglePost

export const pageQuery = graphql`
  query ($uri: String!) {
    wpPost(uri: { eq: $uri }) {
      content
      commentStatus
      databaseId
      ...PostTemplateFragment_starter
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
