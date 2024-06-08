"use client"

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Pusher from 'pusher-js'

import { postData } from "../action.js";

import { BsFillSendFill } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { getEmojis } from "../api/getEmojis.js";
import { useAppContext } from "../(context)/AppWrapper.jsx";
import { signIn, useSession } from "next-auth/react";
import { MdOutlineBlock } from "react-icons/md";
import { modificarPermiso, obtenerUsuario } from "../lib/data.js";
import Image from "next/image.js";
import { useSearchParams } from "next/navigation.js";
import Providers from "../(providers)/Providers.jsx";

const ChatAlt = () => {
    const [messages, setMessages] = useState([]);
    const { data: session } = useSession()
    const [message, setMessage] = useState("");
    const [popover, setPopover] = useState(true);
    const [emojis, setEmojis] = useState([]);
    const [name, setName] = useState("");
    const { userName } = useAppContext();
    const [nameModificado, setNameModificado] = useState("Anonimo");
    const inputChat = useRef();
    const divRef = useRef()
    const { disabled } = useAppContext()
    const formRef = useRef()
    const [permiso, setPermiso] = useState(true)
    const searchParams = useSearchParams()

    const search = searchParams.get('callbackUrl')

    const handleBlock = async (email) => {

        console.log("email: " + email);

        const data = await modificarPermiso(email, true)


    }

    const alta = async () => {
        if (session?.user?.email != undefined) {
            const data = await obtenerUsuario(session?.user?.email)
            setPermiso(data.permisoChat)
        }
    }
    alta()


    useEffect(() => {



        obtener()

        let pusher = new Pusher("3f6bbe996346c336b473", {
            cluster: "sa1"
        })

        let channel = pusher.subscribe('chat');

        channel.bind('hello', function (data) {

            const newMessage = {
                message: data.message,
                nombre: data.nombre,
                email: data.email
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


    const obtener = async () => {
        const data = await getEmojis();

        setEmojis(JSON.parse(data));
    };

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


    const handlePopover = () => {
        setPopover((ant) => !ant);
    };


    return (
        <div

            className="montserrat mt-2  w-[95vw] h-[55vh] md:h-[450px] border-[2px] md:w-[700px]   rounded-[2px] border-white text-white md:flex items-center justify-center  md:flex-col container content-center mx-auto"
        >

            <div className="relative xl:w-[550px] items-center rounded-[2px]">
                {/* [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]  */}
                {
                    disabled &&
                    <Providers>
                        <button
                            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 hover:bg-blue-50 absolute right-[20%] top-[30%] xs:right-[30%] xs:top-[30%]  xs:w-1/2">
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
                    </Providers>

                }


                <ul className="h-80 text-start  overflow-y-auto items-start" ref={divRef} >
                    {messages.map((message, index) => (
                        <li


                            key={index}
                            className={`p-1 ${disabled ? 'invisible' : 'visible'}  table text-[17px] rounded-md items-start w-full font-extralight text-start ${message.nombre === userName ? "bg-sky-700 ml-auto" : ""
                                }`}

                        >
                            <button onClick={() => handleBlock(message.email)} className={`${session?.user?.email == "carlos.facundo.rr@gmail.com" ? 'visible' : 'invisible'} mr-2 ml-2`} ><MdOutlineBlock /></button>
                            <b className=" text-white/60">{message.nombre}</b><b className=" text-white font-normal rounded-lg  px-2 ">{message.message}</b>
                        </li>
                    ))}
                </ul>




                <div className={`${permiso ? 'visible' : 'invisible'} md:flex md:justify-between md:items-center mt-4`}>
                    <div>
                        <form action={async (formData) => {
                            await postData(formData, session?.user?.name, session?.user?.email);
                            formRef.current?.reset();
                        }}
                            ref={formRef} className="flex gap-x-2 xs:gap-x-4  shadow-sm rounded-lg w-full ">
                            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <svg
                                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>
                            </span>


                            <input
                                type="text"
                                name="message"
                                ref={inputChat}
                                placeholder="Escribe tu mensaje..."
                                // onChange={(e) => setMessage(e.target.value)}

                                className={` rounded-r-lg  w-[400px] border-gray-200 shadow-sm  text-sm  disabled:opacity-50 disabled:pointer-events-none p-3 text-black outline-none`} disabled={session?.user?.email }
                                onKeyUp={enterClick2}

                                autoFocus
                            />

                            <button
                                onClick={handlePopover}
                                data-ripple-light="true"
                                type="button"
                                data-popover-target="popover-animation"
                            >
                                <HiOutlineEmojiHappy className="w-6 h-6 xs:w-8 xs:h-8 select-none rounded-lg  text-center align-middle font-sans text-xs font-bold uppercase text-white  transition-all hover:scale-110 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-non" />
                            </button>

                            <button
                                data-ripple-light="true"
                                type="submit"
                                onClick={() => {
                                    setTimeout(() => {
                                        actualizarScroll()
                                    }, 100)
                                }}
                                // onClick={handledMessage}
                                data-popover-target="popover-animation"
                            >
                                <BsFillSendFill className="w-6 h-6 xs:w-8 xs:h-8 select-none rounded-lg  text-center align-middle font-sans text-xs font-bold uppercase text-white  transition-all hover:scale-110 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-non" />
                            </button>
                            <div
                                data-popover="popover-animation"
                                data-popover-mount="opacity-100 scale-100"
                                data-popover-unmount="opacity-0 scale-0 pointer-events-none"
                                data-popover-transition="transition-all duration-200 origin-bottom"
                                className={`${popover ? "hidden" : "visible"
                                    } absolute  p-4 font-sans text-sm font-normal break-words whitespace-normal bg-white/20 border rounded-lg shadow-lg w-max border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none top-[30%] left-[47%]  h-[200px] `}
                            >
                                <ul className="w-[300px] flex flex-wrap flex-row h-full  gap-y-2 my-0  max-w-[300px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                    {emojis?.map((emoji, index) => {
                                        return index <= 50 ? (
                                            <li
                                                key={index}
                                                className="inline-block  rounded-full p-2 mr-2 shrink"
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setMessage((state) => [...state, emoji?.character])
                                                    }
                                                >
                                                    {emoji?.character}
                                                </button>
                                            </li>
                                        ) : null;
                                    })}
                                </ul>
                            </div>
                        </form>
                    </div>


                    {/* 
                    <button
                        data-ripple-light="true"
                        type="button"
                        // onClick={handledMessage}
                        data-popover-target="popover-animation"
                    >
                        <BsFillSendFill className="w-8 h-8 select-none rounded-lg  text-center align-middle font-sans text-xs font-bold uppercase text-white  transition-all hover:scale-110 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-non" />
                    </button> */}
                </div>
            </div>

            {/* <Loguear setUserName={setUserName} /> */}
        </div>
    );
};

export default ChatAlt;