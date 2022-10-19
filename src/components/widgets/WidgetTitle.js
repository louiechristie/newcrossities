import React from "react"

export const WidgetTitle = ({ title, className = "", lightBg, ...props }) => {
  const borderStyle = `h-[1px] border-t flex-1 ${
    lightBg ? "border-text" : "border-dark-text"
  }  dark:border-dark-text `
  return (
    <div className={`flex items-center space-x-4 mb-5 ${className}`} {...props}>
      <div className={borderStyle} />
      <h3 className="mb-0 text-lg font-bold tracking-widest text-center uppercase widget-title">
        {title}
      </h3>
      <div className={borderStyle} />
    </div>
  )
}
