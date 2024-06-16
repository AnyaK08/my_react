import { useState } from "react";
import './App.css';

function App() {
  // let numb = 10;
  const [numb, setNumb] = useState(0);

  function increase() {
    // numb = numb + 1;
    setNumb(numb + 1);
    console.log(numb);
  }
  function decrease() {
    // numb = numb - 1;
    setNumb(numb - 1);
    console.log(numb);
  }

 return (
    <div className="App">
     <div id="counter">
       {numb}
     </div>
      <button id="increase" onClick={increase}>+</button>
      <button id="decrease" onClick={decrease}>-</button>

    </div>
  );
}

export default App;
