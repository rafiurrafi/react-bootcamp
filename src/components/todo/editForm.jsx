import { TextField } from "@material-ui/core";
import React from "react";

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({ task: this.props.todo.task });
  }
  handleChange(e) {
    this.setState({ task: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onEditTodos(this.props.todo._id, this.state.task);
    this.props.onToggleEdit();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            value={this.state.task}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default EditForm;
