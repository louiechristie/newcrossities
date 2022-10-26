import React from "react"
import { Menu } from "~/components/menu"
import { Branding } from "./Branding"
import { Slidemenu } from "./SlideMenu"
import { SearchModal } from "~/components/search/SearchModal"
import { useSiteSettings } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import Headroom from "react-headroom"
import clsx from "clsx"

export const Header = ({ ...props }) => {
  const siteSettings = useSiteSettings()

  return (
    <Headroom className="z-10">
      <header
        className={clsx(
          "py-5 shadow-md relative",
          "bg-headerBg dark:bg-dark-headerBg",
          "text-headerColor dark:text-dark-headerColor"
        )}
        {...props}
      >
        <div className={"flex justify-between center-container items-center"}>
          <div className="flex space-x-3 items-center">
            <Branding title={siteSettings.title} />
            <div>{siteSettings.description}</div>
            <SearchModal />
          </div>
          <div className="flex items-center space-x-5">
            <Menu orientation="H" className="hidden md:flex" />
            <Slidemenu className="md:hidden" />
          </div>
        </div>
      </header>
    </Headroom>
  )
}
