"use client"

import Image from "next/image";
import Portada from "./public/portada.jpg";
import Degradado from './public/degradado para inicio.svg'
import Socials from "./(components)/Socials";
import ModalOracion from "./(components)/ModalOracion";
import { useState } from "react";

const Home = () => {

  const [showModal, setShowModal] = useState(false);


  return (
    <div className="h-full w-full relative ">

      <div className="w-full h-full relative">
        <div className={`${showModal ? 'hidden' : 'block'} text-center montserrat flex   flex-col justify-center xl:mx-auto w-full items-center  xl:text-center h-full container`}>
          <h1

            className="h2 z-20 xl:w-[1200px] font-bold mx-auto items-center tracking-[10px]"
          >
            ¡BIENVENIDO! <br />
            <span className="font-normal tracking-[0px]"> Un lugar para adorar al</span> <span>REY</span>
          </h1>

          <button onClick={() => setShowModal(true)} className="bg-transparent text-black/70 z-20 hover:bg-black/90  font-semibold hover:text-white py-2 px-4 bg-white  hover:border-transparent rounded">
            PEDIR ORACION
          </button>

        </div>
      </div>


      <div className="absolute inset-0  h-screen -z-40 w-full">
        <div className="xl:bg-right xl:bg-no-repeat w-full h-full absolute translate-z-50  ">   <Image
          src={Portada}
          width={0}
          height={0}
          alt=""
          className="w-full h-full object-cover opacity-75"
        /></div>


        <Image src={Degradado}
          width={0}
          height={0}
          alt=""
          className="w-full  h-full absolute z-20 inset-0 object-cover" />

      </div>

      {
        showModal && <ModalOracion showModal={showModal} setShowModal={() => setShowModal(false)} />
      }
    </div>
  );
};

export default Home;