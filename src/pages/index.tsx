import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as dayjs from "dayjs"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Map from "../components/Map"

dayjs().format()
const relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)

const Index = () => {
  const { allWpPage } = useStaticQuery(graphql`
    query GET_PAGES {
      allWpPage {
        nodes {
          id
          uri
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
  `)

  if (!allWpPage?.nodes || allWpPage?.nodes === 0) return null

  console.log("allWpPage: ", allWpPage)

  const places = allWpPage?.nodes?.filter(
    ({ location }) => location?.latitude && location?.longitude
  )

  return (
    <Layout>
      <SEO title="Home" />

      {places && <Map featured={places[Math.round(Math.random() * places.length - 1)]} nodes={places} />}
      
      <div>
        <div className="entry-content">
          <p className="select">Select a curiosity:</p>

          <ul>
            {places.slice(0).reverse().map((place) => {
              const { id, uri, title, date } = place

              return (
                <li key={id}>
                  <Link to={uri}>{title}</Link>{" "}
                  <span className="date">added {dayjs(date).fromNow()}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Index
