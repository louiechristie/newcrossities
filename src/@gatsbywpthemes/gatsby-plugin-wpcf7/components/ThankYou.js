import React from "react"

export const ThankYou = ({ message }) => {
  return (
    <div className="p-5 text-center text-green-500 bg-green-200 rounded-lg success">
      <p>{message}</p>
    </div>
  )
}
