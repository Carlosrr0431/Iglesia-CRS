'use client'
import React, { useState } from 'react'
import { useAppContext } from '../(context)/AppWrapper';

const Dropdown = ({ versiculos }) => {
    const { isOpenVersiculo, setIsOpenVersiculo, setIsOpenCapitulo, setIsOpenLibro } = useAppContext()


    const closeDropdown = () => {
        setIsOpenVersiculo(false);
    };


    // screens: {
    //     xs: '475px',
    //     sm: "640px",
    //     md: "768px",
    //     lg: "960px",
    //     xl: "1200px",
    //   },
    return (
        <div className='w-full   h-full '>
            <div className=" h-full w-full ">
           

                {isOpenVersiculo && (
                    <div className=" overflow-y-scroll  absolute top-0 -mx-[5vh] md:mx-[9vh] overflow-x-hidden    max-h-[350px] h-auto flex-wrap  shadow-lg  ring-1 ring-black ring-opacity-5  w-[170px] biblia   z-80 bg-gray-300">
                        <ul role="menu" className='grid grid-cols-2 justify-items-center  ' aria-orientation="vertical" aria-labelledby="options-menu">

                            {
                                versiculos && versiculos.map((elem, index) => {
                                    return (
                                        <li key={index} className='w-full h-full items-center text-center bg-gray-500  border-[1px] border-gray-600 text-xl  cursor-pointer hover:bg-gray-900 text-white p-1'>
                                            <a
                                                href={`#${elem.number}`}
                                                className=" w-full h-full"
                                                onClick={closeDropdown}
                                            >
                                                {elem.number}
                                            </a>

                                            
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown;