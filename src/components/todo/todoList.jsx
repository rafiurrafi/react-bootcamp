import React from "react";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditForm from "./editForm";
class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
    };
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
  }
  handleToggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  render() {
    const { todo, onToggleTodos, onDeleteTodos, onEditTodos } = this.props;
    const { completed } = todo;
    const { isEditing } = this.state;
    return (
      <>
        {isEditing ? (
          <EditForm
            todo={todo}
            onToggleEdit={this.handleToggleEdit}
            onEditTodos={onEditTodos}
          />
        ) : (
          <ListItem>
            <Checkbox
              checked={todo.completed}
              onChange={() => onToggleTodos(todo._id)}
            />
            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {todo.task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton>
                <DeleteIcon onClick={() => onDeleteTodos(todo._id)} />
              </IconButton>
              <IconButton onClick={this.handleToggleEdit}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )}
      </>
    );
  }
}

export default TodoList;
