import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page not found" />
    <h1>Page Not Found</h1>
    <p>Unfortunately we can't find that page.</p>

    <p>
      <Link to="/">Back to home page</Link>
    </p>
  </Layout>
)

export default NotFoundPage
