import React,{useState} from 'react'

function Colorchange() {
    const purple="#8e44ad"
    const color="yellow";
    //let count=0;
    const [bg, setbg] = useState(purple);
    const [title,settitle]=useState("Click ME!")
    const [count,setcount]=useState(1)
   
    const bgChange=()=>{
      setcount(count+1)
      console.log(count);  
     
      if(count%2!==0)
        {
          setbg(color)
          settitle("WHY I AM GETTING CLICKED")
          console.log("yellow")
         
        }
        else
        {
          setbg(purple);
          settitle("I AM BACK")
          console.log("purpel")
        }
       
    }
       
  return (
    <div style={{ backgroundColor:bg}}>
    <button onClick={bgChange}>{title}
    </button>
    </div>
  )
}

export default Colorchange