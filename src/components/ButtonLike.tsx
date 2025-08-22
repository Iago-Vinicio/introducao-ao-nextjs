"use client"

import { useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"

export default function ButtonLike() {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => setIsLiked(!isLiked)}
        className={`flex items-center space-x-3 px-6 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors 
          ${isLiked ? "text-red-500" : "text-gray-400 hover:text-gray-500"}`}
      >
        {isLiked ? (
          <FaHeart className="text-2xl font-bold" />
        ) : (
          <FaRegHeart className="text-2xl font-bold" />
        )}
        <span className="text-lg font-bold">
          {isLiked ? "Curtido" : "Curtir"}
        </span>
      </button>
    </div>
  )
}
