import "./AllLngVerbs.css";

export default function AllLngVerbs(props) {
  const verbs = props.verbs;
  const selectVerb = props.selectVerb;
  if (typeof verbs !== "undefined" && verbs.length) {
    return (
      <div id="all_verbs">
        {(() => console.log(verbs))()}
        {/*@TODO link to separate verb */}
        <div className="all_verbs-list">
          {verbs.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => selectVerb(item.verb)}
              className="btn btn-primary m-2"
            >
              {item.verb}
            </button>
          ))}
        </div>
      </div>
    );
  } else {
    return <div id="all_verbs">verbs is empty</div>;
  }
}
