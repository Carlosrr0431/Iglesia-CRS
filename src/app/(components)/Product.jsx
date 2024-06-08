import Image from "next/image";
import React, { useRef, useState } from "react";

import { initMercadoPago } from "@mercadopago/sdk-react";

import { motion } from "framer-motion";

import { fadeIn, variants } from "../variants.js";



import axios from "axios";
import { useRouter } from 'next/navigation'
import Modal from "./Modal.jsx";

const Product = ({ card }) => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter()
  const inputMonto = useRef()
  const [monto, setMonto] = useState("$")



  initMercadoPago("APP_USR-cbb10d69-5861-4726-b452-a1920328fed9", {
    locale: "es-AR",
  });

  const createPreferenc = async () => {
    try {
      const response = await axios.post(
        "/api/create_preference",
        {
          title: "Donacion",
          quantity: 1,
          price: 100,
        }
      );

      const { result } = response.data;

      // console.log(result.sandbox_init_point);


      router.replace(result.sandbox_init_point)

      // return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {

    const id = await createPreferenc();



    if (id) {
      setPreferenceId(id);
    }
  };

  const handledInput = (e) => {
    setMonto(e.target.value);
  };

  return (


    <div className="flex items-center justify-center h-[300px] cursor-pointer ">
      <div
        className={`w-[230px] h-[200px] hover:brightness-125`}
        onClick={() => setShowModal(true)}
      >
        <div
          className=" items-center flex flex-col w-[100%] h-[100%] border-[1px] bg-white/80 text-white rounded-lg justify-center  gap-y-4   "
        >
          <Image
            className="rounded-t-lg mt-8 items-center h-[100px] w-[100px]"
            src={card.icon}
            alt=""
            width={0}
            height={0}
          />
          <div className=" items-center mx-auto flex ">

            <h2 className="text-black">{card.name}</h2>

          </div>
        </div>

      </div>
      {
        showModal && <Modal showModal={showModal} setShowModal={() => setShowModal(false)} nameCard={card.name} />
      }

    </div>


  );
};

export default Product;