import React from "react"
import { Layout } from "~/components/Layout"
import { Sidebar } from "~/components/Sidebar"
import { ParsedContent, ActivatePageScripts } from "~/utils"
import { Seo } from "@gatsbywpthemes/gatsby-plugin-wp-seo"
import { useThemeOptions } from "@gatsbywpthemes/gatsby-theme-blog-data/src/hooks"
import clsx from "clsx"
import Map from "~/components/Map"

const Page = ({ page, ctx, places }) => {
  const { title, isFrontPage, content, uri, headlesswp, location, id } = page
  const { widgetAreas, layoutWidth } = useThemeOptions()
  const { sidebarWidgets } = widgetAreas

  const pageTemplate = headlesswp?.pageTemplate || "default"
  const hasSidebar = pageTemplate.includes("sidebar") && sidebarWidgets

  const skipTitle = headlesswp?.skipTitle || false
  const postWidth = layoutWidth.post || "xl"

  const featuredImage =
    page.featuredImage?.node.localFile.childImageSharp?.original

  return (
    <Layout page={page} type="page">
      <Seo
        isFrontPage={isFrontPage}
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
      <article>
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
          }
          }`}
        >
          <div
            className={clsx("pb-5", "xl:col-span-2 col-span-7", "", {
              "order-2": pageTemplate.includes("left"),
              "p-5 sm:p-10 card": !pageTemplate.includes("full"),
            })}
          >
            {!skipTitle && !pageTemplate.includes("full") && (
              <h1
                dangerouslySetInnerHTML={{ __html: title }}
                className="mb-10 text-center uppercase"
              />
            )}
            <div className={clsx("content")}>
              <ActivatePageScripts />
              <ParsedContent content={content} />

              {location?.longitude && location?.latitude && (
                <>
                  <div className="entry-content">
                    <h2 className="location">Location</h2>

                    <figure>
                      <Map
                        featured={{ id, title, uri, location }}
                        places={places}
                      />

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
                        <a
                          href={`geo:${location?.latitude},${location?.longitude}`}
                        >
                          another map app
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </>
              )}
            </div>
          </div>
          {hasSidebar && (
            <div className={clsx("xl:col-span-1 col-span-3")}>
              <Sidebar widgets={sidebarWidgets} />
            </div>
          )}
        </div>
      </article>
    </Layout>
  )
}

export default Page
