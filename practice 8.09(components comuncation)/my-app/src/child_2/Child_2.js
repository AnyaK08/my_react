import "./Child2.css";
import { useRef, useEffect } from "react";

export default function Child_2(props) {
  let child_2Txt = useRef(null);
    const sendTxtToParent = props.fnc;
    const parentTxt = props.txt2;

  function sentToParent() {
    // child_2Txt.current.value = " new text from Child2"
    sendTxtToParent(child_2Txt.current.value);
  }
  function useEf() {
    // console.log("useEffect");
    child_2Txt.current.value = " start text";
  }
  function change() {
    // console.log(child_2Txt.current.value);
    sendTxtToParent(child_2Txt.current.value);
  }

    useEffect(useEf, []);
    useEffect(() => {
      child_2Txt.current.value = parentTxt ;
    }, [parentTxt]);
   
  return (
    <div className="Child_2 mt-5">
      <h2>Child_2</h2>
      <input
        type="text"
        className="form-control mb-4"
        ref={child_2Txt}
    
      ></input>
      <button className="btn btn-primary mb-4" onClick={sentToParent}>
        Send to Parent
      </button>
    </div>
    );
    
}
// @TODO prevent loop - send txt from parent only after button click 