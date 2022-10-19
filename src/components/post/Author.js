import React from "react"
import { Link } from "gatsby"

export const Author = ({ author, ...props }) => {
  const { name, slug } = author
  return (
    <Link aria-label={`visit ${name} page`} to={`/author/${slug}`} {...props}>
      {name}
    </Link>
  )
}
