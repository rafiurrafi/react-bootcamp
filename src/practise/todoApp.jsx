import { Grid, Paper } from "@material-ui/core";
import React from "react";
import Navbar from "./navbar";
import TodoForm from "./todoForm";
import uuid from "uuid/v4";
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodos = this.addTodos.bind(this);
  }
  addTodos(task) {
    this.setState({ todos: [...this.state.todos, { _id: uuid(), task }] });
  }
  render() {
    return (
      <div>
        <Navbar />
        {/* todoform  */}
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={10} md={6} lg={3} spacing={2}>
            <Paper>
              <TodoForm onAddTodos={this.addTodos} />
            </Paper>
          </Grid>
          <Grid item xs={10} md={6} lg={3} spacing={2}>
            <Paper>
              <TodoForm onAddTodos={this.addTodos} />
            </Paper>
          </Grid>
        </Grid>
        {/* todolist  */}
      </div>
    );
  }
}

export default TodoApp;
