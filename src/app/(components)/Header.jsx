"use client"

import Image from "next/image";
import Link from "next/link";

import Socials from "./Socials";
import { usePathname } from "next/navigation";




import Logo from '../public/logo crs.svg'
 
const Header = () => {
  const pathname = usePathname();

  return (
    <div>
      <header className={`${pathname == '/semilla' || pathname == '/iglesia' || pathname == '/radio' || pathname == '/dashboard' || pathname == '/eventos' ? 'hidden' : 'block'} absolute z-50  w-full flex items-center px-16 xl:px-0 xl:ml-16 xl:h-[100px]`}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-y-8 py-8">
            <div >
              <Link href="/" >
                <Image
                  src={Logo}
                  width={80}
                  height={40}
                  alt=""
                  priority={true}
                  // lg:mx-0 lg:start-1 lg:translate-y-14 lg:items-start lg:-translate-x-[80px]
                  className={`mt-14 mr-19`}
                />
              </Link>
            </div>



            <Socials />


          </div>
        </div>
      </header>

    </div>
  );
};

export default Header;
