import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }
  increment() {
    //Incrementando el valor en 1 del valor actual
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );

    //Incrementando en base al valor anterior
    this.setState(
      (prevState, props) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log(this.state.count);
      }
    );
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <p>count {this.state.count}</p>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
