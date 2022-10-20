import React from "react"
import { Archivepost } from "./ArchivePost"
import { Link, graphql, useStaticQuery } from "gatsby"
import Map from "~/components/Map"

export const PostsList = ({ posts, places, ...props }) => {
  return (
    <div {...props}>
      {places?.length > 0 && (
        <Map
          featured={places[Math.round(Math.random() * places.length - 1)]}
          places={places}
        />
      )}
      {posts?.map((post, index) => {
        return <Archivepost key={post.id} post={post} isFirst={index === 0} />
      })}
    </div>
  )
}
