import React from "react"
import ContentParser from "@gatsbywpthemes/gatsby-plugin-wordpress-parser"
import { cf7ParserFunction } from "@gatsbywpthemes/gatsby-plugin-wpcf7"

export const ParsedContent = ({ content }) => {
  const parserFunctions = [cf7ParserFunction]

  return <ContentParser content={content} customFn={parserFunctions} />
}
