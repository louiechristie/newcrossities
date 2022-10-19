import React from "react"
import { CategoriesWidget, TagsWidget, RecentPosts, Newsletter } from "./index"
import { SocialFollows } from "~/components/social/SocialFollows"

export const Widget = ({ widget, lightBg }) => {
  switch (widget) {
    case "SocialFollow":
      return (
        <div>
          <SocialFollows lightBg={lightBg} />
        </div>
      )
    case "RecentPosts":
      return <RecentPosts lightBg={lightBg} />
    case "Categories":
      return <CategoriesWidget lightBg={lightBg} />
    case "Tags":
      return <TagsWidget lightBg={lightBg} />
    case "Newsletter":
      return process.env.GATSBY_MAILCHIMP_ENDPOINT ? (
        <Newsletter title="subscribe to our newsletter" lightBg={lightBg} />
      ) : null

    default:
      return ""
  }
}
