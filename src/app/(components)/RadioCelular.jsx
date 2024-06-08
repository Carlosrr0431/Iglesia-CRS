"use client"

import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { fadeIn, variants } from "../variants.js";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaFastBackward } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeDown } from "react-icons/fa";
import RadioIcon from '../public/Logo radio online.svg'

import Link from "next/link";
import Image from "next/image";
import { RadioSpectre } from "./RadioSpectre.jsx";
import { useAppContext } from "../(context)/AppWrapper.jsx";

const RadioCelular = () => {

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
        inputEl.current.volume = 1
        inputVolumen.current.value = 100
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
        <div className="w-full h-screen flex ml-10 mt-20">
            <motion.div
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                <div className=" items-center h-[200px]  w-[350px] rounded-[45px] mx-auto flex flex-col justify-around shadow-2xl shadow-black/60 bg-white/90">
                    {/* <div className="mt-3">
                        <Link href={"/"}>
                            <Image
                                src={RadioIcon}
                                width={100}
                                height={40}
                                alt=""
                                priority={true}
                                className="rounded-2xl object-contain"
                            />
                        </Link>
                    </div> */}

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

                    <div className="flex gap-x-10 mb-4">
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
                </div>
            </motion.div>
        </div>
    )
}

export default RadioCelular
