"use client"


import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaFastBackward } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeDown } from "react-icons/fa";
import RadioIcon from '../public/logo crs.svg'

import { BsPlayCircleFill } from "react-icons/bs";
import { IoPlayCircle, IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { IoPauseCircle } from "react-icons/io5";

import { useAppContext } from "../(context)/AppWrapper.jsx";
import { RadioSpectre } from "./RadioSpectre.jsx";
import { RadioSpectreCelular } from "./RadioSpectreCelular";

const Radio = () => {

  const [control, setControl] = useState(true);
  const [count, setCount] = useState(0);
  const [limite, setLimite] = useState(3);
  const inputVolumen = useRef();
  const [botonAtras, setBotonAtras] = useState(false);
  const [botonPlayPause, setBotonPlayPause] = useState(false);
  const [botonAdelantar, setBotonAdelantar] = useState(false);
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

  return (
    <div

    >
      {/* md:mb-0 -mt-[90px] md:-mt-[0px] items-center  mx-auto w-full h-screen md:h-[475px]  xs:w-[300px]  flex flex-col justify-center gap-y-8 md:border-[2px] md:border-white */}

      {/* md:mb-0 relative bottom-[75px] md:bottom-0 md:-mt-[0px] items-center  mx-auto w-full h-screen md:h-[475px]  xs:w-[300px]  flex flex-col justify-center gap-y-8 md:border-[2px] md:border-white */}
      <div className=" md:mb-0 -mt-[90px] md:-mt-[0px] items-center  mx-auto w-full h-screen md:h-[475px]  xs:w-[300px]  flex flex-col justify-center gap-y-8 md:border-[2px] md:border-white ">

        <div className="  justify-center items-center flex flex-col text-center  flex-nowrap">
          <div className="">
            <Link href={"/"}>
              <Image
                src={RadioIcon}
                width={90}
                height={50}
                alt=""
                priority={true}
                className="object-contain mb-7 mb:mt-4 text-white"
              />
            </Link>
          </div>


        </div>


        <div className="visible z-20">
          <RadioSpectreCelular url="https://server.radiostreaming.com.ar/8738/stream " />
        </div>


        <div className="  text-white  monstserrat text-[17px] md:text-[15px]">
          ESCUCHARTE ME HACE BIEN
        </div>

        <div className="flex  items-center ">

          <button onClick={handledBotonVolumen}>
            {controlVolumen ? (
              controlVolumenAdelantar ? (
                <FaVolumeDown className="text-white h-4 w-4 mr-1" />
              ) : (
                <FaVolumeUp className="text-white h-4 w-4 mr-1" />
              )
            ) : (
              <FaVolumeMute className="text-white h-4 w-4 mr-1" />
            )}
          </button>
          <div className="w-full  rounded-full  -translate-y-1.5">
            <input
              type="range"
              className="w-[240px] md:w-[200px]    accent-[#FFFFFF]  h-0.5 rounded-lg"
              min="0"
              max="100"
              ref={inputVolumen}
              onChange={handledVolumen}
            />
          </div>
        </div>

        <div className="flex justify-center items-center  gap-x-8 mb:mb-4 mb:-mt-4  ">
          <button
            onClick={retroceder}
            onPointerEnter={() => setBotonAtras(true)}
            onMouseLeave={() => setBotonAtras(false)}
            className=""

          >
            <IoPlaySkipBackSharp
              className="mx-auto w-[35px] h-[35px] text-white fill-white"
              color={`${botonAtras ? "#FFFFF" : "#FFFFF"}`}
            />
          </button>
          <button
            onPointerEnter={() => setBotonPlayPause(true)}
            onMouseLeave={() => setBotonPlayPause(false)}
            onClick={control ? playMusic : pauseMusic}
            className=""
          >
            {control ? (
              <IoPlayCircle
                className="mx-auto w-[70px] h-[70px] md:w-[60px] md:h-[60px]"
                color={`${botonPlayPause ? "#FFFFF" : "#FFFFF"}`}
              />
            ) : (
              <IoPauseCircle
                className="mx-auto w-[70px] h-[70px] md:w-[60px] md:h-[60px]"
                color={`${botonPlayPause ? "#FFFFF" : "#FFFFF"}`}
              />
            )}
          </button>
          <button
            onPointerEnter={() => setBotonAdelantar(true)}
            onMouseLeave={() => setBotonAdelantar(false)}
            className=""
            onClick={avanzar}
          >
            <IoPlaySkipForwardSharp
              className="mx-auto w-[35px] h-[35px] text-white fill-white"
              color={`${botonAdelantar ? "#FFFFF" : "#FFFFF"}`}
            />
          </button>
        </div>
      </div>


    </div>
  )
}
export default Radio
