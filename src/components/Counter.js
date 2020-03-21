import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    // this.state.count = this.state.count + 1;
    // setState(state object,callback function)
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log("Callback value", this.state.count);
      }
    );
    console.log(this.state.count);
  }

  decrement() {
    // this.state.count = this.state.count + 1;
    this.setState(
      {
        count: this.state.count - 1
      },
      () => {
        console.log("Callback value", this.state.count);
      }
    );
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
