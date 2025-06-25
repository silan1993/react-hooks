import { useState } from "react";

import "./App.css";

function UseStateApp() {
  let [count, setCounter] = useState(0);
  function increaseCount() {
    setCounter((count) => count + 2);
  }
  return (
    <>
      <h1>Current Counter is {count}</h1>
      <button onClick={increaseCount}>Increase count</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>
        Decrease count
      </button>
    </>
  );
}

export default UseStateApp;
