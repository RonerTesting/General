// import './App.css';
import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";
//custom hook

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>

    );
}

export default App;
