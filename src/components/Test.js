import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => console.log(json));
  }
  render() {
    return <div>component did mount</div>;
  }
}
export default Test;
