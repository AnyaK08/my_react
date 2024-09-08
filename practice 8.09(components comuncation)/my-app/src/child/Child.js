import './Child.css';

export default function Child(props) {
    const txt = props.txt;


    return (
      <div className="Child text-center container ">
        <h2 className="mb-4">Child</h2>
        <input type="text" className="form-control mb-4" value={txt}></input>
        <button id="btn_parent" className="btn btn-primary mb-4">
          Send to Parent
        </button>
      </div>
    );
}