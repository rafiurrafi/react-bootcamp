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
    const { todoList, onAddToList } = this.props;
    return (
      <div className="TodoList">
        {!this.state.isEdit ? (
          <TodoText todoList={todoList} onOpenForm={this.handleOpenForm} />
        ) : (
          <TodoListInput
            _id={todoList._id}
            todoList={todoList}
            onOpenList={this.handleOpenList}
            onAddToList={onAddToList}
          />
        )}
      </div>
    );
  }
}

export default TodoList;
