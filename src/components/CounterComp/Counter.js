import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount((prev) => prev + 1);
  };

  const handleDec = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="app">
      <h1 data-testid="count">{count}</h1>
      <div className="button-container">
        <button className="inc" onClick={handleInc}>
          Increment
        </button>
        <button className="inc" onClick={handleDec}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
