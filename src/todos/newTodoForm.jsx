import React, { Component } from "react";
import uuid from "uuid/v4";
class NewTodoForm extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid() });
    this.setState({ task: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          id="task"
          name="task"
          placeholder="New todo"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
