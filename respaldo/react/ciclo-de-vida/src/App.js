import React,{Component} from 'react';
import './App.css';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table'
// import LifecycleA from './components/LifecycleA';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Table/>
        {/* <LifecycleA/> */}
        {/* <FragmentDemo/> */}
      </div>
    );
    
  }
}

export default App;
