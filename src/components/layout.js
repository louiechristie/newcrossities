/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>
      <footer
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.0875rem`,
          marginTop: `3rem`,
          borderRadius: `5px`,
          color: `white`,
          backgroundColor: `rebeccapurple`,
        }}
      >
        <p>
          Newcrossities is a weary travellers’ guide to the new curiosities of
          South London, New Cross, Deptford, and beyond:
        </p>
        <ul>
          <li>Curated and opinionated.</li>
          <li>
            <strong>Underground, weird and funny.</strong>
          </li>
          <li>Completely incomplete</li>
        </ul>
        © {new Date().getFullYear()} - Made by
        {` `}
        <Link
          to="https://www.louiechristie.com"
          style={{
            color: `white`,
          }}
        >
          Louie Christie
        </Link>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
