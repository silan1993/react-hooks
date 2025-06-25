import { useState, useEffect } from "react";

import "./App.css";
import { useRef } from "react";
import UseMemoApp from "./useMemo.jsx";

function UseRefApp() {
  let [page, setPage] = useState("useEffect");
  let [value, setValue] = useState(0);
  let count = useRef(0);
  let inputElement = useRef();
  // useEffect(() => {
  //   setCounter((prev) => prev + 1);
  // }, [value]);
  useEffect(() => {
    count.current = count.current + 1;
  }, [value]);

  function buttonClicked() {
    inputElement.current.value = "Input auto populated";
  }
  if (page === "useMemo") {
    return <UseMemoApp />;
  }

  return (
    <>
      <h1>use Ref</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <h1>Value {value}</h1>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h1>State Change Counter {count.current}</h1>
      <br />
      <br />
      <input type="text" ref={inputElement}></input>
      <button onClick={() => buttonClicked()}>Click Here</button>
      <br />
      <br />
      <button onClick={() => setPage("useMemo")}>UseMemo Example</button>
      <br />
      <br />
    </>
  );
}

export default UseRefApp;
