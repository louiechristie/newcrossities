import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"

const Index = () => {
  const data = useStaticQuery(graphql`
    query GET_PAGES {
      wpgraphql {
        pages {
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

  const places = data.wpgraphql.pages.nodes

  return (
    <Layout>
      <SEO title="Home" />

      <p className="select">Select a curiosity:</p>

      <Map places={places} />

      <ul>
        {places.map(place => {
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
