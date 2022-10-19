import { Link } from "gatsby"
import React from "react"

export const SearchResults = ({ posts }) => {
  return (
    !!posts.length && (
      <div>
        {posts.map((post) => {
          return (
            <div
              className="px-5 py-3 border-b border-gray-500 border-dashed last:border-none"
              key={post.slug}
            >
              <h4>
                <Link
                  className="text-text dark:text-dark-text hover:text-accentColor dark:hover:text-dark-accentColor"
                  to={post.uri}
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
              </h4>
            </div>
          )
        })}
      </div>
    )
  )
}
