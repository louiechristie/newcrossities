import React from "react"
import Loader from "react-spinners/BeatLoader"

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[100px]">
      <Loader className="block" />
    </div>
  )
}
