import React from "react"
import { useMenuItems } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import { Submenu } from "./Submenu"
import { MenuItem } from "./MenuItem"

export const Menu = ({
  location = "PRIMARY",
  orientation,
  className,
  ...props
}) => {
  const menuItems = useMenuItems(location)

  return (
    menuItems && (
      <nav
        className={`main-menu flex   ${
          orientation === "V" ? "flex-col  menuV" : "space-x-5 menuH"
        } ${className ? className : ""}`}
        aria-label="main"
        {...props}
      >
        {menuItems.map((menuItem) => {
          if (menuItem.children.length) {
            return (
              <Submenu
                key={menuItem.id}
                menuItem={menuItem}
                orientation={orientation}
              />
            )
          } else {
            return (
              <MenuItem
                key={menuItem.id}
                menuItem={menuItem}
                orientation={orientation}
              />
            )
          }
        })}
      </nav>
    )
  )
}
