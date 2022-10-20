import React from "react"
import { Layout } from "~/components/Layout"
import { Sidebar } from "~/components/Sidebar"
import { PostEntry } from "~/components/post/PostEntry"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import { Comments } from "@gatsbywpthemes/gatsby-theme-wp-comments/src"
import clsx from "clsx"
import Map from "~/components/Map"

const Post = ({ post, ctx, places }) => {
  const { title, uri, headlesswp, location, id } = post
  const { widgetAreas, layoutWidth, addWordPressComments } = useThemeOptions()

  const pageTemplate = headlesswp?.pageTemplate || "default"
  const { sidebarWidgets } = widgetAreas

  const hasSidebar = pageTemplate.includes("sidebar") && sidebarWidgets

  const postWidth = layoutWidth.post || "xl"

  const featuredImage =
    post.featuredImage?.node.localFile.childImageSharp?.original

  return (
    <Layout page={post} type="post">
      <Seo
        title={title}
        uri={uri}
        yoastSeo={ctx.yoastSeo}
        seo={ctx.seo}
        featuredImage={
          featuredImage && {
            src: featuredImage.src,
            width: featuredImage.width,
            height: featuredImage.height,
          }
        }
      />
      <div
        className={`mainContainer mx-auto ${
          hasSidebar
            ? `max-w-xl lg:grid xl:grid-cols-3 grid-cols-10 gap-8`
            : pageTemplate.includes("full")
            ? `max-w-full`
            : `${
                postWidth === "md"
                  ? "max-w-md"
                  : postWidth === "lg"
                  ? "max-w-lg"
                  : "max-w-xl"
              }`
        }`}
      >
        <PostEntry
          location="single"
          post={post}
          ctx={ctx}
          className={clsx("xl:col-span-2 col-span-6", "space-y-10", {
            "order-2": pageTemplate.includes("left"),
          })}
        />

        {location?.longitude && location?.latitude && (
          <>
            <div className="entry-content">
              <h2 className="location">Location</h2>

              <figure>
                <Map featured={{ id, title, uri, location }} places={places} />

                <figcaption>
                  Navigate there using{" "}
                  <a
                    href={`https://maps.google.com/?q=${location?.latitude},${location?.longitude}&ll=${location?.latitude},${location?.longitude}`}
                  >
                    Google Maps
                  </a>{" "}
                  <a
                    href={`http://maps.apple.com/?sll=${location?.latitude},${location?.longitude}&z=10&t=s`}
                  >
                    Apple Maps
                  </a>
                  , or{" "}
                  <a href={`geo:${location?.latitude},${location?.longitude}`}>
                    another map app
                  </a>
                </figcaption>
              </figure>
            </div>
          </>
        )}

        {hasSidebar && (
          <div className={clsx("xl:col-span-1 col-span-4 mt-10 lg:mt-0")}>
            <Sidebar widgets={sidebarWidgets} />
          </div>
        )}
      </div>
      {addWordPressComments && <Comments post={post} />}
    </Layout>
  )
}

export default Post
