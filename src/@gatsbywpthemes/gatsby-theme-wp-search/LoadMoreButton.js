import React from "react"
import { Loading } from "./Loading"

export const LoadMoreButton = ({ clickable, loadMore }) => {
  return clickable ? (
    <button
      className="btn text-text dark:text-dark-text"
      type="button"
      onClick={loadMore}
    >
      Load More
    </button>
  ) : (
    <Loading />
  )
}
