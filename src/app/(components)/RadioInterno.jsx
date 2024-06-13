"use client"






import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Portada from "../public/IMAGEN PARA PORTADA DE RADIO.jpg";
import { SwipperRadio } from "./SwipperRadio";
import Providers from "../(providers)/Providers";
import { ChatResponsive } from "./ChatResponsive";

import Radio2 from "../(components)/Radio.jsx"

const Radio = () => {

    const [width, setWidth] = useState(window?.innerWidth);
    const [height, setHeight] = useState(window?.innerHeight);
  
    useEffect(() => {
      window?.addEventListener("resize", () => {
        setWidth(window?.innerWidth);
        setHeight(window?.innerHeight);
      });
      return () => {
        window?.removeEventListener("resize", () => {
          setWidth(window?.innerWidth);
          setHeight(window?.innerHeight);
        });
      };
    }, [])
  
  
    return (
      <div className="h-[100dvh]
       ">
  
        {
          width < 760 ? (<SwipperRadio />) : (
            <div className="h-[100dvh] z-50  mx-auto  md:flex items-center justify-center gap-x-10 ">
  
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
  
  
              <div className="fixed inset-0 h-screen -z-10">
                <div className="xl:bg-right xl:bg-no-repeat w-full opacity-70 bg-fondo h-full  translate-z-50 fixed  "></div>
  
                <Image
                  src={Portada}
                  width={0}
                  height={0}
                  alt=""
                  className="w-full h-full object-fill"
                />
  
  
              </div>
            </div>
          )
        }
  
  
  
  
  
  
      </div>
    );
  };
  
  export default Radio;
  