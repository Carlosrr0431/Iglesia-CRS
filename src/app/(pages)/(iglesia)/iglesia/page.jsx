"use client"


import Image from "next/image"


import Home from "../../../public/portada.jpg"


import { sendForm } from "../../../action.js";

import { HiPlusCircle } from "react-icons/hi2";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import { Toaster, toast } from 'sonner'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Portada from "../../../public/portada.jpg";

// import Portada from "../../public/PORTADA PARA MI SEMILLA.jpg";
// import Degradado from '../../public/DEGRADADO PARA APARTADO MI SEMILLA.svg'


const Iglesia = () => {

    const [client, setClient] = useState(false)
    const divRef = useRef()
    const [scrollNum, setScrollNum] = useState(0)
    const telefonoRef = useRef()
    const nombreRef = useRef()
    const motivoRef = useRef()

    // Animacion de ease in out

    // useGSAP(() => {


    //     gsap.fromTo(
    //       "#home",
    //       {
    //         opacity: 0,
    //         y: 20,
    //       },
    //       {
    //         ease: "power1.inOut",
    //         opacity: 1,
    //         y: 0,
    //         delay: 0.5,
    //         stagger: 0.1,
    //       }
    //     );
    //   });

    // Animacion de achicar agrandar
    useGSAP(
        () => {


            const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

            tl.fromTo(
                "#home",
                { scale: 0.5 },
                { scale: 1, opacity: 1, duration: 1.4 },
            );

            tl.fromTo(
                "#historia",
                { scale: 0.5 },
                { scale: 1, opacity: 1, duration: 1.4 },
            );

        },
        { scope: divRef },
    );


    const handleScroll = () => {
        setScrollNum(divRef.current.scrollTop)
    }

    useEffect(() => {
        setClient(true)
    }, [])



    return <main ref={divRef} className="bg-fondo2 bg-red-800  mix-blend-multiply relative  overflow-y-auto h-full" onScroll={handleScroll}  >

        {/* screens: {
      xs: '475px',
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    }, */}
        <section className="w-full h-full">
            <div id="home" className="montserrat h-full text-center flex items-center gap-x-4 md:gap-x-20 justify-center xl:pt-37 xl:text-left  container mx-auto">

                <div className="flex flex-col gap-y-4 items-center"><Image src={Home} width={0} height={0} alt="" className="w-[11vh] h-[11vh] xs:w-[15vh] xs:h-[15vh] md:w-[20vh] md:h-[20vh] lg:w-[30vh] lg:h-[30vh]  rounded-full object-cover border-solid border-[4px] border-white
"/>
                    <h2 className="text-center">Nuestra historia</h2>
                    <Link href="#historia" className="transition-all duration-500"><HiPlusCircle className="items-center mx-auto h-[50px] w-[50px]" /></Link>
                </div>

                <div className="flex flex-col gap-y-4 items-center"><Image src={Home} width={0} height={0} alt="" className="w-[11vh] h-[11vh] xs:w-[15vh] xs:h-[15vh]  md:w-[20vh] md:h-[20vh] lg:w-[30vh] lg:h-[30vh]   shrink-0 grow-0 rounded-full object-cover border-solid border-[4px] border-white
"/>
                    <h2 className="text-center">Miembros activos</h2>
                    <Link href="#miembros" className="transition-all duration-500"><HiPlusCircle className="items-center mx-auto h-[50px] w-[50px]" /></Link>
                </div>

                <div className="flex flex-col gap-y-4 items-center"><Image src={Home} width={0} height={0} alt="" className="w-[11vh] h-[11vh] xs:w-[15vh] xs:h-[15vh] md:w-[20vh] md:h-[20vh] lg:w-[30vh] lg:h-[30vh]   shrink-0 grow-0 rounded-full object-cover border-solid border-[4px] border-white
"/>
                    <h2 className="text-center">Pedir oración</h2>
                    <Link href="#formOracion" className="transition-all duration-500"><HiPlusCircle className="items-center mx-auto h-[50px] w-[50px]" /></Link>
                </div>
            </div>
        </section>

        <div

            id="historia" className="w-full montserrat h-screen  mb-[200px]">




            <h2

                className="h2 mb-8 mx-auto text-center"
            >
                Nuestra <span className="font-bold ">Historia</span>
            </h2>

            <div className="mb-10 px-2 py-0 lg:py-20 h-[80%] lg:max-h-[80%] w-full flex justify-center">
                <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                    <div className="lg:w-1/2">
                        <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none lg:rounded-lg"

                        >
                            <Image src={Portada} height={0} width={0} alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none intro lg:rounded-lg overflow-y-scroll max-h-[40%]  lg:max-h-[80%] biblia ">
                        <h2 className="text-3xl text-gray-800 font-bold">
                            Nuestros comienzos como
                            <span className="text-indigo-600"> Iglesia</span>
                        </h2>
                        <p className="mt-4 text-gray-600">
                            The Eco-Tracker project aims to create a web-based platform that encourages individuals to adopt
                            sustainable lifestyle choices and actively contribute to environmental conservation. The platform will
                            provide users with personalized tracking, education, and engagement features to empower them to make
                            eco-friendly decisions in various aspects of their lives.
                        </p>

                    </div>
                </div>
            </div>


            <div className="mb-10 px-2 py-0 lg:py-20 h-[80%] lg:max-h-[80%] w-full flex justify-center">
                <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                    <div className="lg:w-1/2 order-2">
                        <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none lg:rounded-lg"

                        >
                            <Image src={Portada} height={0} width={0} alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="order-1 py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none intro lg:rounded-lg overflow-y-scroll max-h-[40%]  lg:max-h-[80%] biblia ">
                        <h2 className="text-3xl text-gray-800 font-bold">
                            Nuestros comienzos como
                            <span className="text-indigo-600"> Iglesia</span>
                        </h2>
                        <p className="mt-4 text-gray-600">
                            The Eco-Tracker project aims to create a web-based platform that encourages individuals to adopt
                            sustainable lifestyle choices and actively contribute to environmental conservation. The platform will
                            provide users with personalized tracking, education, and engagement features to empower them to make
                            eco-friendly decisions in various aspects of their lives.
                        </p>

                    </div>
                </div>
            </div>
            {/* <article>
                <div className="montserrat text-center lg:flex lg:items-center  justify-center  xl:text-left h-full container mx-auto ">


                    <div className="w-1/2"><Image src={Home} width={0} height={0} alt="" className="object-cover w-full h-full rounded-sm  scale-75
"/></div>
                    <div className="w-1/2 flex space-y-8 flex-col h-full "> <h1 clas className="text-start">Nuestos comienzos</h1> <h2 className=" text-start w-[80%]">lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae fugit accusamus velit minus fuga ducimus sint.</h2>
                    </div>
                </div>
            </article> */}



            {/* <article>
                <div className="montserrat  text-center flex items-center  justify-center   h-full container ml-12 mx-auto 
    ">
                    <div className="w-1/2 flex space-y-8 flex-col h-full "> <h1 clas className="text-end">Nuestos comienzos</h1> <h2 className=" text-end text-balance">lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae fugit accusamus velit minus fuga ducimus sint.</h2>
                    </div>
                    <div className="w-1/2"><Image src={Home} width={0} height={0} alt="" className="object-cover w-full h-full rounded-sm scale-75
"/></div>

                </div>
            </article> */}


            {/* <article>
                <div className="montserrat  text-center flex items-center  justify-center  xl:text-left h-full container mx-auto">
                    <div className="w-1/2"><Image src={Home} width={0} height={0} alt="" className="object-cover w-full h-full rounded-sm scale-75
"/></div>
                    <div
                        className="w-1/2 flex space-y-8 flex-col h-full "> <h1 clas className="text-start">Nuestos comienzos</h1> <h2 className=" text-start w-[80%]">lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae fugit accusamus velit minus fuga ducimus sint.</h2>
                    </div>
                </div>
            </article> */}

        </div>

        <section id="miembros" className="relative mx-auto montserrat w-[90%] h-[80%] mt-[600px]">
            <div className="h-full   text-center">
                <div className="container mx-auto h-full flex flex-col justify-center">

                    <h2

                        className="h2 mb-8 mx-auto text-center"
                    >
                        Nuestro equipo <span className="font-bold ">Ministerial</span>
                    </h2>

                    <div class="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none lg:rounded-lg"

                    >
                        <Image src={Portada} height={0} width={0} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>





        <section id="formOracion" className="md:mt-[100px] lg:mt-[200px] h-[90%] w-full " >

            <div className={`  
     items-center justify-center h-full w-full 
    `}>
                <div className="rounded-[10px] shadow-2xl bg-white/20 shadow-black/20 p-8 m-4 md:max-w-2xl md:mx-auto">
                    <h1 className="block w-full text-center text-grey-darkest mb-6">Pedir oración</h1>
                    <form className="mb-4 md:flex  md:flex-wrap md:justify-between" action={(formData) => sendForm(formData)} onSubmit={() => setShowModal(false)}>
                        <div className="flex flex-col mb-4 md:w-1/2">

                            <input className="border py-2 px-3 text-grey-darkest md:mr-2 focus:outline-none focus:bg-white/90 text-black text-lg focus:text-black rounded-[5px]" type="text" name="name" id="name" placeholder="Nombre y Apellido" />
                        </div>
                        <div className="flex flex-col mb-4 md:w-1/2">

                            <input className="border text-lg py-2 px-3 text-grey-darkest md:ml-2 focus:outline-none focus:bg-white/90 text-black focus:text-black rounded-[5px]" type="number" name="phone" id="phone" placeholder="Número de celular" />
                        </div>
                        <div className="flex flex-col mb-4 md:w-full">
                            <textarea
                                placeholder="Motivo de la oración"
                                rows="4" id="mensaje"
                                name="mensaje"
                                className="px-3 py-2 bg-white text-lg border-gray-900 focus:outline-none focus:bg-white/90 text-black focus:text-black rounded-[5px]"
                            ></textarea>
                        </div>


                        <button onClick={() => toast.success('El pedido de oración fue enviado con exito!!!', {
                            description: "Estaremos orando por ti y tu familia."
                        })} className="block bg-teal hover:bg-teal-dark border-[2px]  border-solid border-white text-white uppercase text-lg mx-auto p-2 rounded-[5px] hover:bg-white hover:text-black w-full" type="submit"  >Enviar</button>
                    </form>
                </div>
            </div>



            {

                client && (scrollNum >= 300 && <div className="cursor-pointer fixed bottom-0 xl:mb-8 xl:ml-8 mb-24 ml-8  p-4 rounded-[100%] w-15 h-15 bg-blue-800 " onClick={() => divRef.current.scrollTop = 0}>
                    <FaArrowUp />
                </div>)
            }
        </section>

    </main>





}

export default Iglesia
