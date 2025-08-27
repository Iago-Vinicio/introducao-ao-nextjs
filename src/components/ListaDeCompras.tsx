"use client"

import { useState } from "react"
import { FaCheck, FaTimes } from "react-icons/fa"

export default function ListaDeCompras() {
  const [itens, setItens] = useState([
    { item: "Arroz", comprado: false },
    { item: "Leite", comprado: false },
    { item: "Macarrão", comprado: false },
    { item: "Sal", comprado: false },
    { item: "Açucar", comprado: false },
  ])

  const comprado = (index: number) => {
    setItens((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, comprado: !item.comprado } : item
      )
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="p-4 w-full max-w-sm border rounded ">
        <h1 className="text-center font-bold mb-4">Lista de Compras</h1>
        <ul>
          {itens.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span className={item.comprado ? "line-through" : "text-gray-800"}>
                {item.item}
              </span>
              <button onClick={() => comprado(index)}>
                {item.comprado ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-600" />}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
