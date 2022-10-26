import React from "react"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import { Link } from "gatsby"
import { Logo } from "./Logo"

export const Branding = ({ title, description, ...props }) => {
  const { logo } = useThemeOptions()

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <Logo />
        <div>{description}</div>
      </div>

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
