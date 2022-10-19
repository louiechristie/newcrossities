import React, { useEffect, useRef } from "react"

export const Alert = ({ alertMessages, setAlertMessages }) => {
  const timeoutRef = useRef(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setAlertMessages([])
    }, 8000)

    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [setAlertMessages])

  return (
    <div className="p-5 text-center text-red-500 bg-red-200 rounded-lg danger">
      <p>{alertMessages[0]}</p>
      <ul>
        {alertMessages.slice(1).map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  )
}
