import React, { forwardRef } from "react"

export const Textarea = forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={`styled-input w-full ${className}`}
      {...props}
      ref={ref}
    />
    // has to be this way className={`custom-classes for-styling ${className}`}
  )
})
