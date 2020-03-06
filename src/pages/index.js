import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"

const Index = () => {
  const data = useStaticQuery(graphql`
    query GET_PAGES {
      wpgraphql {
        pages(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
          nodes {
            id
            uri
            pageId
            title
            content
            location {
              latitude
              longitude
            }
          }
        }
      }
    }
  `)

  const {
    wpgraphql: {
      pages: { nodes },
    },
  } = data

  const places = [...nodes].reverse()

  return (
    <Layout>
      <SEO title="Home" />

      <Map places={places} />

      <p className="select">Select a curiosity:</p>

      <ul>
        {nodes.map(place => {
          const { id, uri, title } = place

          return (
            <li key={id}>
              <Link to={uri}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Index
