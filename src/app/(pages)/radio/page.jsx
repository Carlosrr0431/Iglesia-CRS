"use client"



import Radio2 from '../../(components)/Radio'

import Providers from '../../(providers)/Providers'


import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { useAppContext } from "../../(context)/AppWrapper";

import Portada from "../../public/IMAGEN PARA PORTADA DE RADIO.jpg";
import { ChatResponsive } from "@/app/(components)/ChatResponsive";

const Radio = () => {

  const [count, setCount] = useState(0);
  const [limite, setLimite] = useState(3);
  const inputVolumen = useRef();

  const [controlVolumen, setControlVolumen] = useState(true);
  const [volumenAct, setVolumenAct] = useState(0)
  const [controlVolumenAdelantar, setControlVolumenAdelantar] = useState(true);
  const { inputEl } = useAppContext();

  useEffect(() => {
    // inputEl.current.volume = 1
    // inputVolumen.current.value = 100
    setControlVolumenAdelantar(false);
  }, [])


  const handledVolumen = (e) => {
    inputEl.current.volume = e.target.value / 100;
    setVolumenAct(inputEl.current.volume)

    if (e.target.value == 0) {
      setControlVolumen(false);
      setControlVolumenAdelantar(false);
    } else if (e.target.value > 0 && e.target.value < 50) {
      setControlVolumen(true);
      setControlVolumenAdelantar(true)
    } else if (e.target.value >= 50) {
      setControlVolumenAdelantar(false);
      setControlVolumen(true);
    }
  };

  const handledBotonVolumen = () => {
    if (controlVolumen) {
      inputEl.current.volume = 0;
      inputVolumen.current.value = 0;
      setControlVolumenAdelantar(false)
    } else {
      inputEl.current.volume = volumenAct;
      inputVolumen.current.value = volumenAct * 100;
    }

    setControlVolumen((ant) => !ant);
  };

  function playMusic() {
    inputEl.current.play();
    setControl(false);
  }

  function pauseMusic() {
    inputEl.current.pause();

    setControl(true);
  }

  function retroceder() {
    setCount(count - 1);
    setLimite(limite - 1);

    inputEl.current.currentTime = inputEl.current.currentTime - 5;
  }

  function avanzar() {
    if (count <= limite) {
      inputEl.current.currentTime = inputEl.current.currentTime + 5;
      setCount(count + 1);
    }
  }


  // bg-gradient-to-r from-[#00E5B9] from-5% to-[#005B82]
  return (
    <div className="relative montserrat  h-screen z-20 md:py-48 text-center  w-full mx-auto 
     overflow-y-scroll">
      {/* <Providers>
        <div className='z-50 absolute flex  top-0  w-full'>


          <Loguear />


        </div>
      </Providers> */}
      <div className="h-full z-50 mt-10 md:mt-0 md:flex items-center justify-center gap-x-10 ">

        <div
          className=""
        >

          <Radio2/>
          {/* <div className=" items-center h-[450px]  w-[280px] rounded-[5px] mx-auto flex flex-col justify-around shadow-2xl shadow-black/60 bg-white/90">
            <div className="mt-8 items-center -space-y-2 text-center flex flex-col justify-center">
              <Link href={"/"}>
                <Image
                  src={RadioIcon}
                  width={70}
                  height={70}
                  alt=""
                  priority={true}
                  className="rounded-2xl object-contain"
                />

              </Link>
              <h3 className="text-black/70 text-[11px] font-normal ">Radio Online</h3>


            </div>

            <RadioSpectre url="https://server.radiostreaming.com.ar/8738/stream " />

            <div className="text-[#636363] font-light text-sm">
              ESCUCHARTE ME HACE BIEN
            </div>

            <div className="flex  items-center ">

              <button onClick={handledBotonVolumen}>
                {controlVolumen ? (
                  controlVolumenAdelantar ? (
                    <FaVolumeDown className="text-black/40 h-5 w-5 mr-1" />
                  ) : (
                    <FaVolumeUp className="text-black/40 h-5 w-5 mr-1" />
                  )
                ) : (
                  <FaVolumeMute className="text-black/40 h-5 w-5 mr-1" />
                )}
              </button>
              <div className="w-full  rounded-full  -translate-y-1">
                <input
                  type="range"
                  className="w-[190px]    accent-[#636363]  h-0.5 rounded-lg"
                  min="0"
                  max="100"
                  ref={inputVolumen}
                  onChange={handledVolumen}
                />
              </div>
            </div>

            <div className="flex gap-x-5 mb-4">
              <button
                onClick={retroceder}
                onPointerEnter={() => setBotonAtras(true)}
                onMouseLeave={() => setBotonAtras(false)}
                className="fonts shadow-lg  shadow-black/50 transform hover:shadow-none transition-shadow"

              >
                <FaFastBackward
                  className="mx-auto"
                  color={`${botonAtras ? "#585858" : "#6e6e6e"}`}
                />
              </button>
              <button
                onPointerEnter={() => setBotonPlayPause(true)}
                onMouseLeave={() => setBotonPlayPause(false)}
                onClick={control ? playMusic : pauseMusic}
                className="fonts shadow-lg  shadow-black/50 transform hover:shadow-none transition-shadow"
              >
                {control ? (
                  <FaPlay
                    className="mx-auto"
                    color={`${botonPlayPause ? "#585858" : "#6e6e6e"}`}
                  />
                ) : (
                  <FaPause
                    className="mx-auto"
                    color={`${botonPlayPause ? "#585858" : "#6e6e6e"}`}
                  />
                )}
              </button>
              <button
                onPointerEnter={() => setBotonAdelantar(true)}
                onMouseLeave={() => setBotonAdelantar(false)}
                className="fonts shadow-lg  shadow-black/50 transform hover:shadow-none transition-shadow"
                onClick={avanzar}
              >
                <FaFastForward
                  className="mx-auto"
                  color={`${botonAdelantar ? "#585858" : "#6e6e6e"}`}
                />
              </button>
            </div>
          </div> */}
        </div>

        <div>
          <Providers>

            <div className=''>
              <ChatResponsive/>
            </div>
          </Providers>
        </div>

  
        <div className="absolute inset-0 h-screen -z-10">
          <div className="xl:bg-right xl:bg-no-repeat w-full opacity-70 bg-fondo h-full  translate-z-50 absolute "></div>

          <Image
            src={Portada}
            width={0}
            height={0}
            alt=""
            className="w-full h-full object-fill"
          />


        </div>
      </div>




    </div>
  );
};

export default Radio;
