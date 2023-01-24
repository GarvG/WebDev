import React,{useState} from "react"

const Forms=()=>{
    const [word,setword]=useState("")
    const [swork,setwork]=useState("")
    
   function change(e){
        console.log(e.target.value)
         setword(e.target.value) 

    }
    return (
        <div>
        <p>Hello,{swork}</p>
    <input placeholder="Write your name!" onChange={change}/>
        <button onClick={()=>{
    
            setwork(word)
        
        }}>Submit</button>

        
        </div>
    )

}
export default Forms