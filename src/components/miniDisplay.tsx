'use client'

import { useState } from "react"
import Image from "next/image"

export default function Calculadora() {
  const [display, setDisplay] = useState("")
  const MAX = 16

  const addInput = (input: string) => {
    if (display.length >= MAX) return alert(`Máximo de ${MAX} caracteres!`)
    
    if (["+", "-", "*", "/"].includes(input)) {
      if (/[+\-*/]/.test(display)) return alert("Somente uma operação por vez!")
    }
    setDisplay(display + input)
  }

  const sum = () => {
    const value = display.split("+")
    const resultado = value.reduce((acc, val) => acc + (parseFloat(val) || 0), 0)
    setDisplay(String(resultado))
  }

  const sub = () => {
    const value = display.split("-")
    const resultado = value.reduce((acc, val, i) =>
      i === 0 ? (parseFloat(val) || 0) : acc - (parseFloat(val) || 0)
    , 0)
    setDisplay(String(resultado))
  }

  const mult = () => {
    const value = display.split("x")
    const resultado = value.reduce((acc, val, i) =>
      i === 0 ? (parseFloat(val) || 1) : acc * (parseFloat(val) || 1)
    , 1)
    setDisplay(String(resultado))
  }

  const div = () => {
    const value = display.split("÷")
    const resultado = value.reduce((acc, val, i) => {
      const num = parseFloat(val)
      if (i === 0) return isNaN(num) ? 0 : num
      return num === 0 ? NaN : acc / num
    }, 0)
    setDisplay(isNaN(resultado) ? "Erro" : String(resultado))
  }

  const calculate = () => {
    if (display.includes("+")) return sum()
    if (display.includes("-")) return sub()
    if (display.includes("x")) return mult()
    if (display.includes("÷")) return div()
  }

  const clear = () => setDisplay("")

  const backspace = () => setDisplay(display.slice(0, -1))

  return (
    <div className="flex flex-col items-center mt-10 gap-4">
      {/* Display */}
      <div className="flex justify-start items-center border border-gray-400 rounded-lg px-4 py-3 w-64 h-16 text-2xl font-bold bg-white shadow overflow-x-auto whitespace-nowrap">
        {display}
      </div>

      {/* Teclado */}
      <div className="grid grid-cols-4 gap-3 w-64">
        <button className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500" onClick={() => addInput("7")}>7</button>
        <button className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500" onClick={() => addInput("8")}>8</button>
        <button className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500" onClick={() => addInput("9")}>9</button>
        <button className="bg-purple-600 p-3 rounded-lg hover:bg-purple-700" onClick={() => addInput("+")}>+</button>
        <button className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500" onClick={() => addInput("4")}>4</button>
        <button className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500" onClick={() => addInput("5")}>5</button>
        <button className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500" onClick={() => addInput("6")}>6</button>
        <button className="bg-purple-600 p-3 rounded-lg hover:bg-purple-700" onClick={() => addInput("-")}>-</button>
        <button className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500" onClick={() => addInput("1")}>1</button>
        <button className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500" onClick={() => addInput("2")}>2</button>
        <button className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500" onClick={() => addInput("3")}>3</button>
        <button className="bg-purple-600 p-3 rounded-lg hover:bg-purple-700" onClick={() => addInput("x")}>×</button>
        <button className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500" onClick={clear}>C</button>
        <button className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500" onClick={() => addInput("0")}>0</button>
        <button className="bg-violet-400 p-3 rounded-lg hover:bg-violet-500 flex justify-center items-center" onClick={backspace}>
          <Image src="https://cdn-icons-png.flaticon.com/512/4209/4209885.png" alt="Backspace" width={20} height={20} />
        </button>
        <button className="bg-purple-600 p-3 rounded-lg hover:bg-purple-700" onClick={() => addInput("÷")}>÷</button>
        <button className="col-span-4 bg-green-600 p-3 rounded-lg hover:bg-green-700" onClick={calculate}>=</button>
      </div>
    </div>
  )
}
