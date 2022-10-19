import React, { useState } from "react"
import Collapsible from "@kunukn/react-collapse"
import {
  GoChevronDown as ChevronDown,
  GoChevronRight as ChevronRight,
} from "react-icons/go"

export const Collapse = ({ trigger, children, className, ...props }) => {
  const [open, setOpen] = useState(false)
  const iconStyle =
    "font-bold text-[20px] text-mobileMenuColor dark:text-dark-mobileMenuColor"

  return (
    <div {...props}>
      <button
        aria-label="Open menu item"
        onClick={() => setOpen(!open)}
        className={`flex w-full justify-between ${className ? className : ""} `}
      >
        {trigger}{" "}
        {open ? (
          <ChevronDown className={iconStyle} />
        ) : (
          <ChevronRight className={iconStyle} />
        )}
      </button>
      <Collapsible
        className="duration-500 ease-out transition-max-h"
        isOpen={open}
      >
        {children}
      </Collapsible>
    </div>
  )
}
