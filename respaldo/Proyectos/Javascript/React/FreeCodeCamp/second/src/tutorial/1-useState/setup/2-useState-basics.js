import React, { useState } from "react";

/*
-> use
-> component name must be uppercase
-> must be in the function/component body
-> cannot call conditionally
*/

const StateBasics = () => {
  // const value = useState(1);
  // const handler = useState(1)[1];
  // console.log(value);
  // console.log(value, handler);

  const [text, setText] = useState("random people");
  const handleClick = () => {
    if (text === "random people") {
      setText("hello world");
    } else {
      setText("random people");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change text
      </button>
    </React.Fragment>
  );
};

export default StateBasics;
