import { useState } from "react";
import "./app.css";

export const DEFAULT_HEADER = "Greetings!";

function App() {
  const [headerValue, setHeaderValue] = useState(DEFAULT_HEADER);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setHeaderValue(inputValue);
    handleClearInput();
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  const handleReset = () => {
    setHeaderValue(DEFAULT_HEADER);
    handleClearInput();
  };

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
