import React from 'react'
import { GoCheckCircle } from "react-icons/go";


const Exitoso = () => {
    return (
        <div className='w-full h-screen bg-teal-700'>

            <div className='w-[400px] h-[200px] items-center content-center place-content-center  mx-auto flex relative top-[30dvh]'>
                <div className='px-0 md:px-4 text-center mx-auto'>
                    <GoCheckCircle className='h-[80px] w-[80px]  text-green-500 mx-auto' />
                    <h2 className='text-2xl my-2 text-white montserrat'>¡Muchas Gracias!</h2>
                    <p className='text-[15px]'>¡Aleluya! ¡Alabado sea el Señor! Den gracias al Señor, porque él es bueno; su gran amor perdura para siempre.
                    (Salmo 106:1)</p>
                </div>
            </div>
        </div>
    )
}

export default Exitoso


