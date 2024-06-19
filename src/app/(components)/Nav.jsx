"use client"
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";



import Home from "../public/inicio.svg";
import Semilla from "../public/ofrendas.svg";
import Radio from "../public/radio.svg";
import Iglesia from "../public/la iglesia.svg";
import Eventos from "../public/eventos.svg";
import Tienda from "../public/tienda.svg";
import Ubicacion from "../public/ubicacion.svg";

import Image from "next/image";

// nav data
export const navData = [
  { name: "Inicio", path: "/", icon: Home },
  { name: "Mi Semilla", path: "/semilla", icon: Semilla },
  { name: "Radio", path: "/radio", icon: Radio },
  { name: "La Iglesia", path: "/iglesia", icon: Iglesia },
  {
    name: "Eventos",
    path: "/eventos",
    icon: Eventos,
  },

  {
    name: "Ubicacion",
    path: "/ubicacion",
    icon: Ubicacion,
  },
];

const Nav = () => {
  const pathname = usePathname();


  return (
    <nav className={`${pathname == '/dashboard' || pathname == '/login' ? 'hidden' : 'flex'} montserrat  flex-col  items-center xl:justify-center gap-y-4  fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 w-full top-0 xl:w-12 xl:max-w-md xl:h-screen`}>
      <div
        
        className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-5 px-4 md:px-40 xl:px-0 h-[60px]  backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full xl:h-max py-4 bg-slate-800 opacity-80"
      >
        {navData.map((link, index) => {

          console.log(link.path, pathname);
          return (
            <Link
              className={`${link.path === pathname && "text-accent"
                } relative items-center flex group hover:text-accent transition-all duration-300`}
              key={index}
              href={link.path}
            >
              <div className="absolute  pr-10 right-0 hidden xl:group-hover:flex">
                <div className=" relative flex bg-black/30  p-2 text-white items-center  rounded-[15px] ">
                  <div className="text-[13px] text-end  font-regular w-auto text-nowrap leading-none   uppercase">
                    {link.name}
                  </div>
                  {/* <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[10px]border-r-0 absolute -right-2">
                    {" "}
                  </div> */}
                </div>
              </div>

              <div className={`flex  flex-col justify-center items-center gap-y-1  ${link.name == 'Eventos' || link.name == 'Ubicacion' ? 'mt-[2px]' : 'mt-[5px]'} `} >
                <Image src={link.icon} width={0} height={0} alt=""  className={`${link.name == 'Mi Semilla' ? 'xl:mb-0' : 'xl:mb-2'} max-w-[25px]  max-h-[25px] transition-all hover:scale-110  focus:opacity-[0.85] focus:shadow-none  active:opacity-[0.85] ${link.name == 'Eventos' || link.name == 'Ubicacion' ? 'max-w-[22px] max-h-[22px]  ' : ''} `} />
                <p className="text-[11px] text-center  font-bold xl:hidden block">{link.name}</p>
              </div>


            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
