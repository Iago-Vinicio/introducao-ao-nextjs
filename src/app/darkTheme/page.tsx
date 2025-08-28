'use client'

import ToogleDark from "@/components/toogleDark"
import { useState } from "react"

export default function DarkTheme() {
  
  const [isDark, setIsDark] = useState(false)
  
   const  handleToogleTheme = () => {
        setIsDark(isDark => !isDark)
  }

  return (
    <div className={` flex justify-center h-screen items-center flex-col transition-all duration-800
    ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <h1 className="font-bold text-xl py-2">{isDark ? 'Dark Theme' : 'Light Theme' }</h1>
    
    <ToogleDark onToggle={handleToogleTheme}/>
    </div>
  )
}
