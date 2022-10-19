import { graphql } from "gatsby"

export const fragments = graphql`
  fragment PostTemplateFragment_starter on WpPost {
    id
    uri
    slug
    title
    excerpt
    date

    featuredImage {
      node {
        ...GatsbyImageQuery_starter
      }
    }
    categories {
      nodes {
        id
        slug
        name
        uri
      }
    }
    headlesswp {
      pageTemplate
      skipTitle
    }
    author {
      node {
        name
        slug
        uri
        avatar {
          url
        }
      }
    }
    tags {
      nodes {
        name
        slug
        uri
      }
    }
  }

  fragment GatsbyImageQuery_starter on WpMediaItem {
    altText
    sourceUrl
    localFile {
      publicURL
      childImageSharp {
        gatsbyImageData(quality: 80, layout: FULL_WIDTH)
        original {
          height
          width
          src
        }
      }
    }
  }
`
