import { List, Paper } from "@material-ui/core";
import React from "react";
import TodoList from "./todoList";

class Todos extends React.Component {
  render() {
    return (
      <Paper>
        <List>
          {this.props.todos.map((todo) => (
            <TodoList key={todo.key} todo={todo} />
          ))}
        </List>{" "}
      </Paper>
    );
  }
}

export default Todos;
