import React, { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";


import Image from "next/image";
import Radio from './Radio';
import { ChatResponsive } from './ChatResponsive';
import Portada from "../public/para radio celular-03.svg";
import Providers from '../(providers)/Providers';
import { useAppContext } from '../(context)/AppWrapper';




export const SwipperRadio = () => {

    const { swiperRef, setSwiper, swiper } = useAppContext();


    useEffect(() => {


        if (swiper == "Chat") {
            swiperRef.current?.slideNext()
        }
    })


    return (
        <div className=''>

            <div className="flex md:hidden  items-center justify-center w-full ">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className={`px-6 py-3 font-sans text-xs font-bold text-center uppercase align-middle transition-all border-r-0 rounded-lg rounded-l-none rounded-r-none select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none z-50  ${swiper == 'Radio' ? 'font-normal text-2xl text-white ' : 'text-gray-900'} `}
                    type="button">
                    Radio online
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className={`px-6 py-3 font-sans text-xs font-bold text-center  uppercase align-middle transition-all border-r-0 rounded-lg rounded-l-none rounded-r-none select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none z-50   ${swiper == 'Chat' ? 'font-normal text-2xl text-white' : 'text-gray-900'}`}
                    type="button">
                    Chat en vivo
                </button>

            </div>
            <Swiper

                onBeforeInit={(swiper) => {

                    swiperRef.current = swiper;



                }}
                spaceBetween={0} slidesPerView={1}


                onActiveIndexChange={(e) => {

                    if (e.activeIndex == 0) {
                        setSwiper("Radio")
                    } else if (e.activeIndex == 1) {
                        setSwiper("Chat")
                    }

                }}
                modules={[]}
                className="swipperClass"

            >



                <SwiperSlide className=''>
                    <Radio />

                    <div className="block fixed inset-0 h-screen -z-10">
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


                </SwiperSlide>

                <SwiperSlide>
                    <Providers>
                        <ChatResponsive />
                    </Providers>
                </SwiperSlide>



            </Swiper>
        </div>
    )
}
