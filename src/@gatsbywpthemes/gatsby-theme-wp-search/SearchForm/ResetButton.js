import React from "react"
import { MdClose as CloseIcon } from "react-icons/md"

export const ResetButton = (props) => {
  return (
    <button
      className="reset-button text-text dark:text-dark-text"
      aria-label="Reset Search"
      {...props}
    >
      <CloseIcon />
    </button>
  )
}
