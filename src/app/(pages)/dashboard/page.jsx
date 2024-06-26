"use client"

import React from 'react'
import Image from "next/image";
import DashBoardInfo from "../../(components)/DashBoardInfo";

import { signIn, useSession, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { useState } from 'react';

import { TbLogout2 } from "react-icons/tb";
import { GiPrayer } from "react-icons/gi";
import Ofrenda from '../../public/ofrenda.svg'
import Diezmo from '../../public/diezmo.svg'
import Donar from '../../public/donar.svg'
import Primicia from '../../public/primicia.svg'
import { MdOutlineEvent } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import { HiCog } from "react-icons/hi";
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
    <div className='h-full w-full z-120 bg-slate-600 '>

      <div className='flex justify-between w-full h-full  '>

        <div
          className="relative flex h-full w-1/2 max-w-[15rem] flex-col  bg-slate-800 bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5 ">
          <div className="flex divide-x divide-gray-800 row">
            <button
              onClick={() => setPanel("Datos")}
              className={`px-6 py-3 font-sans text-xs font-regular text-center text-white uppercase align-middle transition-all border-r-0 rounded-lg rounded-l-none rounded-r-none select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20 ${panel == 'Datos' ? 'font-extrabold text-2xl' : ''}`}
              type="button">
              Datos
            </button>
            <div className='text-white'>|</div>
            <button
              onClick={() => setPanel("Contenido")}
              className={`px-6 py-3 font-sans text-xs font-regular text-center text-white uppercase align-middle transition-all border-r-0 rounded-lg rounded-l-none rounded-r-none select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20 ${panel == 'Contenido' ? 'font-extrabold text-2xl' : ''}`}
              type="button">
              Contenido
            </button>

          </div>



          <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700 ">
            <hr
              className="my-2 mr-10 h-px border-t-0 bg-white bg-gradient-to-r from-transparent via-neutral-100 to-transparent opacity-50 dark:via-neutral-100" />
            {
              panel == 'Datos' ? (
                <><div role="button"
                  onClick={() => handleClick("Ofrenda")}
                  className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80  text-white active:text-blue-gray-900 gap-x-2 ${tipo == 'Ofrenda' ? 'font-bold' : ''}`}>
                  <div className="grid  place-items-center">
                    <Image src={Ofrenda} alt="" width={0} height={0} className="w-6 h-6 mr-2" />
                  </div>
                  Ofrendas
                </div><div role="button"
                  onClick={() => handleClick("Primicia")}
                  className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start  hover:bg-blue-gray-50 hover:bg-opacity-80 text-white hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 gap-x-2 ${tipo == 'Primicia' ? 'font-bold' : ''}`}>
                    <div className="grid mr-2 place-items-center">
                      <Image src={Primicia} alt="" width={0} height={0} className="w-6 h-6  " />
                    </div>
                    Primicias
                  </div><div role="button"
                    onClick={() => handleClick("Donar")}
                    className={`flex items-center w-full p-3 text-white leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 gap-x-2 ${tipo == 'Donar' ? 'font-bold' : ''}`}>
                    <div className="grid mr-2 place-items-center">
                      <Image src={Donar} alt="" width={0} height={0} className="w-6 h-6  " />
                    </div>
                    Donaciones

                  </div><div role="button"
                    onClick={() => handleClick("Diezmo")}
                    className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 text-white focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 gap-x-2 ${tipo == 'Diezmo' ? 'font-bold' : ''}`}>
                    <div className="grid mr-2 place-items-center">
                      <Image src={Diezmo} alt="" width={0} height={0} className="w-6 h-6" />
                    </div>
                    Diezmo
                  </div>
                  <hr
                    className="my-2 mr-10 h-px border-t-0 bg-white bg-gradient-to-r from-transparent via-neutral-100 to-transparent opacity-50 dark:via-neutral-100" />
                  <div role="button"
                    onClick={() => handleClick("Oraciones")}
                    className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 text-white active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 gap-x-2 ${tipo == 'Oraciones' ? 'font-bold' : ''}`}>
                    <div className="grid mr-2 place-items-center">
                      <GiPrayer className="w-5 h-5 text-white" color='#FFFFFF' />
                    </div>
                    Oraciones
                  </div>

                  <div role="button"
                    onClick={() => handleClick("Configurar")}
                    className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 text-white active:bg-blue-gray-50 relative top-[150px] active:bg-opacity-80 active:text-blue-gray-900 gap-x-2 ${tipo == 'Configurar' ? 'font-bold' : ''}`}>
                    <div className="grid  place-items-center">
                      <HiCog className="w-5 h-5 text-white" color='#FFFFFF' />
                    </div>
                    Configurar Admin
                  </div>


                </>
              ) : panel == "Contenido" ? (
                <>
                  <div role="button"

                    onClick={() => handleClick("Eventos Oficiales")
                    }
                    className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 text-white hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 gap-x-4 ${tipo == 'Eventos Oficiales' ? 'font-bold' : ''}`}>
                    <div className="grid mr-4 place-items-center">
                      <MdOutlineEvent className="w-5 h-5" />
                    </div>
                    Eventos Oficiales
                  </div>
                  <div role="button"
                    onClick={() => handleClick("Eventos Especiales")
                    }
                    className={`flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-white text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 relative h-full  gap-x-4 ${tipo == 'Eventos Especiales' ? 'font-bold' : ''}`}>
                    <div className="grid mr-4 place-items-center">
                      <MdOutlineEventNote className="w-5 h-5" />
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
              className={`flex  text-lg w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 text-white hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 ${panel == "Datos" ? 'mt-[180px]' : 'mt-[400px]'} mx-auto ml-8 font-semibold`}>
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
