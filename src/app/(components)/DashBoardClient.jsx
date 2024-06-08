"use client"
import React, { useState } from 'react'

import { DashBoardInfo } from "../(components)/DashBoardInfo";

const DashBoardClient = ({children}) => {

    const [first, setfirst] = useState(0)

  return (
    <div>
      {children}
    </div>
  )
}

export default DashBoardClient
