"use client"

import React, { useEffect, useState } from 'react'
import { fetchEventos, fetchOraciones, fetchPayments } from '../lib/data'
import { supabaseClient } from '@/supabase/client'
import { Usuarios } from './Usuarios'


const DashBoardInfo = ({ tipo }) => {

    const [first, setfirst] = useState()
    const [oraciones, setOraciones] = useState()

    useEffect(() => {

        const getPayments = async () => {
            const datos = await fetchPayments()

            setfirst(datos.reverse());
        }

        const getOraciones = async () => {
            const datos = await fetchOraciones()

            setOraciones(datos.reverse())
        }



        getPayments()
        getOraciones()

        const channelPayments = supabaseClient
            .channel('donaciones')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'donaciones' }, (payload) => {

                if (payload.eventType == "INSERT") {

                    return setfirst((antContenido) => [payload.new, ...antContenido])
                }
            })
            .subscribe()

        const channelOraciones = supabaseClient
            .channel('oraciones')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'oraciones' }, (payload) => {

                if (payload.eventType == "INSERT") {

                    return setOraciones((antContenido) => [payload.new, ...antContenido])
                }
            })
            .subscribe()



        return () => {

            supabaseClient.removeChannel(supabaseClient.channel(channelPayments))
            supabaseClient.removeChannel(supabaseClient.channel(channelOraciones))
        }

    }, [])

    return (
        <div className='h-full w-full flex gap-x-5 flex-wrap ml-10'>


            {first && tipo != 'Oraciones' && first.filter(elem => elem.tipo == tipo).map((elem, index) => {

                return (
                    <div key={index} className="relative flex  flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-[5px] w-[450px] h-[300px]">

                        <div className="p-6">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Nombre: <span className='font-normal'>{elem.nombre}</span>
                            </h5>
                        </div>
                        <div className="p-6 pt-0">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Descripcion:  <span className='font-normal'>{elem.descripcion}</span>
                            </h5>
                        </div>

                        <div className="p-6 pt-0">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Monto: <span className='font-normal'>${elem.monto}</span>
                            </h5>
                        </div>

                        <div className="p-6 pt-0">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Fecha: <span className='font-normal'>{elem.created_at.toString().slice(2, 10).split('-').reverse().join('/')}</span>
                            </h5>
                        </div>




                    </div>
                )
            }


            )
            }


            {oraciones && tipo == 'Oraciones' && oraciones.map((elem, index) => {
                return (
                    <div key={index} className="relative flex  flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-[5px] w-[450px] h-[300px]">

                        <div className="p-6">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Nombre:  <span className='font-normal'>{elem.nombre}</span>

                            </h5>
                        </div>
                        <div className="p-6 pt-0">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Telefono:  <span className='font-normal'>{elem.telefono}</span>
                            </h5>
                        </div>

                        <div className="p-6 pt-0">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Motivo: <span className='font-normal'>{elem.mensaje}</span>
                            </h5>
                        </div>

                        <div className="p-6 pt-0">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Fecha: <span className='font-normal'>{elem.created_at.toString().slice(2, 10).split('-').reverse().join('/')}</span>
                            </h5>
                        </div>




                    </div>
                )
            }

        


            )
            }

            {
                tipo == "Configurar" && (
                    <Usuarios/>
                )

            }


        </div>
    )
}

export default DashBoardInfo
