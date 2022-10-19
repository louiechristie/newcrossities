import React from "react"
import { MenuLink } from "./MenuLink"
import { Submenu } from "./Submenu"

export const MenuItem = ({
  menuItem,
  orientation,
  className = "",
  ...props
}) => {
  if (menuItem.children.length) {
    return <Submenu menuItem={menuItem} />
  } else {
    return (
      <div
        className={`menu-item flex items-center font-semibold ${
          menuItem.cssClasses
        } ${
          orientation === "V"
            ? "text-mobileMenuColor dark:text-dark-mobileMenuColor"
            : "text-text dark:text-dark-text "
        } ${className}`}
        key={menuItem.id}
        {...props}
      >
        <MenuLink
          menuItem={menuItem}
          className={` ${
            orientation === "V"
              ? "text-mobileMenuColor dark:text-dark-mobileMenuColor"
              : "text-text dark:text-dark-text "
          }`}
        />
      </div>
    )
  }
}
