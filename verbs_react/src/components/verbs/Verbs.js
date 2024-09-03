import "./Verbs.css";
import engData from "../../data/en";
import roData from "../../data/ro";
import { EN, RO } from "../../App";
import AllLngVerbs from "../all-lng-verbs/AllLngVerbs";
import { useState } from "react";
import  DetailView  from "../detail-view/DetailView";

function Verbs(props) {
  let lngData = [];
  const [searchVerb, setSearchVerb] = useState("");
  

  if (props.lng === EN) {
    // console.log(engData);
    lngData = engData;
  } else if (props.lng === RO) {
    // console.log(roData);
    lngData = roData;
  } else {
    console.warn("unknown language");
  }

  // const a = () => console.log("from component");
  // a()
  // a = 10;
  // a()

  return (
    <div id="verbs" className="mt-3">
      <AllLngVerbs verbs={lngData?.verbs} selectVerb={setSearchVerb} />
      <br />
      {/* {lngData?.verbs?.find((v) => v.verb === searchVerb)?.verb} */}
      <h2>{searchVerb}</h2>
      {/* @TODO create new component for verb detail  */}
      <DetailView
        pronouns={lngData?.pronouns}
        verb={lngData?.verbs?.find((v) => v.verb === searchVerb)}
      />
      {/* {
        //    (() => console.log("from jsx"))()
        // (() =>
          console.log()))()
      } */}
    </div>
  );
}

export default Verbs;
