import React from "react"
import { Link } from "gatsby"

export const Branding = ({ title, description, ...props }) => {
  return (
    <div className="flex flex-col flex-1">
      <h1 className="mb-0 text-2xl tracking-wider uppercase" {...props}>
        <Link
          className="hover:text-accentColor hover:no-underline"
          to="/"
          rel="home"
        >
          {title}
        </Link>
      </h1>
    </div>
  )
}
