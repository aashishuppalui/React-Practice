import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello"
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "Goodbye"
  //     });
  //     console.log(this);
  //   }

  clickHandler = () => {
    this.setState({
      message: "Goodbye form arrow"
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;

//Approach 1: Using bind method in render
//Approach 2: Using Arrow function in render
//Approach 3: Binding in the class constructor i.e. Binding the event handler as opposed in the event handler method
//Approach 4: Use arrow function as constructor or class property as arrow function
