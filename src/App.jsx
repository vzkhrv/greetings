import { useState } from "react";
import "./app.css";

const DEFAULT_HEADER = "Greetings!";

function App() {
  const [inputValue, setinputValue] = useState('');
  const [headerValue, setheaderValue] = useState(DEFAULT_HEADER);

  const handleInputChange = (event) => {
    setinputValue(event.target.value);
  }

  const handleSubmit = () => {
    setheaderValue(inputValue);
    setinputValue('');
  }

  const handleReset = () => {
    setheaderValue(DEFAULT_HEADER);
    setinputValue('');
  }

  return (
    <div className="app">
      <h1>{headerValue}</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Отправить</button>
      <button onClick={handleReset}>Сбросить</button>
    </div>
  );
}

export default App;
