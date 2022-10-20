import React from "react"
import Posts from "~/components/templates/Posts"

const Blog = ({ data, pageContext }) => {
  return (
    <Posts
      posts={data?.allWpPost}
      ctx={pageContext}
      places={data?.allWpPage?.nodes}
    />
  )
}

export default Blog
