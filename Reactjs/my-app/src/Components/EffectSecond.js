import React, { useEffect, useState } from 'react'

function EffectSecond() {
const[content,setContent]=useState('we will see!')
useEffect(()=>{
console.log('component did Mount')
},[])
useEffect(()=>{
    console.log('component did update')
    
})
  return (
    <div>

      <button onClick={()=>setContent('A post Button')}>Post</button>
      <button onClick={()=>setContent('A User Button')}>Users</button>
      <button onClick={()=>setContent('A Comment Button')}>Comments</button>
         {/* <h1>{posts}</h1>
        <h1>{Users}</h1>  */}
        <h1>{content}</h1>
    </div>
  )
}

export default EffectSecond