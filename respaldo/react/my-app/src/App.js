import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/inline";
import './appStyle.css'
import styles from './appStyle.module.css'
function App() {
  return (
    <div className="App">
      <h1 className={styles.sucess}>xd</h1>
      <h1 className="error">asdasdas</h1>
      <Inline/>
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick  /> */}
      {/* <ClassClick  /> */}
      {/* <Counter/> */}
      {/* <Message /> */}
      {/* <Greet name="Roner"> */}
      {/* <p>this is chilren props</p> */}
      {/* </Greet> */}
      {/* <Greet name="Cristian"> */}
      {/* <button>action</button> */}
      {/* </Greet> */}
      {/* <Greet name="Kimberly" /> */}
      {/* <br/> */}
      {/* <Welcome name="Roner"/> */}
      {/* <Welcome name="Cristian"/> */}
      {/* <Welcome name="Kimberly"/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
