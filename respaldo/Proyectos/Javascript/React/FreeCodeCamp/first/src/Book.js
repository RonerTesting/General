import React from "react";

const Book = ({ autor, titulo, image }) => {
  const clickHandler = (e) => {
    console.log("xd");
  };
  const complexExample = (autor) => {
    console.log(autor);
  };
  return (
    <article className="book">
      <img src={image} alt="" />
      <h1>Book: {titulo}</h1>
      <h4>Author: {autor}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(autor)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
