import React, { useState } from 'react'

const Timer=()=>{
    const [timer,setTimer]=useState(new Date().toLocaleTimeString());
    function Ince(){
        setTimer(new Date().toLocaleTimeString());
    }
    return(
        <>
            <h1>{timer}</h1>
            <button onClick={Ince}>CLICK ME To Get Current Time </button>

        </>
    )
}
export default Timer