"use client"

import Image from "next/image"
import { useState } from "react"

export const CargarEventoEspecial = () => {

  const [file, setFile] = useState(null)
  const [image, setImage ] = useState(null)
  const [fecha, setFecha] = useState(null)
  const [titulo, setTitulo] = useState("")

  return (
    <div className="flex flex-col justify-center">
      <form onSubmit={async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('image', file)
        formData.append('titulo', titulo)
        formData.append('fecha', fecha )


        const response = await fetch('/api/uploadEspecial', {
          method: 'POST',
          body: formData
        })

        const data = await response.json()

        setImage(data.url)
        console.log(data);
      }}>


        <input type="file" onChange={(e) => {
          setFile(e.target.files[0])
        }} />

        <input type="date" onChange={(e) => setFecha(e.target.value)}/>
        <input type="text" className="border-solid border-1 border-slate-800 text-black" onChange={(e) => setTitulo(e.target.value)}/>


        <button type="submit" className="text-black text-sm bg-slate-700 p-2">Enviar</button>
      </form>

    </div>
  )
}
