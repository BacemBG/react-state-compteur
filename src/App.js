import React,{useState} from 'react';
import './App.css';


function App() {
   const [count, setcount] = useState(0);
  return (
    <div style={{margin:"20px 200px" , color:"red"}}>
      
     <button onClick={() => setcount(count + 1 )}>+</button>
     <h1>{count}</h1>
     <button onClick={() => setcount(count - 1 )}>-</button>
     <button onClick={() =>setcount(0)}>reset</button>
    </div>
  );
}

export default App;
