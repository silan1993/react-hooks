import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  console.log("header rendered");
  const { mobile } = useContext(AppContext);
  return (
    <div>
      <h2>Footer</h2>
      <h2>Mobile: {mobile}</h2>
    </div>
  );
};

export default React.memo(Footer); // it will memozie the whole Header Component
