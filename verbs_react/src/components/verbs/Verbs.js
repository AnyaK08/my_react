import './Verbs.css';

function Verbs(props) {
    return (
        <div id="verbs" className="mt-3">
            component verbs <br/>
            {props.lng}
        </div>
    );
}

export default Verbs;