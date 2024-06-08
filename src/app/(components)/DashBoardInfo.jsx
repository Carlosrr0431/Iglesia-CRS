"use client"

import React, { useEffect, useState } from 'react'
import { fetchEventos, fetchOraciones, fetchPayments } from '../lib/data'
import { CargarImagen } from './CargarEvento'
import Image from 'next/image'
import ModalEvento from './ModalEvento'


const DashBoardInfo = ({ tipo }) => {

    const [first, setfirst] = useState()
    const [oraciones, setOraciones] = useState()
    const [contenido, setContenido] = useState()
    const [showModal, setShowModal] = useState(false)
    const [idEvento, setIdEvento] = useState()

    useEffect(() => {

        const getPayments = async () => {
            const datos = await fetchPayments()

            setfirst(datos.reverse());
        }

        const getOraciones = async () => {
            const datos = await fetchOraciones()

            setOraciones(datos.reverse())
        }

        const getEventos = async () => {
            const datos = await fetchEventos()

            setContenido(datos)
        }

        getPayments()
        getOraciones()
        getEventos()
    }, [contenido])

    return (
        <div className='h-full w-full flex gap-x-5 flex-wrap ml-10'>


            {first && tipo != 'Oraciones' && first.filter(elem => elem.titulo == tipo).map((elem, index) => {
                return (
                    <div key={index} className="relative flex  flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-[5px] w-[450px]">
                        <div className="p-6">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Motivo: {elem.titulo}
                            </h5>
                        </div>

                        <div className="p-6 pt-0">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Descripción: {elem.descripcion}
                            </h5>
                        </div>
                        <div className="p-6 pt-0">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Monto:  ${elem.monto}
                            </h5>
                        </div>

                        <div className="p-6 pt-0">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Fecha: {elem.createdAt.toString().slice(2, 10).split('-').reverse().join('/')}
                            </h5>
                        </div>

                        <div className="p-6 pt-0">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Email: {elem.email}
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
                                Nombre: {elem.nombre}
                            </h5>
                        </div>
                        <div className="p-6 pt-0">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Telefono:  {elem.telefono}
                            </h5>
                        </div>

                        <div className="p-6 pt-0">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Motivo: {elem.motivo}
                            </h5>
                        </div>

                        <div className="p-6 pt-0">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Fecha: {elem.createdAt.toString().slice(2, 10).split('-').reverse().join('/')}
                            </h5>
                        </div>




                    </div>
                )
            }


            )
            }

            {/* <CargarImagen />


            {contenido && tipo == 'Panel Contenido' && contenido.map((elem, index) => {
                return (
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

                            <a class="flex mt-14" href="#">
                                <button
                                    class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-slate-800 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    onClick={() => {
                                        setShowModal(true)
                                        setIdEvento(elem._id)
                                    }}
                                >
                                    Modificar

                                </button>
                                <button
                                    class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-slate-800 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    Eliminar

                                </button>

                            </a>

                        </div>
                        {
                            showModal && <ModalEvento idEvento={idEvento} showModal={showModal} setShowModal={() => setShowModal(false)} />
                        }
                    </div>



                )
            }


            )
            } */}

        </div>
    )
}

export default DashBoardInfo
