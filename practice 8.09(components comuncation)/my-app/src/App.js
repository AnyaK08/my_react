import logo from "./logo.svg";
import "./App.css";
import Child from "./child/Child_1";
import { useState, useRef } from "react";
import Child_2 from "./child_2/Child_2";

function App() {
  const [parentTxt, setParentTxt] = useState("parent start value");
  const [parentTxtToChild1, setParentTxtToChild1] = useState("parent start value");
  const inputTxt = useRef(null);

  function newTxt() {
    console.log(inputTxt.current.value);
    setParentTxtToChild1(inputTxt.current.value);
  }

  function setTxtFromChild(newTxt) {
    inputTxt.current.value = newTxt;
  }
  
  function changeParentInput() {
    setParentTxt(inputTxt.current.value);
  }

  return (
    <div className="App text-center container p-4 ">
      <h2 className="mb-4">Parent</h2>
      {/* <input type="text" className="form-control mb-4" ref={inputTxt} onChange={newTxt}></input> */}
      <input
        type="text"
        className="form-control mb-4"
        ref={inputTxt}
        onChange={changeParentInput}
      ></input>
      <button id="btn_parent" className="btn btn-primary mb-4" onClick={newTxt}>
        Send to Child
      </button>
      {/* @TODO  send object as props */}
      <Child txt={parentTxtToChild1} fnc={setTxtFromChild}></Child>

      <Child_2 txt2={parentTxt} fnc={setTxtFromChild}></Child_2>
    </div>
  );
}

export default App;
