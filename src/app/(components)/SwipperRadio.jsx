import React, { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";


import Image from "next/image";
import Radio from './Radio';
import { ChatResponsive } from './ChatResponsive';
import Portada from "../public/IMAGEN PARA PORTADA DE RADIO.jpg";
import Providers from '../(providers)/Providers';
import { useAppContext } from '../(context)/AppWrapper';




export const SwipperRadio = () => {

    const [swiper, setSwiper] = useState("Radio")
    const { swiperRef } = useAppContext();

    return (
        <div className='w-full h-full'>
            <div class="flex divide-x divide-white items-center justify-center w-full p-4 row z-50">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className={`px-6 py-3 font-sans text-xs font-bold text-center uppercase align-middle transition-all border-r-0 rounded-lg rounded-l-none rounded-r-none select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none z-50 hover:bg-gray-900/10 active:bg-gray-900/20 ${swiper == 'Radio' ? 'font-extrabold text-2xl text-white' : 'text-gray-900'} `}
                    type="button">
                    Radio
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className={`px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all border-r-0 rounded-lg rounded-l-none rounded-r-none select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none z-50 hover:bg-gray-900/10 active:bg-gray-900/20 ${swiper == 'Chat' ? 'font-extrabold text-2xl text-white' : 'text-gray-900'}`}
                    type="button">
                    Chat
                </button>

            </div>

            <Swiper

                onBeforeInit={(swiper) => {

                    swiperRef.current = swiper;



                }}
                spaceBetween={50} slidesPerView={1}

                pagination={{
                    clickable: true,
                }}

                onActiveIndexChange={(e) => {

                    if (e.activeIndex == 0) {
                        setSwiper("Radio")
                    } else if (e.activeIndex == 1) {
                        setSwiper("Chat")
                    }

                }}
                modules={[Pagination]}
                className="my-[50px] swipperClass"

            >



                <SwiperSlide>
                    <Radio />
                </SwiperSlide>

                <SwiperSlide>
                    <Providers>
                        <ChatResponsive />
                    </Providers>
                </SwiperSlide>

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

            </Swiper>
        </div>
    )
}
