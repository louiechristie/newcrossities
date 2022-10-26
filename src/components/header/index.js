import React from "react"
import { Menu } from "~/components/menu"
import { Branding } from "./Branding"
import { Slidemenu } from "./SlideMenu"
import { SearchModal } from "~/components/search/SearchModal"
import { useSiteSettings } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import Headroom from "react-headroom"
import clsx from "clsx"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import { Logo } from "./Logo"

export const Header = ({ ...props }) => {
  const siteSettings = useSiteSettings()
  const { logo } = useThemeOptions()

  return (
    <Headroom className="z-10">
      <header
        className={clsx(
          "py-1 shadow-md relative",
          "bg-headerBg dark:bg-dark-headerBg",
          "text-headerColor dark:text-dark-headerColor",
          "center-container"
        )}
        {...props}
      >
        <div className="flex flex-row items-center">
          <Logo />
          <div>{siteSettings.description}</div>
        </div>
        <div className={"flex justify-between"}>
          <div className="flex items-center">
            <Branding
              title={siteSettings.title}
              description={siteSettings.description}
            />
            <SearchModal />
          </div>
          <div className="flex items-center">
            <Menu orientation="H" className="hidden md:flex" />
            <Slidemenu className="md:hidden" />
          </div>
        </div>
      </header>
    </Headroom>
  )
}
