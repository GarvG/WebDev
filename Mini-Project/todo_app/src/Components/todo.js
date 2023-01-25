import React ,{useState}from 'react'

function Todo() {
  const [word,setword]=useState("");

  const [saveword,setsaveword]=useState([]);
  const change=(e)=>{
    console.log(e.target.value);
    setword(e.target.value);
  }

  const Clicked=()=>{
    setsaveword((olditem)=>{
      return [...olditem,word]
    })
  }
  return (
    <>

<div className="main-div">

<div className="center-div">
  <h1> TO DO LIST</h1>
  <br/>
  <input type="text" placeholder="Add a item" onChange={change}/>
  <button onClick={Clicked}> + </button>
  <ol>
    {/* <li>
      {word}
    </li> */}
    {saveword.map((currE)=>{
      return (
        <li>{currE}</li>
      )
    })}
  </ol>
  
</div>
</div>
    </>
  )
}

export default Todo