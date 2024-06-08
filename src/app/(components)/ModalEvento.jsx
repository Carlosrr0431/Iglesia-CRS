"use client"

import React, { useState, useRef } from "react";


import { Toaster, toast } from 'sonner'
import { actualizarDatos, crearEvento, sendForm } from "../action.js";


const ModalEvento = ({ setShowModal, idEvento, tipo, operacion }) => {

    return (


        <div className={`fixed inset-0  z-50 
             flex items-center justify-center h-full w-full  
             `}>
            <div className="rounded-[10px]  shadow-2xl bg-white/80 shadow-black/20 p-8 m-4 md:max-w-2xl md:mx-auto">
                <h1 className="block w-full text-center text-black/90 mb-6">{operacion}</h1>
                <form className="mb-4 md:flex  md:flex-wrap md:justify-between" action={async(formData) => {
                    if (operacion == 'Modificar') return await actualizarDatos(formData, idEvento, tipo); else if (operacion == "Crear Evento") return await crearEvento(formData, tipo)
                }} onSubmit={() => setShowModal(false)}>
                    <div className="flex flex-col mb-4 md:w-1/2">
                        <input className="border py-2 px-3 text-grey-darkest md:mr-2 focus:outline-none focus:bg-white/90 text-black text-lg focus:text-black rounded-[5px]" type="text" name="titulo" id="titulo" placeholder="Titulo" />
                    </div>
                    <div className="flex flex-col mb-4 md:w-1/2">
                        <input className="border text-lg py-2 px-3 text-grey-darkest md:ml-2 focus:outline-none focus:bg-white/90 text-black focus:text-black rounded-[5px]" type="date" name="fecha" id="fecha" placeholder="Fecha" />
                    </div>

                    <div class="flex items-center justify-center w-full">
                        <label class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input type="file" name="imagen" class="hidden" />
                        </label>
                    </div>


                    <button onClick={() => toast.success('El pedido de oración fue enviado con exito!!!', {
                        description: "Estaremos orando por ti y tu familia."
                    })} className="block bg-slate-700     text-white uppercase text-lg mx-auto p-2 rounded-[5px]  hover:bg-slate-900 w-full mt-4" type="submit"  >Enviar</button>

                </form>


            </div>
        </div>





    );
};

export default ModalEvento;