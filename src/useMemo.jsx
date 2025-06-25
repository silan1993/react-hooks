import { useState, useEffect, useMemo } from "react";
import UseCallBackApp from "./usecallBack.jsx";

import "./App.css";

function UseMemoApp() {
  let [page, setPage] = useState("useEffect");

  let [number, setNumer] = useState(0);
  let [counter, setCounter] = useState(0);
  function getCube(num) {
    return Math.pow(num, 3); // on click of counter button this function is also getting called. To overcome from it use usememo
  }
  // let result = getCube(number);
  const result = useMemo(() => getCube(number), [number]); // here only when number value changes then getCube will be called. This will improve the performance

  if (page === "useCallBack") {
    return <UseCallBackApp />;
  }
  return (
    <>
      <h1>use Memo</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumer(e.target.value)}
      />
      <h1>Qube of the numbe is : {result}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Counter++</button>
      <h1>Count is {counter}</h1>
      <br />
      <br />
      <button onClick={() => setPage("useCallBack")}>
        useCallBack Example
      </button>
      <br />
      <br />
    </>
  );
}

export default UseMemoApp;
