import './App.css';

//import Example from './Components/Example';
import Class from './Components/Class';
function App() {
  return (
    <div className="App">
      
      <Class name="A" hobby="GYM">
        <p>Welcome to DevTown!!</p>
      </Class>
      <Class name="B" hobby="Football">
        <button> Press Here </button>
      </Class>
      <Class name="C" hobby="BasketBall">
        <h3>Congo!!!!</h3>
      </Class>
    
    </div>
  );
}

export default App;
