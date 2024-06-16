/*
*/


import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // let count = 0;
  const [count, setCount] = useState(0);
  
  function add() {
    // count = count + 1;
    setCount(count + 1);
    console.log(count);
  }

  function subtract() {
    // count = count - 1;
    setCount(count - 1);
    console.log(count);
  }

  return (
    <div className="App">
      <div id="counter">{count} </div>
      <button id="add" onClick={add}>
        +
      </button>
      <button id="subtract" onClick={subtract}>
        -
      </button>
    </div>
  );
}

export default App;
