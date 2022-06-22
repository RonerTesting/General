import React, { Component } from "react";

class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message:"Hola"
    };
    // this.clickHandler=this.clickHandler.bind(this); //case 3
  }
//   clickHandler(){   // case 1 & 2
//     this.setState({
//         message:"Adios"
//     });
//     console.log(this);
//   }
  clickHandler=()=>{ //case 4
      this.setState({
          message: this.state.message==="Hola"?"Adios":"Hola"
      });
  }
  render() {
    return (
      <div className="">
        <p>{this.state.message}</p>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */} {/*case 1*/}
        {/* <button onClick={()=>{this.clickHandler()}}>Click</button>  */} {/*case 2*/}
        <button onClick={this.clickHandler}>Click</button> {/*case 3 & 4*/}

      </div>
    );
  }
}

export default EventBind;
