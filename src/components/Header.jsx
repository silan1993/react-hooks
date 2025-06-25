import React from "react";

const Header = () => {
  console.log("header rendered");
  return (
    <div>
      <h2>Header</h2>
    </div>
  );
};

export default React.memo(Header); // it will memozie the whole Header Component
