import React from "react"
import clsx from "clsx"

export const Archivetitle = ({ name, text, className, ...props }) => {
  return (
    <div
      className={clsx(
        "inline-block",
        "px-5 py-3 rounded-md shadow-lg",
        "bg-archiveTitleBg dark:bg-dark-archiveTitleBg",
        className
      )}
      {...props}
    >
      <h1
        className={`text-archiveTitleColor dark:text-dark-archiveTitleColor uppercase text-2xl`}
      >
        {text} {name}
      </h1>
    </div>
  )
}
