import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("Barbie");
  const [name2, setName2] = useState("Ken");

  useEffect(function () {
    document.title = `Hi ${name}`;
  }, [name]);

  useEffect(() => (document.title = `Hi ${name2}`), []);

  function changeName(event) {
    setName(event.target.value);
  }
  
   function changeName2(event) {
     setName2(event.target.value);
    //  name2 не успевает измениться
    // document.title = `Hi ${name2}`;
  }

  return (
    <div className="App">
      <h1>useEffect</h1>
      <div>
        <h3>Name: {name}</h3>

        <div>
          <p>
            name: <input type="text" value={name} onChange={changeName} />
          </p>
          <h3>name: {name2}</h3>
          <p>
            Name2: <input type="text" value={name2} onChange={changeName2} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
