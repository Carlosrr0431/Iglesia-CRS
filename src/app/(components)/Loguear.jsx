"use client"

import { signIn, useSession, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { useAppContext } from '../(context)/AppWrapper';
import Socials from './Socials';
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { usePathname } from 'next/navigation';

function SigIn() {

  const { data: session } = useSession()
  const { setUserName, setDisabled } = useAppContext();
  const pathname = usePathname();

  useEffect(() => {
    setUserName(session?.user?.name)

    if (session?.user?.name != undefined) {
      setDisabled(false)

      setTimeout(async () => {
        await signOut({
          callbackUrl: "/",
        })
      }, 600000);

    } else
      setDisabled(true)
  }, [session])


  return (
    <nav className="items-center w-full py-3  px-24 text-white ">




      <div className='flex items-center relative left-[78%] gap-x-4'>
        <div className=''><Socials /></div>

        {session?.user ? (

          <div className='flex justify-center cursor-pointer' onClick={async () => {
            await signOut({
              callbackUrl: "/radio",
            })
          }}>
            <span className="inline-flex  items-center px-1 text-sm text-gray-900 bg-white border rounded-e-0 border-gray-300  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" >
              <CiLogout color='rgb(0 0 0 / 0.8)' className='text-center items-center my-auto w-[25px] h-[25px]' ></CiLogout>
            </span >
            <button

              type='button'
              className="border-[2px] border-solid border-white bg-white text-black/80   items-center text-center text-[13px]  mx-1  font-semibold p-0.5"
            >
              <h2>SALIR</h2>

            </button>

          </div>

        ) : (


          <div className='flex justify-center cursor-pointer' onClick={() => {
            signIn('google')
          }}>

            <button

              type='button'
              className="border-[2px] border-solid border-white bg-white text-black/80   items-center text-center text-[13px]  mx-1  font-semibold p-0.5"
            >
              <h2>UNIRSE</h2>

            </button>
            <span className="cursor-pointer inline-flex  items-center px-1 text-sm text-gray-900 bg-white border rounded-e-0 border-gray-300  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" >
              <CiLogin color='rgb(0 0 0 / 0.8)' className='text-center items-center my-auto w-[17px] h-[17px]' ></CiLogin>
            </span >
          </div>

        )}
      </div>
    </nav>
  )
}

export default SigIn

