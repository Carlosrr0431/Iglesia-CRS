"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import DropdownCapitulos from './DropdownCapitulos'
import DropdownLibro from './DropdownLibro'
import { useAppContext } from '../(context)/AppWrapper'

const BibliaNVI = () => {

    const [libros, setLibros] = useState([])
    const [capitulo, setCapitulo] = useState("")
    const [array, setArray] = useState([])
    const [versiculos, setVersiculos] = useState([])
    const [showCapitulos, setShowCapitulos] = useState(true)
    const { isOpenBiblia, setIsOpenBiblia, isOpenLibro, setIsOpenCapitulo, setIsOpenVersiculo, setIsOpenLibro, isOpenCapitulo, isOpenVersiculo } = useAppContext()
    const [libroSelect, setLibroSelect] = useState("");
    const [versiculoSelect, setVersiculoSelect] = useState("");
    const [capituloSelected, setCapituloSelected] = useState("");




    const toggleDropdown = () => {
        setIsOpenLibro(!isOpenLibro);
        setIsOpenCapitulo(false)
        setIsOpenVersiculo(false)
    };


    const toggleDropdownCapitulo = () => {
        setIsOpenCapitulo(!isOpenCapitulo);
        setIsOpenVersiculo(false);
        setIsOpenLibro(false)
    };

    const toggleDropdownVersiculo = () => {
        setIsOpenVersiculo(!isOpenVersiculo);
        setIsOpenCapitulo(false)
        setIsOpenLibro(false)
    };


    const handleButton = async () => {

        const response = await axios.get('/api/biblia')

        setLibros(response.data)
    }

    useEffect(() => {
        handleButton()

    }, [versiculos])

    const handleClick = async (i) => {

        const response = await axios.get(`api/biblia/${capitulo}/${i}`)

        setCapituloSelected(i)
        setShowCapitulos(false)
        setVersiculos(response.data.vers)
    }


    const handleSelect = async (libro) => {

        if (libro == 'Elige tu versiculo') return setCapitulo(0)


        setLibroSelect(libro)
        setCapituloSelected()
        setShowCapitulos(true)

        const response = await axios.get(`api/biblia/${libro}`)

        setCapitulo(libro)

        let array = []
        for (let index = 0; index < response.data.chapters; index++) {
            array[index] = index + 1;

        }

        setArray(array)
    }

    return (
        <>
            {/* <div>
                <button onClick={handleButton} className='h-12 w-20  text-black bg-white'>Biblia</button>
            </div> */}

            {
                isOpenBiblia &&
                <div className='fixed inset-0 bg-white z-50 bg-opacity-75 backdrop-blur-sm flex  h-[80%] sm:w-[50%]  w-[80%] mx-auto sm:mx-[25%] my-[5%] flex-col space-y-2 '>
                    <div className='flex justify-center gap-x-2 md:gap-x-8 mt-10'>
                        <button
                            type="button"
                            className="px-2 py-1  md:px-4 md:py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                            onClick={toggleDropdown}
                        >
                            Libro <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            className="px-2 py-1  md:px-4 md:py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                            onClick={toggleDropdownCapitulo}
                        >
                            Capitulo <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            className="px-2 py-1  md:px-4 md:py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
                            onClick={toggleDropdownVersiculo}
                        >
                            Versiculo <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex w-full justify-center items-center gap-x-4 flex-wrap '>

                        <div className='relative'>
                            <DropdownLibro libros={libros} handleSelect={handleSelect} />
                        </div>

                        {capitulo !== '' &&


                            <div className='relative'>
                                <DropdownCapitulos array={array} handleClick={handleClick} />
                            </div>



                        }

                        {versiculos && <div className='relative'>
                            <Dropdown versiculos={versiculos} setVersiculoSelect={setVersiculoSelect} />
                        </div>}

                        {/* <div className='relative'>
                                    <Dropdown versiculos={versiculos} setVersiculoSelect={setVersiculoSelect} />
                                </div> */}

                    </div>



                    <div className='flex justify-center w-full'>
                        <h2 className='mb-2 font-semibold -mt-4 text-2xl text-black'> {libroSelect}  {capituloSelected}</h2>
                    </div>



                    {/* {
                        showCapitulos && <div className='flex justify-center items-start gap-y-4 mt-6 max-w-2xl  mx-auto flex-wrap space-x-2'>
                            {
                                array.length > 0 && array.map((elem, index) => {
                                    return (
                                        <div onClick={() => handleClick(index + 1)} key={index} className='p-1 border-2 border-solid items-start border-white cursor-pointer'>
                                            <h1 className='text-md text-black font-bold '>{elem}</h1>

                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                    } */}

                    {
                        !showCapitulos && versiculos.length > 0 && <div className='overflow-y-scroll mb-11'>
                            {
                                versiculos.map((elem, index) => {


                                    return (
                                        <h1 id={elem.number} onClick={() =>

                                            navigator.clipboard.writeText(`${elem.verse.replace('"', '')}   ${capitulo} : ${capituloSelected} - ${elem.number}`)
                                        } key={index} className='mb-2 text-2xl montserrat text-black font-normal hover:bg-white/80 cursor-pointer'><span className='font-bold'>{elem.number}. </span>{elem.verse.replace('"', '')}</h1>
                                    )
                                })
                            }
                        </div>

                    }

                </div >
            }
        </>
    )
}

export default BibliaNVI
