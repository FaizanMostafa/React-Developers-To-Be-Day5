import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounterValue = () => {
    setCounter(counter + 1);
  };

  const decreaseCounterValue = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <button onClick={increaseCounterValue}>Increase</button>
      <h1>Counter: {counter}</h1>
      <button onClick={decreaseCounterValue}>Decrease</button>
    </div>
  );
}
