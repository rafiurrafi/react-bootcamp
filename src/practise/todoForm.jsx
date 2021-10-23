import { TextField } from "@material-ui/core";
import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }
  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddTodos(this.state.task);
    this.setState({ task: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          value={this.state.task}
          onChange={this.handleChange}
          fullWidth
        />
      </form>
    );
  }
}

export default TodoForm;
