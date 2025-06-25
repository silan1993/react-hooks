import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Contact = () => {
  console.log("header rendered");
  const { mobile } = useContext(AppContext);
  return (
    <div>
      <h2>Contact : {mobile}</h2>
    </div>
  );
};

export default React.memo(Contact); // it will memozie the whole Header Component
