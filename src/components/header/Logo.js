import React from "react"
import { Link, withPrefix } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"

export const Logo = () => {
  const { logo } = useThemeOptions()
  const img = logo

  return (
    <Link className="logo" to="/" rel="home">
      {logo && (
        <>
          {img.localFile ? (
            <GatsbyImage
              image={img.localFile.childImageSharp?.gatsbyImageData}
              alt="logo"
            />
          ) : (
            <img
              className="logo-img"
              src={
                withPrefix(logo)
              }
              alt="logo"
            />
          )}
        </>
      )}
    </Link>
  )
}
