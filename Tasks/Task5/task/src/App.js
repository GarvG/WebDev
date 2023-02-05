
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
<Header/>
<>
<Routes>
  <Route path='/' element={<Home/>}/>

  </Routes>
</>
    </BrowserRouter>
  );
}

export default App;
