import "./AllVerbs.css";



export default function AllVerbs(props) {
    

    return (
      <div id="all_verbs">
        
        {(() => console.log(props.verbs))()}
      </div>
    );
}