import { List, Paper } from "@material-ui/core";
import React from "react";
import TodoList from "./todoList";

class Todos extends React.Component {
  render() {
    const { onToggleTodos, onDeleteTodos, onEditTodos } = this.props;
    return (
      <Paper>
        <List>
          {this.props.todos.map((todo) => (
            <TodoList
              key={todo.key}
              todo={todo}
              onEditTodos={onEditTodos}
              onToggleTodos={onToggleTodos}
              onDeleteTodos={onDeleteTodos}
            />
          ))}
        </List>{" "}
      </Paper>
    );
  }
}

export default Todos;
