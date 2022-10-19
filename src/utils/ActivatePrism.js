import { useEffect } from "react"
import Prism from "prismjs"

export const ActivatePrism = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  }, [])
  return null
}
