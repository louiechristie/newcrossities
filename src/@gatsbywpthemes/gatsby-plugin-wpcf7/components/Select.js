import React, { forwardRef } from "react"

export const Select = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <select
      className={`bg-transparent ml-2 w-full mt-2 focus:outline-none focus:ring-primary ${className}`}
      {...props}
      ref={ref}
    >
      {children}
    </select>
  )
})
