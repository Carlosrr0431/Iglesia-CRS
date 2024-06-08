"use client"

import Image from "next/image";
import React, { useState } from "react";

import Modal from "./Modal.jsx";

const CardFlip = ({ card }) => {

    const [isFlipped, setIsFlipped] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showModal, setShowModal] = useState(false);


    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
  


    }

    function handleFlipLeave() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(false);
        } else {
            setIsFlipped(!isFlipped);
            setIsAnimating(true)
    
        }
    }


    return (
        <div className="flex  items-center justify-center h-[200px] cursor-pointer ">
            <div
                className="flip-card w-[230px] h-[200px] rounded-2xl "
                onMouseEnter={handleFlip}
                onMouseLeave={handleFlipLeave}
                onClick={() => setShowModal(true)}
            >


                <div
                    className="flip-card-inner w-[90%] h-[90%] md:w-[70%] md:h-[70%] lg:w-[90%] lg:h-[90%] "

                >
                    <div
                        className="absolute items-center flex flex-col w-[100%] h-[100%] border-[1px] bg-white text-white rounded-lg justify-center"
                    >
                        <Image
                            className={`"object-cover ${card.name != "Primicia" && card.name != "Diezmo" ? 'lg:min-h-[100px] lg:min-w-[100px] md:max-h-[80px] md:max-w-[80px]' : 'lg:min-h-[70px] lg:min-w-[70px] md:max-h-[85px] md:max-w-[85px]'}`}
                            src={card.icon}
                            alt=""
                            width={0}
                            height={0}
                        />



                    </div>


                    <div
                        className="w-[100%] h-[100%] bg-cover border-[1px] text-white bg-white rounded-lg p-4 flex flex-col justify-evenly"

                    >
                        <button

                            type="button"
                            className="inline-block rounded mx-auto   text-md font-medium uppercase leading-normal  text-black/80 rotate-280"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            {card.name}
                        </button>



                    </div>
                </div>
            </div>

            {
                showModal && <Modal showModal={showModal} setShowModal={() => setShowModal(false)} nameCard={card.name} />
            }
        </div>

    )
}

export default CardFlip
