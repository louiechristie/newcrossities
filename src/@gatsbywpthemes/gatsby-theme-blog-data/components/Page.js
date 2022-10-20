import React from "react"
import Page from "~/components/templates/Page"

const PageComponent = ({ data, pageContext }) => {
  return (
    <Page page={data.wpPage} ctx={pageContext} places={data.allWpPost?.nodes} />
  )
}
export default PageComponent
