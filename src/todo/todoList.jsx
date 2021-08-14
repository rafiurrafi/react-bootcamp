import React, { Component } from "react";
import TodoListInput from "./todoListInput";
import TodoText from "./todoText";
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      isEdit: false,
    };
    this.handleOpenForm = this.handleOpenForm.bind(this);
    this.handleOpenList = this.handleOpenList.bind(this);
  }
  handleOpenForm() {
    this.setState({ isEdit: true });
  }
  handleOpenList() {
    this.setState({ isEdit: false });
  }
  render() {
    return (
      <div className="TodoList">
        {!this.state.isEdit ? (
          <TodoText onOpenForm={this.handleOpenForm} />
        ) : (
          <TodoListInput onOpenList={this.handleOpenList} />
        )}
      </div>
    );
  }
}

export default TodoList;
