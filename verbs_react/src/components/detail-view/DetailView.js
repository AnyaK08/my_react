import "./DetailView.css";

export default function DetailView(props) {
  const pronouns = props.pronouns;
  const verb = props.verb;

  if (typeof verb === "undefined" || typeof pronouns === "undefined") {
    return <div></div>;
  } else {
    return (
      <div id="detail_view">
        {(() => console.log(verb))()}
        <table className="table table-striped mt-5">
          <tr>
            <td id="i"> {pronouns[0]}</td>
            <td id="i_mean">{verb.forms[0]}</td>
            <td id="we">{pronouns[3]}</td>
            <td id="we_mean">{verb.forms[3]}</td>
          </tr>
          <tr>
            <td id="you">{pronouns[1]}</td>
            <td id="you_mean">{verb.forms[1]}</td>
            <td id="wy">{pronouns[4]}</td>
            <td id="wy_mean">{verb.forms[4]}</td>
          </tr>
          <tr>
            <td id="he">{pronouns[2]}</td>
            <td id="he_mean">{verb.forms[2]}</td>
            <td id="they">{pronouns[5]}</td>
            <td id="they_mean">{verb.forms[5]}</td>
          </tr>
        </table>
      </div>
    );
  }
}
