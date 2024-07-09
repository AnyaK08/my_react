import "./App.css";
import Verbs from "./components/verbs/Verbs";
import { useState } from "react";

export const EN = "english";
export const RO = "romanian";

function App() {
  // function chooseEn() {
  //   console.log("en");
  // }
  // function chooseRo() {
  //   console.log("ro");
  // }
  // let lngForVerbs = "en";
  const [lngForVerbs, setLngForVerbs] = useState("ru");

  function chooseLng(lng) {
    // console.log(lng);
    // lngForVerbs = lng;
    setLngForVerbs(lng);
    // console.log(lngForVerbs);
  }

  return (
    <div className="App container text-center">
      <h1>Choose the language</h1>
      <button
        id={EN}
        // onClick={chooseEn}
        // onClick={chooseLng("en")}
        // onClick={
        //   function a() {
        //     chooseLng("en");
        //   }
        // }
        onClick={() => chooseLng(EN)}
        type="button"
        className="btn btn-success btn-lg js-lng"
      >
        English
      </button>
      <button
        id={RO}
        onClick={() => chooseLng(RO)}
        type="button"
        className="btn btn-success btn-lg js-lng"
      >
        Romanian
      </button>

      <Verbs lng={lngForVerbs} />
    </div>
  );
}

export default App;
