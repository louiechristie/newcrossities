import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { WidgetTitle } from "./WidgetTitle"

const ALL_CATEGORIES_QUERY = graphql`
  query GetCategories {
    allWpCategory(filter: { count: { gt: 0 } }, limit: 100) {
      nodes {
        name
        slug
        uri
      }
    }
  }
`

export const CategoriesWidget = (props) => {
  const data = useStaticQuery(ALL_CATEGORIES_QUERY)
  const { nodes } = data.allWpCategory
  const { lightBg, ...rest } = props
  return (
    !!nodes.length && (
      <section className="widget widget-categories" {...rest}>
        <WidgetTitle title="Categories" lightBg={lightBg} />
        <div className="flex flex-col items-start space-y-3">
          {nodes.map((category) => (
            <Link
              key={category.slug}
              to={`${category.uri}`}
              className={`text-upper-spaced hover:text-primary`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>
    )
  )
}
