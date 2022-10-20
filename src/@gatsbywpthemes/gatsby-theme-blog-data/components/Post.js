import React from "react"
import Post from "~/components/templates/Post"

const PostComponent = ({ data, pageContext }) => {
  return (
    <Post post={data.wpPost} ctx={pageContext} places={data.allWpPage?.nodes} />
  )
}
export default PostComponent
