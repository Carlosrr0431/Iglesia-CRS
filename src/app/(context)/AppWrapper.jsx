"use client"
import React, { createContext, useContext, useRef, useState } from 'react'



const AppContext = createContext({
  inputEl: null,
})

export const AppWrapper = ({ children }) => {

  const inputEl = useRef(null);
  const bodyScroll = useRef(null);
  const swiperRef = useRef()
  const [state, setState] = useState({
    inputEl: inputEl
  })

  const [stateScroll, setStateScroll] = useState({
    bodyScroll: bodyScroll
  })
  const [userName, setUserName] = useState("")
  const [swiper, setSwiper] = useState("Radio")
  const [disabled, setDisabled] = useState(false)
  const [ isOpenCapitulo, setIsOpenCapitulo ] = useState(false)
  const [ isOpenVersiculo, setIsOpenVersiculo ] = useState(false)
  const [ isOpenLibro, setIsOpenLibro ] = useState(false)
  const [ isOpenBiblia, setIsOpenBiblia ] = useState(false);


  const obj = {
    inputEl: state,
    userName: userName,
    setUserName: setUserName,
    stateScroll,
    setStateScroll,
    disabled,
    setDisabled,
    isOpenCapitulo,
    setIsOpenCapitulo,
    isOpenVersiculo,
    setIsOpenVersiculo,
    isOpenBiblia,
    setIsOpenBiblia,
    isOpenLibro,
    setIsOpenLibro,
    swiperRef,
    swiper,
    setSwiper
  }
  return (
    <AppContext.Provider value={obj}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}