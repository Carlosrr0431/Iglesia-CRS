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

        className={`w-full h-full   hover:brightness-125 items-center flex flex-col  bg-white  justify-center gap-y-10 z-10 `}
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
        onClick={() => {
          setShowModal(true)
          setIsAnimating(false)
        }}
        className={`${isAnimating ? 'block' : 'hidden'}  top-0 bottom-0 mt-[75%]  w-full h-[40%]  bg-center absolute z-20 bg-gradient-to-r ${card.colorGradient[0]} ${card.colorGradient[1]} flex flex-col justify-center items-center animacionCard `}
      >
        <div className="custom-shape-divider-top-1709247386">
          {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg> */}

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

