"use client"



import Radio2 from '../../(components)/Radio'

import Providers from '../../(providers)/Providers'


import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Portada from "../../public/IMAGEN PARA PORTADA DE RADIO.jpg";
import { ChatResponsive } from "@/app/(components)/ChatResponsive";
import { SwipperRadio } from '@/app/(components)/SwipperRadio';

import dynamic from "next/dynamic";

const RadioInterno = dynamic(
  () => {
    return import("../../(components)/RadioInterno.jsx");
  },
  { ssr: false }
);


const Radio = () => {




  return (
    <div className="relative montserrat  h-[100dvh] z-20   w-full mx-auto 
     ">

      <div><RadioInterno /></div>

    </div>


  );
};

export default Radio;



// "use client"



// import Radio2 from '../../(components)/Radio'

// import Providers from '../../(providers)/Providers'


// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";
// import Portada from "../../public/IMAGEN PARA PORTADA DE RADIO.jpg";
// import { ChatResponsive } from "@/app/(components)/ChatResponsive";
// import { SwipperRadio } from '@/app/(components)/SwipperRadio';


// const Radio = () => {

//   return (
//     <div className="relative montserrat  h-full z-20   w-full mx-auto
//      ">


//       <div className='visible md:hidden'>
//         <SwipperRadio />
//       </div>


//       <div className="h-full z-50 my-[50%] mx-auto md:mt-0 md:flex items-center justify-center gap-x-10  hidden md:visible ">

//         <div
//           className=""
//         >

//           <Radio2 />

//         </div>
//         <div className=''>
//           <Providers>

//             <div className=''>
//               <ChatResponsive />
//             </div>
//           </Providers>
//         </div>


//         <div className="fixed inset-0 h-screen -z-10">
//           <div className="xl:bg-right xl:bg-no-repeat w-full opacity-70 bg-fondo h-full  translate-z-50 fixed  "></div>

//           <Image
//             src={Portada}
//             width={0}
//             height={0}
//             alt=""
//             className="w-full h-full object-fill"
//           />


//         </div>
//       </div>








//     </div>
//   );
// };

// export default Radio;
