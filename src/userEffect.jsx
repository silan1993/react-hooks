import { useState, useEffect, useContext } from "react";
import UseRefApp from "./useRef.jsx";

import "./App.css";
import { AppContext } from "./context/AppContext.jsx";

function UseEffectApp() {
  let [page, setPage] = useState("useEffect");
  let [currentDate, setDate] = useState(new Date() + "");
  let [count, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCounter((count) => count + 1);
    }, 2000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setDate(new Date() + "");
    }, 1000);
  }); // there is no dependency in useEffect. So contineoulty it will contineously display date on page.On every state change it will execute the callback function
  const { name } = useContext(AppContext);

  if (page === "useRef") {
    return <UseRefApp />;
  }
  // useEffect(()=>{
  //   setTimeout(() => {
  //     setDate(new Date() + '')
  //   }, 1000);
  // },[currentDate]) // this will ensure which ever variable added inside the dependencies on change state of those value it will execute the  callback again
  return (
    <>
      <h1>use Effect</h1>
      <h1>My name is {name}</h1>
      <h1>{currentDate}</h1>
      <h1>Count is {count}</h1>
      <br />
      <br />
      <button onClick={() => setPage("useRef")}>UseRef Example</button>
    </>
  );
}

export default UseEffectApp;
