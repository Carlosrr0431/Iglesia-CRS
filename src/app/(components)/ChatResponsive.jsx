"use client"
import React from 'react'


import { useEffect, useRef, useState } from "react";
import Pusher from 'pusher-js'

import { postData } from "../action.js";

import { BsFillSendFill } from "react-icons/bs";

import { useAppContext } from "../(context)/AppWrapper.jsx";
import { signIn, useSession } from "next-auth/react";

import { modificarPermiso } from "../lib/data.js";
import Image from "next/image";
import Providers from "../(providers)/Providers.jsx";

export const ChatResponsive = () => {

    const [messages, setMessages] = useState([]);
    const { data: session } = useSession()
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const { userName } = useAppContext();
    const [nameModificado, setNameModificado] = useState("Anonimo");
    const inputChat = useRef();
    const divRef = useRef()
    const { disabled } = useAppContext()
    const formRef = useRef()
    const [permiso, setPermiso] = useState(true)

    const handleBlock = async (email) => {

        console.log("email: " + email);

        const data = await modificarPermiso(email, true)


    }

    // const alta = async () => {
    //     if (session?.user?.email != undefined) {
    //         const data = await obtenerUsuario(session?.user?.email)
    //         setPermiso(data.permisoChat)
    //     }
    // }
    // alta()


    useEffect(() => {


        let pusher = new Pusher("3f6bbe996346c336b473", {
            cluster: "sa1"
        })

        let channel = pusher.subscribe('chat');

        channel.bind('hello', function (data) {

            const newMessage = {
                message: data.message,
                nombre: data.nombre,
                email: data.email,
                imagen: data.imagen
            };

            setMessages((prev) => [...prev, newMessage])

            setTimeout(() => {
                actualizarScroll()
            }, 100);

        });

        return () => {
            pusher.unsubscribe('chat')
        }


    }, []);



    const handledInput = (e) => {
        setName(e.target.value);
    };

    const enterClick = (e) => {
        if (e.keyCode == "13") {
            setNameModificado(name);

            inputChat.current.select();
        }

    };

    const enterClick2 = (e) => {
        e.preventDefault();

        if (e.keyCode == "13") {
            const newMessage = {
                body: message,
                from: nameModificado,
            };

            setTimeout(() => {
                actualizarScroll()
            }, 100);
        }


    };

    const enterClick3 = (e) => {

        e.preventDefault()

        setTimeout(() => {
            actualizarScroll()
        }, 100);
    }

    const actualizarScroll = () => {
        divRef.current.scrollTop = divRef.current.scrollHeight

    }




    return (
        <div className="h-[50vh] border-[2px] border-white md:h-[70vh] max-w-[600px] md:w-[700px] flex flex-col relative">
            <div className="bg-transparent flex-1 overflow-y-scroll">


                <ul className="h-full text-start  overflow-x-hidden  " ref={divRef} >
                    {messages.map((message, index) => (



                        <li key={index} className="ml-2 w-full max-w-md items-start">
                            <div


                                className="relative flex items-center space-x-2.5 py-4 hover:bg-layer-3 focus:z-20 focus:outline-none focus:ring-2 focus:ring-heading/80"
                            >
                                <div className="flex-shrink-0">
                                    <div className="relative">
                                        <Image
                                            src={message.imagen}

                                            alt=""
                                            width={40}
                                            height={40}
                                            className="  rounded-full"
                                        />

                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-semibold text-white/60 text-heading">
                                            {message.nombre}
                                        </h3>

                                    </div>

                                    <p onClick={() => navigator.clipboard.writeText(message.message)} className="px-3.5 py-2 bg-gray-400 rounded-3xl rounded-tl-none justify-start  items-center gap-3 inline-flex text-sm font-medium text-text text-black ">
                                        {message.message}

                                    </p>

                                </div>
                            </div>




                        </li>

                    ))}
                </ul>

            </div>
            <div className="bg-trasparent px-4 py-2">
                <div className="flex items-center">
                    {/* <form action={async (formData) => {
                        await postData(formData, session?.user?.name, session?.user?.email, session?.user?.image);
                        formRef.current?.reset();
                    }}
                        ref={formRef} className="flex gap-x-2 xs:gap-x-4  shadow-sm w-full ">
                        <input class="w-full border-[1px] outline-none border-gray-400 bg-transparent  py-1 px-2 mr-2 text-white" type="text"
                            name="message"
                            ref={inputChat}
                            placeholder="Escribe tu mensaje..." onKeyUp={enterClick2}

                            autoFocus />
                        <button class=" text-white font-medium  rounded-full">
                            <BsFillSendFill className="w-6 h-6 xs:w-8 xs:h-8 select-none rounded-lg  text-center align-middle font-sans text-xs font-bold uppercase text-white  transition-all hover:scale-110 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-non" />
                        </button>
                    </form> */}

                    {
                        session?.user?.email == undefined ? (<Providers>
                            <button
                                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 hover:bg-blue-50  right-[20%] top-[30%] xs:right-[30%] xs:top-[30%] mx-auto xs:w-1/2">
                                <div className="relative flex items-center space-x-8 justify-center " onClick={() => {


                                    signIn('google')
                                }}>
                                    <Image src="https://www.svgrepo.com/show/475656/google-color.svg"
                                        className="absolute left-0 w-5" alt="google logo" width={0} height={0} />
                                    <span
                                        className="block w-max font-semibold tracking-wide text-white dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base hover:text-black">Unirse al Chat
                                    </span>
                                </div>
                            </button>
                        </Providers>) : (
                            <form action={async (formData) => {
                                await postData(formData, session?.user?.name, session?.user?.email, session?.user?.image);
                                formRef.current?.reset();
                            }}
                                ref={formRef} className="flex gap-x-2 xs:gap-x-4  shadow-sm w-full ">
                                <input className="w-full border-[1px] outline-none border-gray-400 bg-transparent  py-1 px-2 mr-2 text-white" type="text"
                                    name="message"
                                    ref={inputChat}
                                    placeholder="Escribe tu mensaje..." onKeyUp={enterClick2}

                                    autoFocus />
                                <button className=" text-white font-medium  rounded-full">
                                    <BsFillSendFill className="w-6 h-6 xs:w-8 xs:h-8 select-none rounded-lg  text-center align-middle font-sans text-xs font-bold uppercase text-white  transition-all hover:scale-110 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-non" />
                                </button>
                            </form>
                        )
                    }

                </div>
            </div>
        </div>
    )
}
