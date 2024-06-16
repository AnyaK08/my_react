import { useState} from "react"
import "./App.css";

function App() {
  // let count = 10;
  const [count, setCount] = useState(0);
  // increment = function () {
  //   count = count++;
  //   setCount(count);
  // };

  return (
    <div className="App">
      <h3>Count = {count}</h3>
      <button onClick={()=>setCount(count+1)}>Увеличить</button>
    </div>
  );
}

export default App;
