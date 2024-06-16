
import './App.css';
import {useRef, useState} from "react"

function App() {
  const nameField = useRef(null);

  const send = () => {
    // свойство current указывает на элемент input
    const inputElement = nameField.current;
    console.log("Имя: " + inputElement.value);
    inputElement.className = "newClass";
  };
  
  function show(event) {
    // console.log("Нажали " + event.target)
    // console.log( event.target.nodeName)
    console.log(nameField.current.value)
    nameField.current.value = nameField.current.value + "!!!!!!"
  }

  return (
    <div className="App">
      <input type="text" ref={nameField} />
      <button onClick={send}>Отправить</button>
      <button onClick={show}>Показать значение инпута</button>
    </div>
  );
}

export default App;
