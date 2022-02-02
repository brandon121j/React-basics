import Nav from './components/Nav';
import Counter from './components/Counter';
import Stars from './components/Stars';
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Counter setCounter={setCounter} counter={counter}/>
      <Stars setCounter={setCounter} counter={counter}/>
    </div>
  );
}

export default App;
