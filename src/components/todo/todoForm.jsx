import { TextField, Paper } from "@material-ui/core";
import React from "react";
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTask(this.state.task);
  }
  handleChange(e) {
    this.setState({ task: e.target.value });
  }
  render() {
    console.log(this.props);
    return (
      <Paper>
        <form onSubmit={this.handleSubmit}>
          <TextField
            value={this.state.task}
            onChange={this.handleChange}
            fullWidth
          />
        </form>
      </Paper>
    );
  }
}

export default TodoForm;
