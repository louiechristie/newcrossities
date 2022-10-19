import React from "react"
import clsx from "clsx"

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  const inputComponentTypes = ["email", "url", "text", "tel", "date", "number"]
  if (inputComponentTypes.includes(props.type)) {
    return (
      <input
        className={clsx("styled-input w-full", className)}
        {...props}
        ref={ref}
      />
    )
  }
  return (
    <input
      className={clsx(className)}
      {...props}
      css={{
        '&[type="range"]': {
          width: "100%",
        },
        '&[type="file"]': {
          padding: "12px 0",
        },
        '&[type="radio"], &[type="checkbox"]': {
          margin: "8px 4px 8px 0",
        },
      }}
      ref={ref}
    />
  )
})
