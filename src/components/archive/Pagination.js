import React from "react"
import { Link } from "gatsby"
import clsx from "clsx"

const renderPreviousLink = (previousPagePath) => {
  if (previousPagePath) {
    return (
      <div className="flex items-center group">
        <div className="-mr-4 prev-next-anim" />
        <Link
          className={clsx(
            "prev-next-text",
            "transition duration-700 group-hover:translate-x-0",
            "ml-6 -translate-x-7"
          )}
          to={previousPagePath}
        >
          <span>Previous</span>
        </Link>
      </div>
    )
  } else {
    return <div className="text-gray-400 prev-next-text">Previous</div>
  }
}

const renderNextLink = (nextPagePath) => {
  if (nextPagePath) {
    return (
      <div className="flex items-center group">
        <Link
          className={clsx(
            "prev-next-text",
            "transition duration-700 group-hover:translate-x-0",
            "mr-6 translate-x-7"
          )}
          to={nextPagePath}
        >
          <span className="prev-next-text">Next</span>
        </Link>
        <div className="-ml-4 prev-next-anim" />
      </div>
    )
  } else {
    return (
      <div className="text-gray-400 prev-next-text w-[70px] text-right">
        Next
      </div>
    )
  }
}

export const Pagination = ({ ctx }) => {
  const { humanPageNumber, nextPagePath, previousPagePath } = ctx
  // return empty string if there is only one page
  if (humanPageNumber === 1 && !nextPagePath) {
    return ""
  }
  return (
    <nav className="flex justify-between mt-16">
      {renderPreviousLink(previousPagePath)}
      <span
        aria-current="page"
        className={clsx(
          "page-numbers current",
          "font-bold font-info text-center"
        )}
      >
        {humanPageNumber}
      </span>
      {renderNextLink(nextPagePath)}
    </nav>
  )
}
