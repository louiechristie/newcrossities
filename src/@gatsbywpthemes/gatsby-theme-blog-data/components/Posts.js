import React from "react"
import Posts from "~/components/templates/Posts"

const Blog = ({ data, pageContext }) => {
  return <Posts posts={data?.allWpPost} ctx={pageContext} />
}

export default Blog
