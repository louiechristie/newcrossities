import React from "react"
import { SocialFollows } from "~/components/social"
import clsx from "clsx"

export const Footer = ({ ...props }) => {
  return (
    <footer
      className={clsx(
        "mt-auto",
        "py-5",
        "bg-footerBg dark:bg-dark-footerBg",
        "text-footerColor dark:text-dark-footerColor"
      )}
      {...props}
    >
      <div className="center-container">
        <div className={`text-center mb-3`}>
          © {new Date().getFullYear()} | Built with{`   `}
          <a
            href="https://gatsbywpthemes.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby WP Themes
          </a>
        </div>
        <SocialFollows />
      </div>
    </footer>
  )
}
