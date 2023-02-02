import './App.css';
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Page/Home';
import About from './Page/About';
import Profile from './Page/Profile';
import Error from './Page/Error';
// import {StyledButton} from './Components/Button/Button.styles';
// import { FancyButton } from './Components/Button/Button.styles';
//import Example from './Components/Example';
// import Class from './Components/Class';
//import First from './Components/First';
// import A from './Components/A';
// import EffectSecond from './Components/EffectSecond';


function App () {
  
    return (
      <BrowserRouter>
      <div className='App'>
        <h1>WELCOME TO ROUTING!!</h1>
   <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/about' element={ <About/>}/>
      <Route path='/profile' element={ <Profile/>}/>
      <Route path="*" element={<Error/>}/>
   </Routes>
      </div>
      </BrowserRouter>
    )
  
}

export default App


