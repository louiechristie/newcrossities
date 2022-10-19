import React from "react"
import slashes from "remove-trailing-slash"
import { createLocalLink } from "~/utils"
import { Link } from "gatsby"

import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"

export const MenuLink = ({ menuItem, ...props }) => {
  const { wordPressUrl } = useThemeOptions()
  let url = menuItem.url

  if (
    !url.includes(wordPressUrl) &&
    (url.startsWith("https://") || url.startsWith("http://"))
  ) {
    const targetRelAttrs =
      menuItem.target === "_blank"
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {}
    return (
      <a href={menuItem.url} {...targetRelAttrs} {...props}>
        {menuItem.label}
      </a>
    )
  } else {
    return menuItem.url !== "#" ? (
      menuItem.url === wordPressUrl ? (
        <Link
          to="/"
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
          {...props}
        />
      ) : (
        <Link
          to={createLocalLink(menuItem.url, slashes(wordPressUrl))}
          dangerouslySetInnerHTML={{ __html: menuItem.label }}
          {...props}
        />
      )
    ) : (
      menuItem.label
    )
  }
}
