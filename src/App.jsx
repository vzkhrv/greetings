import { useState } from "react";
import "./app.css";

export const DEFAULT_HEADER = "Greetings!";

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
      <h1 data-testid="header" >{headerValue}</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        data-testid="user-input"
      />
      <button
        onClick={handleSubmit}
        data-testid="submit-btn"
      >
        Отправить
      </button>
      <button
        onClick={handleReset}
        data-testid="reset-btn"
      >
        Сбросить
      </button>
    </div>
  );
}

export default App;
