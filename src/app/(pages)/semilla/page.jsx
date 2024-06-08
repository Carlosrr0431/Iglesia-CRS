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
  { name: "Ofrenda", icon: Ofrenda, colorGradient: ["from-[#93A821]", "to-[#C4D63E]"] },
  { name: "Diezmo", icon: Diezmo, colorGradient: ["from-[#690777]", "to-[#C102D1]"] },
  { name: "Primicia", icon: Primicia, colorGradient: ["from-[#B28516]", "to-[#E5C851]"] },
  { name: "Donar", icon: Donar, colorGradient: ["from-[#005F84]", "to-[#39C2FF]"] },

];

const Semilla = () => {
  return (
    <div className="relative montserrat w-full h-full  overflow-y-scroll overflow-x-hidden" >

{/* 
      Screen PX

      xs: '475px',
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px", 
*/}

      <h2 className="text-2xl  relative left-[13%] top-[10%]  lg:top-[17%] xl:top-[25%]">Elíge una opción:</h2>
      <div className="w-full h-full  flex flex-col gap-y-8  lg:space-x-8  items-center justify-center mt-36 lg:mt-0  overflow-y-auto xs:place-items-center   lg:mx-[0%]   lg:pb-0 xs:grid xs:grid-cols-2 xs:mr-[2%] xs:mt-0 xs:items-center xs:gap-y-14 xs:content-center lg:flex lg:flex-row mb-[90px] xs:mb-0">

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


