import './App.css';
import React, { Component } from 'react'
import Forms from './Components/Forms';
import {BrowserRouter} from 
// import {StyledButton} from './Components/Button/Button.styles';
// import { FancyButton } from './Components/Button/Button.styles';
//import Example from './Components/Example';
// import Class from './Components/Class';
//import First from './Components/First';
// import A from './Components/A';
// import EffectSecond from './Components/EffectSecond';


export class App extends Component {
  render() {
    return (
      <div>
      <Browser>
      <Forms/>
      <h1> REACT ROUTER </h1>
      <p> Without refresing the page we navigate</p> 
      </div>
    )
  }
}

export default App


