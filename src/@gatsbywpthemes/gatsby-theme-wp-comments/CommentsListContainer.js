import React from "react"

export const CommentsListContainer = ({ children }) => {
  return (
    <section>
      <h2 className="mb-6 text-center">Comments</h2>
      <ul
        className="p-0 mb-12"
        css={{
          ul: { marginLeft: 25, padding: 0 },
          li: { listStyle: "none", marginBottom: 2 },
        }}
      >
        {children}
      </ul>
    </section>
  )
}
