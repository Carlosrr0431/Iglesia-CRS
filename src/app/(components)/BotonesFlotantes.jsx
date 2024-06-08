"use client"

import React from 'react'
import Biblia from './Biblia'
import WhatsApp from './WhatsApp'
import { usePathname } from 'next/navigation';

export const BotonesFlotantes = () => {

    const pathname = usePathname();

    return (
        <div className="fixed right-0 bottom-0 z-50 mb-[90px] mr-3 xl:mb-8 xl:mr-6 ">

            <div className={`${pathname == '/radio' ? 'mb-[80px] md:mb-0' : ''}`}>
                <Biblia />
            </div>

            <div className={`${pathname == '/radio' ? 'hidden' : 'block'}`}>
                <WhatsApp />
            </div>



        </div>
    )
}
