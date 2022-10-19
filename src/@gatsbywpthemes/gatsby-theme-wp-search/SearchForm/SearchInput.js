import React from "react"
import clsx from "clsx"

export const SearchInput = (props) => {
  return (
    <input
      css={{
        "::-webkit-search-cancel-button": { WebkitAppearance: "none" },
      }}
      className={clsx(
        "search-box",
        "lg:w-[80%] px-5",
        "bg-transparent text-text dark:text-dark-text ",
        "text-3xl",
        "border-0 border-l-[5px] border-accentColor dark:border-dark-accentColor",
        "focus:outline-none focus:ring-gray-200 dark:focus:ring-opacity-20 focus:border-0 focus:border-l-[5px] focus:placeholder-transparent focus:border-accentColor dark:focus:border-dark-accentColor"
      )}
      placeholder="search here..."
      aria-label="Search here"
      {...props}
    />
  )
}
