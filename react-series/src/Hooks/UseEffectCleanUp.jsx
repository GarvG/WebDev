import React, { useEffect, useState } from 'react'

const UseEffectCleanUp = () => {
  const [widthcount,setwidthcount]=useState(window.screen.width);
    const currentScreenWidth =()=>{
        setwidthcount(()=>window.innerWidth )
    }
  useEffect(()=>{
    window.addEventListener("resize",currentScreenWidth)
    return ()=>{
        window.removeEventListener("resize",currentScreenWidth);
    }
  })
    return (
    <div>
      <h1>The Size of the Window is {widthcount}</h1>
    </div>
  )
}

export default UseEffectCleanUp
