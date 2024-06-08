'use client'
import React, { useState } from 'react'
import { useAppContext } from '../(context)/AppWrapper';


const Dropdown = ({ array, handleClick }) => {

    const { isOpenCapitulo, setIsOpenCapitulo, setIsOpenVersiculo, setIsOpenLibro } = useAppContext()

    const closeDropdown = () => {
        setIsOpenCapitulo(false);
    };

    return (
        <div className='w-full  h-full'>
            <div className="  h-full w-full">


                {isOpenCapitulo && (
                    <div className="overflow-y-scroll absolute -ml-[70px] overflow-x-hidden    max-h-[350px] h-auto flex-wrap  shadow-lg  ring-1 ring-black ring-opacity-5  w-[170px] biblia   z-80 bg-gray-300">
                        <ul role="menu" className='grid grid-cols-2 justify-items-center ' aria-orientation="vertical" aria-labelledby="options-menu">

                            {
                                array && array.map((elem, index) => {
                                    return (
                                        <li key={index} onClick={() => {
                                            handleClick(index + 1)
                                            closeDropdown()
                                        }} className='w-full h-full bg-gray-500 items-center border-[1px] border-gray-600 text-xl text-center cursor-pointer hover:bg-gray-900 text-white p-1'>

                                            {elem}



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