"use client"
import { donate } from "../action";
import axios from "axios";
import { useRouter } from "next/navigation";

import Cancel from '../public/cancel.svg'
import Image from "next/image";

const Modal = ({ setShowModal, nameCard, card }) => {

    
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setShowModal(false)

        await createPreferenc(e.target[1].value, e.target[2].value, e.target[0].value )
    }

    const createPreferenc = async (monto, descripcion, nombre) => {
        try {

            const response = await axios.post(
                "/api/create_preference",

                {
                    title: nameCard,
                    quantity: 1,
                    price: monto,
                    description: descripcion,
                    name: nombre

                },

            );

            const { result } = response.data
            // router.replace(result.sandbox_init_point)
            router.replace(result.init_point)

        } catch (error) {
            console.log("El error es: " + error);
        }
    };


    return (

        <div className={`fixed inset-0  z-50  bg-opacity-100 backdrop-blur-sm
            flex items-center justify-center h-full w-full  
            `}>
            <div className={`rounded-[10px] ${card.bgFondo} shadow-2xl  shadow-black/20 p-8 m-4 md:max-w-2xl md:mx-auto`}>
                <div className="flex justify-center">
                    <h1 className="w-full text-center items-center text-grey-darkest ">{nameCard}</h1>

                    <div className="" onClick={() => setShowModal(false)}>
                        <Image src={Cancel} height={40} width={40} alt="" className="" />
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="mb-4 py-4 md:flex  md:flex-wrap md:justify-between" >
                    <div className="flex flex-col mb-4 md:w-1/2">
                        {/* <label class="mb-2 uppercase tracking-wide text-lg text-grey-darkest" for="first_name">Nombre y Apellido</label> */}
                        <input required className="border py-2 px-3 text-grey-darkest md:mr-2 focus:outline-none focus:bg-white/90 text-black text-lg focus:text-black rounded-[5px]" type="text" name="name" id="name" placeholder="Nombre y Apellido" />
                    </div>
                    <div className="flex flex-col mb-4 md:w-1/2">
                        {/* <label class="mb-2 uppercase  text-lg text-grey-darkest md:ml-2" for="last_name">Número de celular</label> */}
                        <input required className="border text-lg py-2 px-3 text-grey-darkest md:ml-2 focus:outline-none focus:bg-white/90 text-black focus:text-black rounded-[5px]" type="number" name="monto" id="monto" placeholder="$ Monto" />
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <textarea
                            placeholder="Dejanos un mensaje..."
                            rows="4" id="mensaje"
                            name="mensaje"
                            required
                            className="px-3 py-2 bg-white text-lg border-gray-900 focus:outline-none focus:bg-white/90 text-black focus:text-black rounded-[5px]"
                        ></textarea>
                    </div>



                    <button className="block bg-teal hover:bg-teal-dark border-[2px]  border-solid border-white text-white uppercase text-lg mx-auto p-2 rounded-[5px] hover:bg-white hover:text-black w-full" type="submit"  >Enviar </button>

                </form>


            </div>
        </div>


    );
};

export default Modal;


