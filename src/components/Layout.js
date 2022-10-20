import React from "react"
import { Footer } from "./footer"
import { Header } from "./header"
import clsx from "clsx"
import Helmet from "react-helmet"
import { HelmetForFavicon } from "./HelmetForFavicon"

export const Layout = ({ children, page, type = "page", ...props }) => {
  const layoutClass = page !== undefined ? (page.slug ? page.slug : page) : ""
  const pageTemplate = page?.headlesswp?.pageTemplate

  const fullWidthClass = pageTemplate === "full width" ? "fullWidth" : ""
  const devMode = process.env.NODE_ENV === "development"

  return (
    <div
      className={clsx(
        "flex min-h-screen flex-col",
        `${layoutClass}-${type}`,
        fullWidthClass
      )}
    >
      <HelmetForFavicon />
      <Helmet
        bodyAttributes={{
          class: devMode ? "debug-screens" : "",
        }}
      />
      <Header />
      <main
        className={`${
          pageTemplate !== "full width" ? "py-16 center-container" : "pb-10"
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}
