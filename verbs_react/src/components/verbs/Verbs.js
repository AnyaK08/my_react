import './Verbs.css';
import engData from '../../data/en';
import roData from '../../data/ro';

function Verbs(props) {
     if (props.lng === "en") {
       console.log(engData);
     } else if (props.lng === "ro") {
       console.log(roData);
     } else {
         console.warn("unknown language");
     }

    // const a = () => console.log("from component");
    // a()
    // a = 10;
    // a()
    return (
        <div id="verbs" className="mt-3">
            component verbs <br/>
            {props.lng}

            {
            //    (() => console.log("from jsx"))()
             
            }
            
        </div>
    );
}

export default Verbs;