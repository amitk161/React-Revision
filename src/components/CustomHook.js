import React from "react";
import useCounter from "./useCounter";
import "./CustomHook.css";

function CustomHook() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="main-div">
      <div className="btn-container">
        <button onClick={increment} className="btn">+</button>
        <h1>{count}</h1>
        <button onClick={decrement} className="btn">-</button>
      </div>
    </div>
  );
}

export default CustomHook;
