import { useState, useEffect, useMemo } from "react";

import "./App.css";
import { useRef } from "react";

function UseCallBackApp() {
  let [counter, setCounter] = useState(0);
  return (
    <>
      <h1>use CallBack</h1>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Click Here</button>
    </>
  );
}

export default UseCallBackApp;
