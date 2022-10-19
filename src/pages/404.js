import React from "react"
import { Layout } from "~/components/Layout"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"

const NotFoundPage = () => {
  return (
    <Layout location="page" page="404">
      <Seo title="404: Not found" />
      <article className="text-center">
        <h1 className="inline-block px-10 py-6 mb-10 border-8 border-double border-accentColor dark:border-dark-accentColor">
          404
        </h1>
        <div className="text-sm font-bold tracking-wider uppercase entry-content">
          <p>That page can't be found.</p>
          <p>It looks like nothing was found at this location.</p>
        </div>
      </article>
    </Layout>
  )
}
export default NotFoundPage
