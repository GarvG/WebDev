import React ,{useState}from 'react';

function First() {
    const [count ,setCount]=useState(0);
    const inc=()=>
    {
    setCount(count+1);
    }

    const dec=()=>
    {
    setCount(count-1);
    }

    return (
    <div>
    <button onClick={inc}>+</button>
    {count}
    <button onClick={dec}>-</button>
    </div>
  )

  
}

export default First