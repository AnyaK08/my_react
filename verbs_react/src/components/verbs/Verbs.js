import "./Verbs.css";
import engData from "../../data/en";
import roData from "../../data/ro";
import { EN, RO } from "../../App";

function Verbs(props) {
  console.log(EN);
  console.log(RO);
  let lngData;
  if (props.lng === EN) {
    console.log(engData);
    lngData = engData;
  } else if (props.lng === RO) {
    console.log(roData);
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
      component verbs <br />
      {props.lng}
      {
        //    (() => console.log("from jsx"))()
        (() => console.log(lngData))()
      }
    </div>
  );
}

export default Verbs;
