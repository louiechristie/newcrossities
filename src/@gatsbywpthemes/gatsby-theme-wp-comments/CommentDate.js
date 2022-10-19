import React from "react"
import { format } from "date-fns"
export const CommentDate = ({ date }) => {
  const formatDate = date.split(" ").join("T")
  return (
    <div className="mb-2 text-xs italic font-light">
      <time className="entry-date published updated" dateTime={date}>
        {format(new Date(formatDate), "MMMM dd, yyyy")}
      </time>
    </div>
  )
}
