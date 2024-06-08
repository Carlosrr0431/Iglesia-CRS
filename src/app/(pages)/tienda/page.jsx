"use client"

import React from 'react';
import { useState } from "react";


import Stepper from '../../(components)/steper/Stepper';
import StepperControl from '../../(components)/steper/StepperControl';
import Account from '../../(components)/steper/steps/Account';
import Details from '../../(components)/steper/steps/Details';
import Final from '../../(components)/steper/steps/Final';
import Payment from '../../(components)/steper/steps/Payment';
import { UseContextProvider } from '../../(context)/StepperContext';
import axios from 'axios';





const Tienda = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const getPayment = async () => {

    const id = await axios.post()


    const response = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymenyId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();

      console.log(data);
    }
  }
  const steps = [
    "Inicios",
    "Luchas",
    "Progreso",
    "Actual",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Payment />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (

    <div>

    </div>
    // <div className="mx-auto mt-24 rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">

    //   <div className="horizontal container mt-5 ">
    //     <Stepper steps={steps} currentStep={currentStep} />

    //     <div className="my-10 p-10 ">
    //       <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
    //     </div>
    //   </div>


    //   {currentStep !== steps.length && (
    //     <StepperControl
    //       handleClick={handleClick}
    //       currentStep={currentStep}
    //       steps={steps}
    //     />
    //   )}
    // </div>
  );
};

export default Tienda;
