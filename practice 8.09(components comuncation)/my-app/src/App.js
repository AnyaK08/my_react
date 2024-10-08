import logo from "./logo.svg";
import "./App.css";
import Child from "./child/Child";
import { useState, useRef } from "react";

function App() {
  const [parentTxt, setParentTxt] = useState("parent start value");
  const inputTxt = useRef(null);

  function newTxt() {
    console.log(inputTxt.current.value);
    setParentTxt(inputTxt.current.value);
  }

  function setTxtFromChild(newTxt) {
    inputTxt.current.value = newTxt;
  }

  return (
    <div className="App text-center container p-4 ">
      <h2 className="mb-4">Parent</h2>
      {/* <input type="text" className="form-control mb-4" ref={inputTxt} onChange={newTxt}></input> */}
      <input type="text" className="form-control mb-4" ref={inputTxt}></input>
      <button id="btn_parent" className="btn btn-primary mb-4" onClick={newTxt}>
        Send to Child
      </button>
{/* @TODO  send object as props */}
      <Child txt={parentTxt} fnc={setTxtFromChild}></Child>
    </div>
  );
}

export default App;
