"use client"

import { useState } from "react"
import { CiPlay1, CiPause1 } from "react-icons/ci";

export default function ButtonMusic() {
  const [isMusic, setIsMusic] = useState(false)

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <button
        onClick={() => setIsMusic(!isMusic)}
        className={`
          flex items-center space-x-3 px-6 py-3 rounded-lg
          ${isMusic ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}
          hover:brightness-90 transition
        `}
      >
        {isMusic ? (
          <CiPause1 className="text-2xl" />
        ) : (
          <CiPlay1 className="text-2xl" />
        )}
        <span className="font-medium text-lg">
          {isMusic ? "Pause" : "Play"}
        </span>
      </button>
    </div>
  )
}
