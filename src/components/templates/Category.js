import React from "react"
import { Layout } from "~/components/Layout"
import { Archive } from "~/components/archive"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"

const Category = ({ category, ctx }) => {
  const { name, posts, uri, description } = category
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx

  return (
    <Layout page={category} type="category">
      <Seo
        title={`${name} Archives`}
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
        yoastSeo={yoastSeo}
        seo={seo}
        uri={uri}
      />

      <Archive
        posts={posts.nodes}
        ctx={ctx}
        name={name}
        description={description}
      />
    </Layout>
  )
}

export default Category
