import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      Newcrossities: a weary travellers’ guide to the new curiosities of South
      London, New Cross, Deptford, and beyond. Curated and opinionated
      Underground, weird and funny Completely incomplete.
    </p>

    <h2>Pages</h2>

    <ul>
      <li>
        <Link to="/vegan-rasta/">Vegan Rasta</Link>
      </li>
      <li>
        <Link to="/the-queens-house/">The Queens House</Link>
      </li>
      <li>
        <Link to="/dzintara-cela/">Dzintara Cela</Link>
      </li>
      <li>
        <Link to="/rest-up-hostel/">Rest Up Hostel</Link>
      </li>
      <li>
        <Link to="/canary-wharf/">Canary Wharf</Link>
      </li>
      <li>
        <Link to="/burgess-park/">Burgess Park</Link>
      </li>
      <li>
        <Link to="/canada-water-library-cafe/">Canada Water Library Cafe</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
