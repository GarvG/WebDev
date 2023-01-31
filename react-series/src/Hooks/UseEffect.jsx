import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setcount]=useState(0);
    useEffect(()=>{
        document.title=count;
    },[count])
  return (
    <div>
      <button onClick={()=>{
        setcount(count+1)
      }}>+</button><h1>{count}</h1><button onClick={()=>{ 
        count<1?setcount(0):setcount(count-1)
      }}>-</button>
    </div>
  )
}

export default UseEffect
