import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter] = useState(5)
  return (
    <div className="App">
     <h1 className={counter%2===0 ? "red" : "green"}>counter:{counter}</h1>
     <button onClick={()=>setCounter(counter+1)}>add</button>
     <button onClick={()=>setCounter(counter-1)}>sub</button>
     <button onClick={()=>setCounter(counter*2)}>double</button>
     </div>
  );
  
}


export default App;
