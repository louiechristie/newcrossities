import React from "react"
import clsx from "clsx"

export const ReplyButton = (props) => {
  return (
    <button
      className={clsx(
        "flex flex-col ml-auto  text-center text-current transition duration-500 comment-button-reply text-upper-spaced group hover:text-primary",
        "!text-base"
      )}
      {...props}
    >
      <span>Reply</span>
      <div
        className={clsx(
          "h-[1px] w-full  bg-current mt-1",
          "transition duration-500 scale-x-0",
          "group-hover:scale-x-100"
        )}
      />
    </button>
  )
}
