import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  //Approach 1
  //   render() {
  //     if (this.state.isLoggedIn) {
  //       return (
  //         <div>
  //           <div>Welcome Aashish</div>
  //           {/* <div>Welcome Guest</div> */}
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div>
  //           {/* <div>Welcome Aashish</div> */}
  //           <div>Welcome Guest</div>
  //         </div>
  //       );
  //     }
  //   }

  //Approach 2
  //   render() {
  //     let message;
  //     if (this.state.isLoggedIn) {
  //       message = <div>Welcome Aashish</div>;
  //     } else {
  //       message = <div>Welcome Guest</div>;
  //     }

  //     return <div>{message}</div>;
  //   }

  //Approach 3
  render() {
    return this.state.isLoggedIn ? (
      <div>Welcome Aashish</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }
}

export default UserGreeting;

//If i am logged in the msg will be displayed as Welcome Aashish
// and if am not logged in the msg will be Welcome guest

//Approach 1: if else condition
//Approach 2: Elements i.e use variables
//Approach 3: Using Conditional Op i.e ternary op
