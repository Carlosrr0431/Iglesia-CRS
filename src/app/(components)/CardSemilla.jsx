"use client"

import Image from "next/image";
import React, { useState, useRef } from "react";


import Modal from "./Modal.jsx";



const CardSemilla = ({ card }) => {

  const [showModal, setShowModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsAnimating(true);
    }



  }

  function handleFlipLeave() {
    if (!isAnimating) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false)
    }
  }

  return (
    <div
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlipLeave}
      className="flex flex-col  relative items-center justify-center h-[180px] w-[230px] cursor-pointer ">
      <div

        className={`w-full h-full   hover:brightness-125 items-center flex flex-col  bg-white  justify-center  z-10 `}
        onClick={() => {
          setShowModal(true)
          setIsAnimating(false)
        }}
      >

        <Image
          className=""
          src={card.icon}
          alt=""
          width={0}
          height={0}
        />

      </div>


      <div
        onClick={() => 
          setShowModal(true)
        }
        className={`block  top-0 bottom-0     w-full h-[40%]  bg-center relative z-20 bg-gradient-to-r ${card.colorGradient[0]} ${card.colorGradient[1]} flex flex-col justify-center items-center animacionCard `}
      >
        <div className="custom-shape-divider-top-1709247386 mb-10">
        

        </div>
        <h2 className="text-white ">{card.name}</h2>

      </div>



      {
        showModal && <Modal showModal={showModal} setShowModal={() => setShowModal(false)} nameCard={card.name} />
      }

    </div>
  )
}

export default CardSemilla;

