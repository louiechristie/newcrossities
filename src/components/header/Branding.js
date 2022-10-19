import React from "react"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import { Link } from "gatsby"
import { Logo } from "./Logo"

export const Branding = ({ title, ...props }) => {
  const { logo } = useThemeOptions()

  return (
    <div className="flex items-center h-full">
      {logo ? (
        <Logo />
      ) : (
        <h1 className="mb-0 text-2xl tracking-wider uppercase" {...props}>
          <Link
            className="hover:text-accentColor hover:no-underline"
            to="/"
            rel="home"
          >
            {title}
          </Link>
        </h1>
      )}
    </div>
  )
}
