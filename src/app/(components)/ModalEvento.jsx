"use client"

import React, { useState, useRef } from "react";


import { Toaster, toast } from 'sonner'
import { actualizarDatos, crearEvento, sendForm } from "../action.js";
import Image from "next/image.js";
import Cancel from '../public/cancel.svg'
import { HiOutlineXMark } from "react-icons/hi2";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "SVG", "JPEG"];

const ModalEvento = ({ setShowModal, idEvento, tipo, operacion }) => {

    const [file, setFile] = useState(null);
    const handleChange = (file) => {

        console.log(file);
        setFile(file);
    };

    return (


        <div className={`fixed inset-0  z-50 
             flex items-center justify-center h-full w-full  
             `}>
            <div className="rounded-[10px]  shadow-2xl bg-white/90 shadow-black/20 p-8 m-4 md:max-w-2xl md:mx-auto">
                <div className="flex justify-center mb-4">
                    <h1 className="w-full text-center items-center text-black ">{operacion} </h1>

                    <div className="text-center items-center flex justify-center" onClick={() => setShowModal(false)}>
                        <HiOutlineXMark className="text-black/80 w-[30px] h-[30px] cursor-pointer hover:scale-110" color="black" />
                    </div>
                </div>
                <form className="mb-4 md:flex  md:flex-wrap md:justify-between" action={async (formData) => {
                    if (operacion == 'Modificar') return await actualizarDatos(formData, idEvento, tipo); else if (operacion == "Crear Evento") return await crearEvento(formData, tipo)
                }} onSubmit={() => setShowModal(false)}>
                    <div className="flex flex-col mb-4 md:w-1/2">
                        <input className="border py-2 px-3 text-grey-darkest md:mr-2 focus:outline-none focus:bg-white/90 text-black text-lg focus:text-black rounded-[5px]" type="text" name="titulo" id="titulo" required placeholder="Titulo" />
                    </div>
                    <div className="flex flex-col mb-4 md:w-1/2">
                        <input className="border text-lg py-2 px-3 text-grey-darkest md:ml-2 focus:outline-none focus:bg-white/90 text-black focus:text-black rounded-[5px]" type="date" name="fecha" id="fecha" placeholder="Fecha" required />
                    </div>
                    <div className="w-full h-[100px]">
                        <FileUploader classes="custom-fileUploader" handleChange={handleChange} label="Arrastra o carga la imagen." name="file" types={fileTypes} required multiple="false"  hoverTitle="Arrastra Aqui" />
                    </div>
              


                    <button onClick={() => toast.success('El evento fue agregado con exito!!!')} className="block bg-slate-700     text-white uppercase text-lg mx-auto p-2 rounded-[5px]  hover:bg-slate-900 w-full mt-4" type="submit"  >Enviar</button>

                </form>


            </div>
        </div>





    );
};

export default ModalEvento;