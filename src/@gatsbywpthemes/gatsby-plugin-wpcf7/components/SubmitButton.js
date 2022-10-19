import React from "react"

export const SubmitButton = ({ disabled, children }) => {
  return (
    <div className="max-w-[30rem] mb-4 mx-auto">
      <button
        className="flex ml-auto submit-button btn btn-ghost"
        type="submit"
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  )
}
