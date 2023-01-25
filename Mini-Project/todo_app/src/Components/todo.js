import React ,{useState}from 'react'

function Todo() {
  const [word,setword]=useState("");                               // this use State is used for getting the word 
  const [saveword,setsaveword]=useState([]);                       // this use State is used for getting all the words in the array
  

  const change=(e)=>{                                              
    console.log(e.target.value);                                  // using the first useState when there is a change in the inputfield   
    setword(e.target.value);                                      // we are getting the change using e.target.value and setting it in setword
  }


  const Clicked=()=>{                                             // using the second use State when we clicked the button for adding  more 
    setsaveword((olditem)=>{                                      // task we are using the setsaveword which has an empty array as of now    
      return [...olditem,word]                                    // so we return that array to saveword and in the array using the spread operator
    })                                                            // we put all the old items and the new items which is store in word variable 
                                                                
  }

  return (
    <>

<div className="main-div">

<div className="center-div">
  <h1> TO DO LIST</h1>
  <br/>
  <input type="text" placeholder="Add a item" onChange={change}/>             {/* here in the input field we are using the change function  */}
                                                                                                    
  <button onClick={Clicked}> + </button>                                          {/* here on the button we are using the clicked section */}
  <ol>
    {saveword.map((currE)=>{                                            {/* using the map word we are iterating over the saveword array to display it in li  */}      
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