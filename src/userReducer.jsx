import { useReducer, useState } from "react";

import "./App.css";

function UseReducerApp() {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    // return { count: state.count + 1 };
    switch (action.type) {
      case "increase":
        return { count: state.count + 1 };
      case "decrease":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Current Counter is in reducer {state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>
        Increase count
      </button>
      <button onClick={() => dispatch({ type: "decrease" })}>
        Decrease count
      </button>
    </>
  );
}

export default UseReducerApp;
