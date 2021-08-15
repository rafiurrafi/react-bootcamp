import React, { Component } from "react";
class TodoListInput extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddToList(this.state.title, this.props._id);
    this.props.onOpenList();
  }
  handleChange(e) {
    this.setState({ title: e.target.value });
  }
  componentDidMount() {
    this.setState({ title: this.props.todoList.title });
  }
  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default TodoListInput;
