"use client"






import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Portada from "../public/version escritorio-03.svg";
import { SwipperRadio } from "./SwipperRadio";
import Providers from "../(providers)/Providers";
import { ChatResponsive } from "./ChatResponsive";

import Radio2 from "../(components)/Radio.jsx"
import { useAppContext } from "../(context)/AppWrapper";

const Radio = () => {


  const {ancho, setAncho} = useAppContext()

  useEffect(() => {
    window?.addEventListener("resize", () => {
      setAncho(window?.innerWidth);
    });
    return () => {
      window?.removeEventListener("resize", () => {
        setAncho(window?.innerWidth);
      });
    };
  })


  return (
    <div className="h-[100dvh]
       ">

      {
        ancho < 760 ? (<SwipperRadio />) : (
          <div className="hidden mb:flex h-[100dvh] z-50 bg-blue-800 mix-blend-multiply mx-auto  md:flex items-center justify-center gap-x-10 ">

            <div
              className=""
            >

              <Radio2 />

            </div>
            <div className=''>
              <Providers>

                <div className=''>
                  <ChatResponsive />
                </div>
              </Providers>
            </div>

            <div className="hidden md:block fixed inset-0 h-screen -z-10">
              <div className="xl:bg-right xl:bg-no-repeat w-full opacity-80  h-full  translate-z-50 fixed  "></div>

              <Image
                src={Portada}
                width={0}
                height={0}
                alt=""
                priority={true}
                className="w-full h-full object-contain"
              />


            </div>

          </div>
        )
      }






    </div>
  );
};

export default Radio;
