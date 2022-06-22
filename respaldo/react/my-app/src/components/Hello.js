import React from "react";

const Hello = () => {
  // return(
  //     <div className="unaClase">
  //         <h1>Hello Roner </h1>
  //     </div>
  // )

  return React.createElement(
    "div",
    {id:'hello',className:"xd"},
    React.createElement("h1", null, "hello xd")
  );
};
export default Hello;
