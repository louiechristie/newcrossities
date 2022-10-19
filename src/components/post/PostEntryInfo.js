import React from "react"

import clsx from "clsx"
import { Date } from "./Date"
import { Author } from "./Author"

export const PostEntryInfo = ({ post, className, ...props }) => {
  return (
    <div>
      <div
        className={clsx(
          "inline-block post-info",
          "italic text-sm text-text dark:text-teal-900",
          "rounded-md bg-infoBg dark:bg-dark-infoBg",
          "px-4 py-3",
          className
        )}
        {...props}
      >
        <span>Posted on:</span> <Date date={post.date} /> by{" "}
        <Author
          author={post.author.node}
          className="font-bold hover:opacity-70 !text-text !dark:text-teal-900"
        />
      </div>
    </div>
  )
}
