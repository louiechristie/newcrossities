import React from "react"

export const CancelButton = (props) => {
  return (
    <button
      className="flex ml-auto transition duration-500 comment-button-cancel text-upper-spaced hover:text-red-400"
      onClick={props.onClick}
    >
      <span>Cancel</span>
    </button>
  )
}
