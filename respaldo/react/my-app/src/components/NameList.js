import React from "react";
import Person from "./Person";


function NameList() {
  const names = ['Bruce','Clark','Diana','Diana'];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: "28",
      skill: "Angular",
    },
    {
      id: 2,
      name: "Clark",
      age: "24",
      skill: "React",
    },

    {
      id: 3,
      name: "Diana",
      age: "21",
      skill: "Vue",
    },
  ];

//   const names = ["Bruce", "Clark", "Diana"];
//   const nameList = names.map(name =>{
  let nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2> );

// let personList = persons.map(person =>
//     <Person key={person.id} person={person}/>
//   );
  return <div>{nameList}</div>;
}

export default NameList;
