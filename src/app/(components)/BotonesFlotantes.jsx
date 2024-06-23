"use client"

import React from 'react'
import Biblia from './Biblia'
import WhatsApp from './WhatsApp'
import { usePathname } from 'next/navigation';
import { useAppContext } from '../(context)/AppWrapper';

export const BotonesFlotantes = () => {

    const pathname = usePathname();
    const { swiper } = useAppContext();

    return (

        // <div>
        //     <div className={`${pathname == '/radio' ? swiper == 'Chat' ? 'relative bottom-[150px] md:bottom-0 md:mb-0' : 'hidden' : ''}`}>
        //         <Biblia />
        //     </div>
        // </div>

        <div className={`${pathname == '/ubicacion' || pathname == '/login' ? 'hidden' : ''} fixed right-0 bottom-[110px] md:bottom-0 z-50  mr-3 xl:mb-8 xl:mr-6   ${pathname == '/radio' ? swiper == 'Chat' ? 'mb-[180px]' : 'hidden' : ''}`}>

            <div >
                <Biblia />
            </div>

            <div className={`${pathname == '/radio' ? 'hidden relative bottom-[150px] ' : 'block'}  `}>
                <WhatsApp />
            </div>



        </div>
    )
}
