"use client"

import React, { useEffect, useState } from 'react'
import { EliminarEvento, fetchEventos, fetchEventosEspeciales } from '../lib/data'
import { CargarEvento } from './CargarEvento'
import Image from 'next/image'
import ModalEvento from './ModalEvento'
import { TbCalendarPlus } from "react-icons/tb";
import { createBrowserClient } from '@supabase/ssr'
import { supabaseClient } from '@/supabase/client'

const DashBoardInfoContenido = ({ tipo }) => {

    const [showModal, setShowModal] = useState(false)
    const [contenido, setContenido] = useState()
    const [contenidoEspecial, setContenidoEspecial] = useState()
    const [idEvento, setIdEvento] = useState()
    const [operacion, setOperacion] = useState("")

    useEffect(() => {

        const getSupabaseOficial = async () => {
            let { data: eventosOficiales, error } = await supabaseClient
                .from('eventosOficiales')
                .select('*')


            setContenido(eventosOficiales)
        }

        const getEventosEspeciales = async () => {
            let { data: eventosEspeciales, error } = await supabaseClient
                .from('eventosEspeciales')
                .select('*')

            setContenidoEspecial(eventosEspeciales)
        }




        getSupabaseOficial()
        getEventosEspeciales()

        const channelOficial = supabaseClient
            .channel('eventosOficiales')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'eventosOficiales' }, (payload) => {


                if (payload.eventType == "INSERT") {

                    return setContenido((antContenido) => [...antContenido, payload.new])
                } else if (payload.eventType == 'UPDATE') {
                    return setContenido((antContenido) => antContenido.map((elem) => {
                        if (elem.id == payload.new.id) {
                            elem = payload.new
                        }

                        return elem;
                    }))
                } else if (payload.eventType == 'DELETE') {

                    return setContenido(antContenido => antContenido.filter((elem, index) => elem.id !== payload.old.id))
                }

            })
            .subscribe()

        const channelEspecial
            = supabaseClient
                .channel('eventosEspeciales')
                .on('postgres_changes', { event: '*', schema: 'public', table: 'eventosEspeciales' }, (payload) => {

                    if (payload.eventType == "INSERT") {

                        return setContenidoEspecial((antContenido) => [...antContenido, payload.new])
                    } else if (payload.eventType == 'UPDATE') {
                        return setContenidoEspecial((antContenido) => antContenido.map((elem) => {
                            if (elem.id == payload.new.id) {
                                elem = payload.new
                            }

                            return elem;
                        }))
                    } else if (payload.eventType == 'DELETE') {

                        return setContenidoEspecial(antContenido => antContenido.filter((elem, index) => elem.id !== payload.old.id))
                    }

                })
                .subscribe()

        return () => {

            console.log("Entro");
            supabaseClient.removeChannel(supabaseClient.channel(channelOficial))
            supabaseClient.removeChannel(supabaseClient.channel(channelEspecial))
        }

    }, [])


    return (
        <div className='h-full w-full flex gap-x-5 flex-wrap ml-10'>

            {
                tipo == 'Eventos Oficiales' ? (<button className='flex justify-center border-white/5 border-solid border-2 rounded-full  items-center gap-x-1 fixed z-50 text-sm top-0 right-0 text-black m-4 ' onClick={() => {
                    setOperacion("Crear Evento"); setShowModal(true);
                }}> <TbCalendarPlus className='w-12 h-12  p-2  text-green-500 ' /></button>) : tipo == 'Eventos Especiales' ? (<button className='flex justify-center border-white/5  border-solid border-2 rounded-full  items-center gap-x-1 fixed z-50 text-sm top-0 right-0 text-black m-4 ' onClick={() => {
                    setOperacion("Crear Evento"); setShowModal(true);
                }}> <TbCalendarPlus className='w-12 h-12 p-2  text-green-500 ' /></button>) : null
            }

            {(contenido && tipo == 'Eventos Oficiales') ? contenido.map((elem, index) => {


                return (
                    <>

                        <div

                            key={index} className="relative  flex  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-4">

                            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden  rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                                <Image
                                    src={elem.imagenUrl}
                                    alt="image"
                                    className="h-full w-full object-cover"
                                    width={800}
                                    height={800}
                                />
                            </div>
                            <div className="p-6">

                                <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                    {elem.titulo}
                                </h6>



                                <h3 className="block font-sans  font-normal leading-relaxed text-gray-700 antialiased text-md mt-14">
                                    <span className=' font-bold'>Fecha</span>: {elem.fecha.slice(2, 10).split('-').reverse().join('/')}
                                </h3>

                                <a className="flex mt-14" >
                                    <button
                                        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-slate-800 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        onClick={() => {
                                            setShowModal(true)
                                            setIdEvento(elem.id)
                                            setOperacion("Modificar")
                                        }}
                                    >
                                        Modificar

                                    </button>
                                    <button
                                        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-slate-800 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        onClick={() => EliminarEvento(tipo, elem.id)
                                        }
                                    >
                                        Eliminar

                                    </button>

                                </a>

                            </div>

                        </div>
                    </>


                )
            }


            ) : (contenidoEspecial && tipo == 'Eventos Especiales') && contenidoEspecial.map((elem, index) => {


                return (
                    <>

                        <div

                            key={index} className="relative  flex  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-4">

                            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden  rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                                <Image
                                    src={elem.imagenUrl}
                                    alt="image"
                                    className="h-full w-full object-cover"
                                    width={800}
                                    height={800}
                                />
                            </div>
                            <div className="p-6">
                                <h6 claclassNamess="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                    {elem.titulo}
                                </h6>


                                <h3 className="block font-sans  font-normal leading-relaxed text-gray-700 antialiased text-md mt-14">
                                    <span className=' font-bold'>Fecha</span>: {elem.fecha.slice(2, 10).split('-').reverse().join('/')}
                                </h3>

                                <a className="flex mt-14" >
                                    <button
                                        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-slate-800 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        onClick={() => {
                                            setShowModal(true)
                                            setIdEvento(elem.id)
                                            setOperacion("Modificar")
                                        }}
                                    >
                                        Modificar

                                    </button>
                                    <button
                                        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-slate-800 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        onClick={() => EliminarEvento(tipo, elem.id)
                                        }
                                    >
                                        Eliminar

                                    </button>

                                </a>

                            </div>

                        </div>
                    </>


                )
            }


            )
            }

            {
                showModal && <ModalEvento tipo={tipo} operacion={operacion} idEvento={idEvento} showModal={showModal} setShowModal={setShowModal} />
            }
        </div>
    )
}

export default DashBoardInfoContenido
