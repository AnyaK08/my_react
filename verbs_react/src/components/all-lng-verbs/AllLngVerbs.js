import "./AllLngVerbs.css";

export default function AllLngVerbs(props) {
  const verbs = props.verbs;
  if (typeof verbs !== "undefined" && verbs.length) {
    return (
      <div id="all_verbs">
        {(() => console.log(verbs))()}
 {/*@TODO link to separate verb */}
        <ul className="all_verbs-list">
          {verbs.map((item, index) => (
            <li key={index}>{item.verb}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div id="all_verbs">verbs is empty</div>;
  }
}
