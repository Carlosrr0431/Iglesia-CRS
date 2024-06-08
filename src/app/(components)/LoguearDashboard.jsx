"use client"

import { signIn, useSession, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { useAppContext } from '../(context)/AppWrapper';
import { usePathname } from 'next/navigation';

function SigInOut() {

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
    <nav className=" justify-between  flex items-center w-full py-3  px-24 text-white ">

      <div className={`${pathname == '/dashboard' ? 'items-end w-1/2 ml-[90%]' : 'block -mr-14'}`}>
        {session?.user ? (

          <div className='flex justify-center cursor-pointer' onClick={async () => {
            await signOut({
              callbackUrl: "/",
            })
          }}>
         
            <button

              type='button'
              className="border-[2px] border-solid border-white bg-white text-black/80 px-2 py-1   items-center text-center text-lg  mx-1 rounded-r-[2px]  "
            >
              Salir

            </button>

          </div>

        ) : (


          <div className='flex justify-center cursor-pointer' onClick={() => {
            signIn('google')
          }}>

            <button

              type='button'
              className="border-[2px] border-solid border-white bg-white text-black/80 px-2 py-1   items-center text-center text-lg  mx-1 rounded-s-[2px]  "
            >
              Unirse

            </button>
            <span className="inline-flex rounded-r-[2px] items-center px-1 text-sm text-gray-900 bg-white border rounded-e-0 border-gray-300  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" >
              <CiLogin color='rgb(0 0 0 / 0.8)' className='text-center items-center my-auto w-[25px] h-[25px]' ></CiLogin>
            </span >
          </div>

        )}
      </div>
    </nav>
  )
}

export default SigInOut