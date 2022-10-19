import React from "react"

export const Form = ({ children, ...props }) => {
  return (
    <form className="px-8 py-12 mb-8 shadow-lg contact-form" {...props}>
      {children}
    </form>
  )
}
