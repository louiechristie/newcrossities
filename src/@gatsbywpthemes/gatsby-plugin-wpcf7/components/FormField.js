import React from "react"
import clsx from "clsx"

export const FormField = ({ className, children }) => {
  return (
    <p className={clsx(`max-w-[30rem] mb-4 mx-auto ${className}`)}>
      {children}
    </p>
  )
}
