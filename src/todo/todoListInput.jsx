import React, { Component } from "react";
class TodoListInput extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onOpenList();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" />
        <button>Submit</button>
      </form>
    );
  }
}

export default TodoListInput;
