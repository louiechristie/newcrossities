import React from "react"

export const Error = ({ error }) => {
  if (error) {
    switch (error.type) {
      case "required":
        return <span className="error">{error.message || "Required"}</span>
      case "filesize":
        return (
          <span className="error">{error.message || "Invalid filesize"}</span>
        )
      case "accept":
        return (
          <span className="error">{error.message || "Invalid file type"}</span>
        )
      default:
        return (
          <span className="italic text-red-500 error">
            {error.message || "Invalid value"}
          </span>
        )
    }
  } else {
    return null
  }
}
