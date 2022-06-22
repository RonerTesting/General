import React from "react";
import  './CreateTodoButton.css'
function CreateTodoButton(props) {

  const onClickButton = ()=>{
    props.setOpenModal(!props.openModal)
  }

  return <button 
  className="CreateTodoButton"
  onClick={()=>{onClickButton('Aqui se deberia abrir el modal')}}
  >
    +
  </button>;
}

export { CreateTodoButton };
