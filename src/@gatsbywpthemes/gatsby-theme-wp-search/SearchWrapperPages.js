import React from "react"
import { SearchStats } from "@gatsbywpthemes/gatsby-theme-wp-search/src/SearchStats"

export const SearchWrapperPages = ({ children }) => {
  return (
    <section className="search-results-pages">
      <header className="px-5 py-3 bg-searchResultsHeaderBg dark:bg-dark-searchResultsHeaderBg text-searchResultsHeaderColor dark:text-dark-searchResultsHeaderColor">
        <h3 className="text-xl ">Pages</h3>
        <SearchStats type="PAGE" />
      </header>
      <div className="results">{children}</div>
    </section>
  )
}
