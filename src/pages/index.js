import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as dayjs from 'dayjs'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/map"

dayjs().format()
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

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
            date
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

  const places = nodes.filter(({location}) => (location?.latitude && location?.longitude));

  return (
    <Layout>
      <SEO title="Home" />

      <Map featured={places[places.length]} />

      <p className="select">Select a curiosity:</p>

      <ul>
        {places.map(place => {
          const { id, uri, title, date } = place

          return (
            <li key={id}>
              <Link to={uri}>{title}</Link> <span className="date">added {dayjs(date).fromNow()}</span>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Index
