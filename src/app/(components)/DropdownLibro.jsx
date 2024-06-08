'use client'
import React, { useState } from 'react'
import { useAppContext } from '../(context)/AppWrapper';

const DropdownLibro = ({ libros, handleSelect }) => {
    const { isOpenLibro, setIsOpenCapitulo, setIsOpenVersiculo, setIsOpenLibro, isOpenCapitulo } = useAppContext()
    const [testamento, setTestamento] = useState("Antiguo")


    const handleTestamento = (info) => {
        setTestamento(info)
    }



    const closeDropdown = () => {
        setIsOpenLibro(false);
        setIsOpenCapitulo(!isOpenCapitulo)
        setIsOpenVersiculo(false)
    };

    return (
        <div className='w-1/2  h-full'>
            <div className=" h-full w-full ">
          

                {isOpenLibro && (
                    <div className=" overflow-y-scroll  absolute top-0 -left-[16vh] md:-left-[27vh] overflow-x-hidden    max-h-[350px] h-auto flex-wrap  shadow-lg  ring-1 ring-black ring-opacity-5  w-[170px] biblia   z-80 bg-gray-300">
                        {/* <h2 className='text-black font-semibold text-sm px-1 text-center my-1'>Antiguo | Nuevo </h2> */}

                        <div className='flex   w-full h-full text-black font-semibold text-sm  text-center '>
                            <button onClick={() => handleTestamento("Antiguo")} className={`${testamento == 'Antiguo' ? 'bg-gray-600' : ''} p-2 w-full`}>Antiguo</button>

                            <button onClick={() => handleTestamento("Nuevo")} className={`${testamento == 'Nuevo' ? 'bg-gray-600' : ''} p-2 w-full`}>Nuevo</button>


                        </div>

                        <hr
                            className="  h-px border-t-0 bg-black bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-60 dark:via-neutral-400" />

                        <ul role="menu" className='flex flex-wrap  ' aria-orientation="vertical" aria-labelledby="options-menu">

                            {
                                libros && testamento == "Antiguo" ? (
                                    libros.filter((e) => e.testament == "Antiguo Testamento").map((elem, index) => {


                                        return (


                                            <li key={index} onClick={() => {
                                                handleSelect(elem.names[0])
                                                closeDropdown()
                                            }
                                            } className='hover:bg-gray-100 w-full' >
                                                <a
                                                    href='#'
                                                    className=" px-4 py-2 text-sm text-gray-800  w-full"
                                                // onClick={closeDropdown}
                                                >
                                                    {elem.names[0]}
                                                </a>

                                                <hr
                                                    className="  h-px border-t-0 bg-black bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
                                            </li>

                                        )
                                    })
                                ) : testamento == 'Nuevo' ? (libros.filter((e) => e.testament == "Nuevo Testamento").map((elem, index) => {


                                    return (


                                        <li key={index} onClick={() => handleSelect(elem.names[0])} className='hover:bg-gray-100 w-full'>
                                            <a
                                                href='#'
                                                className=" px-4 py-2 text-sm text-gray-800  w-full"
                                                onClick={closeDropdown}
                                            >
                                                {elem.names[0]}
                                            </a>

                                            <hr
                                                className="  h-px border-t-0 bg-black bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
                                        </li>
                                    )
                                })
                                ) : null

                            }

                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DropdownLibro;
