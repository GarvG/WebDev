import React from "react";
import "./App.css"
//import Greetings from "./Greetings";
// import Add from "./Components/Add";
// import Subtract from "./Components/Subtract";
// import Mutlipy from "./Components/Mutlipy";
// import Divide from "./Components/Divide";
//import Timer from "./Components/Timer";
// import Colorchange from "./Components/Colorchange"
// import Forms from "./Components/Forms"
// import {BroswerRouter, Route, Routes} from "react-router-dom"
// import {BrowserRouter,Route,Routes} from "react-router-dom"
// import Home from "./Pages/home";
// import Contact from "./Pages/contact";
// import About from "./Pages/about";
// import Error from "./Pages/Error";
// import UseEffect from "./Hooks/UseEffect";
// import UseEffectCleanUp from "./Hooks/UseEffectCleanUp";
import CompA from "./Hooks/UseContext/CompA";
function App() {
  
  return (
    <div >
   {/* <Greetings/> */}
   {/* <ul>
    <li>
    The Addition of two number is  {Add(10,30)}
    </li>
    <li>
    The Subtraction of two number is  {Subtract(40,10)}
    </li>
    <li>
    The Mutlipy of two number is  {Mutlipy(40,10)}
    </li>
    <li>
    The Division of two number is  {Divide(10,40)}
    </li>
   </ul> */}
 
   {/* <Timer/> */}
  {/* <Colorchange/> */}
 {/* <Forms/>
 <Forms></Forms> */}
      {/* <BrowserRouter>
        
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/>


          </Routes>
        
      </BrowserRouter> */}

{/* <UseEffect/>
<UseEffectCleanUp/> */}
<CompA/>
    </div>
  );
}

export default App;
