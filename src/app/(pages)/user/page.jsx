"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const User = () => {

  const { data: session } = useSession()

  return (
    <div className='w-full h-full bg-slate-900'><h2 className='text-center flex justify-center relative top-[50%]'>Usuario: {session?.user?.email}</h2></div>
  )
}

export default User