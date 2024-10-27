import './Child.css';
import { useRef, useEffect } from "react";

export default function Child(props) {
    const txt = props.txt;
    const setTxtFromChild = props.fnc;
    const childTxt = useRef(null);
    function sentToParent() {
        setTxtFromChild(childTxt.current.value);
    }
    useEffect(() => {
        childTxt.current.value = "start value"
    }, []);
     useEffect(() => {
       childTxt.current.value = txt;
     }, [txt]);
    
    return (
      <div className="Child text-center container ">
        <h2 className="mb-4">Child</h2>
        <input
          type="text"
          className="form-control mb-4"
      
          ref={childTxt}
        ></input>
            <button id="btn_parent"
                onClick= {sentToParent}
                className="btn btn-primary mb-4">
          Send to Parent
        </button>
      </div>
    );
}