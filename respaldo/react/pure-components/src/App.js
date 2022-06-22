import React, { Component } from 'react'
// import PureComp from './Components/PureComp'
import './App.css'
import ParentComp from './Components/ParentComp'
export class App extends Component {
  render() {
    return (
      <div className='App'>
        <ParentComp/>
      </div>
    )
  }
}

export default App