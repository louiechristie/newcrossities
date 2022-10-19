import React from "react"
export const Form = (props) => {
  const { children, ...rest } = props
  return (
    <form
      className="flex flex-wrap justify-between p-4 mt-8 bg-white rounded-lg sm:p-8 dark:bg-ultraDark"
      css={{
        ".comment &": {
          boxShadow: "none",
        },
      }}
      {...rest}
    >
      {children}
    </form>
  )
}
