import React from "react"

export const Form = (props) => {
  const { children, ...rest } = props
  return (
    <div>
      <form {...rest}>
        <div className="flex">{children}</div>
      </form>
    </div>
  )
}
