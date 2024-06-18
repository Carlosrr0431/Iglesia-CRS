import React from 'react'
import { FcCancel } from "react-icons/fc";
const Denegado = () => {
    return (
        <div className='w-full h-screen bg-teal-700'>

            <div className='w-[400px] h-[200px]  mx-auto flex relative top-[30dvh]'>
                <div className='px-4 text-center'>
                    <FcCancel className='h-[80px] w-[80px]  text-green-800 mx-auto' />
                    <h2 className='text-2xl my-2 text-white montserrat'>Hubo un error con tu envio.</h2>
                    <p className='text-[15px]'>Canten al Señor con gratitud; canten salmos a nuestro Dios al son del arpa.
                    (Salmo 147:7)</p>
                </div>
            </div>
        </div>
    )
}

export default Denegado
