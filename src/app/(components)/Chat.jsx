import { useEffect, useId, useRef, useState } from "react";


const socket = io("http://localhost:8008/");

import { BsFillSendFill } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { getEmojis } from "../api/getEmojis.js";
import { useAppContext } from '../(context)/AppWrapper';

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [popover, setPopover] = useState(true);
  const [emojis, setEmojis] = useState([]);
  const [name, setName] = useState("");
  const [nameModificado, setNameModificado] = useState("Anonimo");
  const inputChat = useRef();
  const divRef = useRef()
  const { userName } = useAppContext();

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




      setMessages((state) => [...state, newMessage]);
      setMessage("");
      setName("");

      socket.emit("message", newMessage)

      setTimeout(() => {
        actualizarScroll()
      }, 10);
    }


  };

  const actualizarScroll = () => {
    divRef.current.scrollTop = divRef.current.scrollHeight
  }

  const handledMessage = () => {
    const newMessage = {
      body: message,
      from: nameModificado,
    };
    setMessages((state) => [...state, newMessage]);
    setMessage("");

    socket.emit("message", newMessage);

  };

  useEffect(() => {
    obtener();

    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  const handlePopover = () => {
    setPopover((ant) => !ant);

  };

  const receiveMessage = (message) =>
    setMessages((state) => [message, ...state]);

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="montserrat h-[450px] border-[4px] rounded-[45px] border-white text-white flex items-center justify-center w-full flex-col mx-6"
    >
      <div className=" p-10 xl:w-[600px] rounded-2xl">
        {/* [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] */}
        <ul className="h-80  overflow-y-auto items-start" ref={divRef} >
          {messages.map((message, index) => (
            <li
              key={index}
              className={`p-1 table text-[17px] rounded-md font-extralight text-start ${message.from === "Me" ? "bg-sky-700 ml-auto" : ""
                }`}
            >
              <b className=" text-white/60">{message.from}</b><b className=" text-white font-normal rounded-lg  px-2 ">{message.body}</b>
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center mt-4">
          <div>
            <div className="flex  shadow-sm rounded-lg w-full ">
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
                name="nombre"
                type="text"
                placeholder="Nombre"
                onChange={handledInput}
                onKeyUp={enterClick}
                value={name}
                className="w-1/2 border-gray-200 shadow-sm  text-sm  disabled:opacity-50 disabled:pointer-events-none px-2 py-2 text-black outline-none "
              />

              <span
                className="flex items-center whitespace-nowrap    px-1  text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                id="basic-addon1"
              ></span>

              <input
                type="text"
                name="message"
                ref={inputChat}
                placeholder="Escribe tu mensaje..."
                onChange={(e) => setMessage(e.target.value)}
                className=" rounded-r-lg  w-full border-gray-200 shadow-sm  text-sm  disabled:opacity-50 disabled:pointer-events-none p-3 text-black outline-none 
                 "
                onKeyUp={enterClick2}
                value={message}
                autoFocus
              />
            </div>
          </div>

          <button
            onClick={handlePopover}
            data-ripple-light="true"
            type="button"
            data-popover-target="popover-animation"
          >
            <HiOutlineEmojiHappy className="w-8 h-8 select-none rounded-lg  text-center align-middle font-sans text-xs font-bold uppercase text-white  transition-all hover:scale-110 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-non" />
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

          <button
            data-ripple-light="true"
            type="button"
            onClick={handledMessage}
            data-popover-target="popover-animation"
          >
            <BsFillSendFill className="w-8 h-8 select-none rounded-lg  text-center align-middle font-sans text-xs font-bold uppercase text-white  transition-all hover:scale-110 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-non" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};