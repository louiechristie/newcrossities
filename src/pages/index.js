import React from "react"
import { Link } from "gatsby"
import Map from "../components/map"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const places = [
    {
      position: [51.5318912, -0.1268506],
      url: "/eurostar-international-arrivals/",
      title: "Eurostar International Arrivals",
    },
    {
      position: [51.4710792, -0.0702339],
      url: "/vegan-rasta/",
      title: "Vegan Rasta",
    },
    {
      position: [51.4812, -0.003783],
      url: "/the-queens-house/",
      title: "The Queens House",
    },
    {
      position: [56.9515043, 24.1078629],
      url: "/dzintara-cela/",
      title: "Dzintara Cela",
    },
    {
      position: [51.4938, -0.0905],
      url: "/rest-up-hostel/",
      title: "Rest Up Hostel",
    },
    {
      position: [51.503611, -0.018333],
      url: "/canary-wharf/",
      title: "Canary Wharf",
    },
    {
      position: [51.483576, -0.081841],
      url: "/burgess-park/",
      title: "Burgess Park",
    },
    {
      position: [51.4977, -0.04918],
      url: "/canada-water-library-cafe/",
      title: "Canada Water Library Cafe",
    },
  ]

  return (
    <Layout>
      <SEO title="Home" />

      <p className="select">Select a curiosity:</p>

      {typeof window !== "undefined" ? <Map places={places} /> : null}

      <ul>
        {places.map(place => {
          return (
            <li>
              <Link to={place.url}>{place.title}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default IndexPage
