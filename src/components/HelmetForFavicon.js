import React from "react"
import { Helmet } from "react-helmet"
import { getSrc } from "gatsby-plugin-image"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"

export const HelmetForFavicon = () => {
  const { faviconFile } = useThemeOptions()

  return (
    faviconFile && (
      <Helmet>
        <link
          rel="icon"
          href={getSrc(faviconFile.childImageSharp?.s32)}
          sizes="32x32"
        />
        <link
          rel="icon"
          href={getSrc(faviconFile.childImageSharp?.s192)}
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href={getSrc(faviconFile.childImageSharp?.s180)}
        />
        <meta
          name="msapplication-TileImage"
          content={getSrc(faviconFile.childImageSharp?.s270)}
        />
      </Helmet>
    )
  )
}
