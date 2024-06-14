"use client"

import React from 'react'

import Ofrenda from '../../public/ofrenda.svg'
import Diezmo from '../../public/diezmo.svg'
import Donar from '../../public/donar.svg'
import Primicia from '../../public/primicia.svg'

import CardFlip from '../../(components)/CardFlip.jsx'

import Portada from "../../public/PORTADA PARA MI SEMILLA.jpg";
import Image from 'next/image.js';
import CardSemilla from '@/app/(components)/CardSemilla';

const cardData = [
  { name: "Ofrenda", icon: Ofrenda, colorText: ["text-[#A3993A]"], bgFondo: 'bg-[#A3993A]' },
  { name: "Diezmo", icon: Diezmo, colorText: ["text-[#8D4291]"], bgFondo: 'bg-[#8D4291]' },
  { name: "Primicia", icon: Primicia, colorText: ["text-[#D28952]"], bgFondo: 'bg-[#D28952]' },
  { name: "Donar", icon: Donar, colorText: ["text-[#F9354C]"], bgFondo: 'bg-[#F9354C]' },

];

const Semilla = () => {
  return (
    <div className="relative montserrat w-full h-full  overflow-y-scroll overflow-x-hidden " >

      <h2 className="text-2xl montserrat flex justify-center items-center text-center top-[100px] md:top-[150px] font-semibold relative">ELIGE UNA OPCION</h2>
      <div className="w-full h-full  flex flex-col gap-y-12  lg:space-x-8  items-center justify-center mt-36 lg:mt-0  overflow-y-auto xs:place-items-center   lg:mx-[0%]   lg:pb-0 xs:grid xs:grid-cols-2 xs:mr-[2%] xs:mt-0 xs:items-center xs:gap-y-14 xs:content-center lg:flex lg:flex-row mb-[150px] xs:mb-0">

        {cardData.map((card, index) => (
          <CardSemilla card={card} key={index} />

        ))} 
      </div>

      <div className="fixed inset-0 h-full -z-40 ">
        <div className="xl:bg-right xl:bg-no-repeat bg-fondo3 w-full h-full  translate-z-40 absolute "></div>

        <Image
          src={Portada}
          width={0}
          height={0}
          alt=""
          className="w-full h-full object-fill z-30 "
        />

      </div>

    </div>
  )
}

export default Semilla


