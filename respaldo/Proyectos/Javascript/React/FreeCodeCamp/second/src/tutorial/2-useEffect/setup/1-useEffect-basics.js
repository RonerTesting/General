import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
/*
 -> El segundo parametro de useEfect es un listener de una variable
  que toma por condicional en dado caso que esta cambie.
  se aplicara el efecto
 */
const UseEffectBasics = () => {
  const [value, setValue] = useState(5);
  /*
  useEffect(() => {
    console.log("call useEffect");
    if (value >= 0) {
      document.title = `New Messages(${value})`;
    }
  }, []);
*/
  useEffect(() => {
    console.log("hola");
  }, []);
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
