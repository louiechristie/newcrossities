import React from "react"
import { Archivepost } from "./ArchivePost"

export const PostsList = ({ posts, ...props }) => {
  return (
    <div {...props}>
      {posts?.map((post, index) => {
        return <Archivepost key={post.id} post={post} isFirst={index === 0} />
      })}
    </div>
  )
}
