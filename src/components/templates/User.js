import React from "react"
import { Layout } from "~/components/Layout"
import { Archive } from "~/components/archive"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"

const User = ({ user, ctx }) => {
  const { name, posts, uri, description } = user
  const { humanPageNumber, numberOfPages, yoastSeo, seo } = ctx

  return (
    <Layout page={user} type="user">
      <Seo
        title={`Author Archives: ${name}`}
        humanPageNumber={humanPageNumber}
        numberOfPages={numberOfPages}
        uri={uri}
        yoastSeo={yoastSeo}
        seo={seo}
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

export default User
