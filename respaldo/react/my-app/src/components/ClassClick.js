import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log('Clicked the button')
    }
    render() {
    return (
      <button onClick={this.clickHandler} >ClickMe</button>
    )
  }
}

export default ClassClick