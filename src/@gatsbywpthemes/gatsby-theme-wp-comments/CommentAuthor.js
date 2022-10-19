import React from "react"

export const CommentAuthor = ({ name, url }) => {
  return url ? (
    <a
      className="text-xs font-light comment-author text-upper-spaced"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  ) : (
    <span className="text-xs font-light comment-author text-upper-spaced">
      {name}
    </span>
  )
}
