"use client"

import React from 'react'
import Biblia from './Biblia'
import WhatsApp from './WhatsApp'
import { usePathname } from 'next/navigation';
import { useAppContext } from '../(context)/AppWrapper';

export const BotonesFlotantes = () => {

    const pathname = usePathname();
    const {  swiper } = useAppContext();

    return (
        <div className={`${pathname == '/ubicacion' || pathname == '/login' ? 'hidden' : ''} fixed right-0 bottom-0 z-50 mb-[70px] mr-3 xl:mb-8 xl:mr-6 `}>

            <div className={`${pathname == '/radio' ? swiper == 'Chat' ? 'mb-[120px] md:mb-0' : 'hidden' : ''}`}>
                <Biblia />
            </div>

            <div className={`${pathname == '/radio' ? 'hidden' : 'block'}`}>
                <WhatsApp />
            </div>



        </div>
    )
}
