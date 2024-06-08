"use client"

import React from 'react'
import Image from "next/image";
import DashBoardInfo from "../../(components)/DashBoardInfo";

import { signIn, useSession, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { TbLogout2 } from "react-icons/tb";
import { GiPrayer } from "react-icons/gi";
import Ofrenda from '../../public/OFRENDA.svg'
import Diezmo from '../../public/DIEZMO.svg'
import Donar from '../../public/DONAR.svg'
import Primicia from '../../public/PRIMICIA.svg'
import Logo from '../../public/logo crs.svg'
import DashBoardInfoContenido from '@/app/(components)/DashBoardInfoContenido';

const DashBoard = () => {

  const { data: session } = useSession()

  const [tipo, setTipo] = useState("")
  const [panel, setPanel] = useState("Datos")



  useEffect(() => {

    if (session?.user?.name != undefined) {

      setTimeout(async () => {
        await signOut({
          callbackUrl: "/",
        })
      }, 600000);

    } else {

    }

  }, [session])


  const handleClick = (info) => {
    setTipo(info)
  }

  return (
    <div className='h-full w-full z-120 '>

      <div className='flex justify-between w-full h-full '>

        <div
          className="relative flex h-full w-1/2 max-w-[15rem] flex-col  bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5 ">
          <div class="flex divide-x divide-gray-800 row">
            <button
              onClick={() => setPanel("Datos")}
              className={`px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all border-r-0 rounded-lg rounded-l-none rounded-r-none select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20 ${panel == 'Datos' ? 'font-extrabold text-2xl' : ''}`}
              type="button">
              Datos
            </button>
            <button
              onClick={() => setPanel("Contenido")}
              className={`px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all border-r-0 rounded-lg rounded-l-none rounded-r-none select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20 ${panel == 'Contenido' ? 'font-extrabold text-2xl' : ''}`}
              type="button">
              Contenido
            </button>

          </div>



          <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700 ">
            <hr
              className="my-2 mr-10 h-px border-t-0 bg-black bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
            {
              panel == 'Datos' ? (
                <><div role="button"
                  onClick={() => handleClick("Ofrenda")}
                  className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 gap-x-4 ${tipo == 'Ofrenda' ? 'font-bold' : ''}`}>
                  <div claclassNamess="grid mr-6 place-items-center">
                    <Image src={Ofrenda} alt="" width={0} height={0} className="w-6 h-6 mr-2  fill-black" />
                  </div>
                  Ofrendas
                </div><div role="button"
                  onClick={() => handleClick("Primicia")}
                  className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 gap-x-4 ${tipo == 'Primicia' ? 'font-bold' : ''}`}>
                    <div className="grid mr-2 place-items-center">
                      <Image src={Primicia} alt="" width={0} height={0} className="w-6 h-6  " />
                    </div>
                    Primicias
                  </div><div role="button"
                    onClick={() => handleClick("Donar")}
                    className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 gap-x-4 ${tipo == 'Donar' ? 'font-bold' : ''}`}>
                    <div className="grid mr-2 place-items-center">
                      <Image src={Donar} alt="" width={0} height={0} className="w-6 h-6  " />
                    </div>
                    Donaciones

                  </div><div role="button"
                    onClick={() => handleClick("Diezmo")}
                    className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 gap-x-4 ${tipo == 'Diezmo' ? 'font-bold' : ''}`}>
                    <div className="grid mr-2 place-items-center">
                      <Image src={Diezmo} alt="" width={0} height={0} className="w-6 h-6" />
                    </div>
                    Diezmo
                  </div><hr

                    className="my-2 mr-10 h-px border-t-0 bg-black bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" /><div role="button"
                      onClick={() => handleClick("Oraciones")}
                      className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 gap-x-4 ${tipo == 'Oraciones' ? 'font-bold' : ''}`}>
                    <div className="grid mr-2 place-items-center">
                      <GiPrayer className="w-5 h-5" />
                    </div>
                    Oraciones
                  </div></>
              ) : panel == "Contenido" ? (
                <>
                  <div role="button"

                    onClick={() => handleClick("Eventos Oficiales")
                    }
                    className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 gap-x-4 ${tipo == 'Eventos Oficiales' ? 'font-bold' : ''}`}>
                    <div className="grid mr-4 place-items-center">
                      <GiPrayer className="w-5 h-5" />
                    </div>
                    Eventos Oficiales
                  </div>
                  <div role="button"
                    onClick={() => handleClick("Eventos Especiales")
                    }
                    className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 gap-x-4 ${tipo == 'Eventos Especiales' ? 'font-bold' : ''}`}>
                    <div className="grid mr-4 place-items-center">
                      <GiPrayer className="w-5 h-5" />
                    </div>
                    Eventos Especiales
                  </div></>
              ) : null
            }


            <div role="button"
              onClick={async () => {
                await signOut({
                  callbackUrl: "/",
                })
              }}
              className="flex  text-lg w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 mt-[220px] mx-auto ml-8 font-semibold">
              <div className="grid mr-2 place-items-center ">
                <TbLogout2 className="w-5 h-5" />
              </div>
              Salir
            </div>

          </nav>
        </div>


        <div className='w-full h-full  overflow-y-auto overflow-x-hidden'>
          {
            panel == 'Datos' ? (<DashBoardInfo tipo={tipo} />) : panel == 'Contenido' ? ((<DashBoardInfoContenido tipo={tipo} />)) : null
          }
        </div>


      </div>


    </div>
  )
}

export default DashBoard
