"use client"

import React from 'react'

import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';
import BibliaIcon from "../public/icons8-biblia.svg";
import { useAppContext } from '../(context)/AppWrapper';




const Biblia = () => {

    const pathname = usePathname()
    const { isOpenBiblia, setIsOpenBiblia, setIsOpenCapitulo, setIsOpenVersiculo, setIsOpenLibro } = useAppContext()

    const handleBiblia = () => {

        if ( !isOpenBiblia ) {
            setIsOpenLibro(false)
            setIsOpenVersiculo(false)
            setIsOpenCapitulo(false)
        }

        setIsOpenBiblia(!isOpenBiblia)
    }
    return (
        <div className={`${pathname == '/dashboard' ? 'hidden' : 'block'}`}>
            <button onClick={handleBiblia }>
                <Image
                    src={BibliaIcon}
                    width={50}
                    height={50}
                    alt=""
                    className="transition-all hover:scale-110  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"
                />
            </button>


        </div>
    )
}

export default Biblia
