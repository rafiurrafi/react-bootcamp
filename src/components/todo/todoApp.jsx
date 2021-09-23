import { Grid } from "@material-ui/core";
import React from "react";
import Navbar from "./navbar";
import TodoForm from "./todoForm";
import { withStyles } from "@material-ui/styles";
import uuid from "uuid/v4";
import Todos from "./todos";

const styles = {
  spacing: {
    margin: 30,
  },
};

class TodoApp extends React.Component {
  static defaultProps = {
    initialTodos: [
      { _id: uuid(), task: "Todo", completed: false },
      { _id: uuid(), task: "New", completed: false },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTask = this.addTask.bind(this);
    this.editTodos = this.editTodos.bind(this);
    this.toggleTodos = this.toggleTodos.bind(this);
    this.deleteTodos = this.deleteTodos.bind(this);
  }
  componentDidMount() {
    this.setState({ todos: [...this.props.initialTodos] });
  }
  addTask(task) {
    this.setState({
      todos: [...this.state.todos, { _id: uuid(), task, completed: false }],
    });
  }
  toggleTodos(id) {
    console.log(id);
    const updatedTodos = this.state.todos.map((todo) =>
      todo._id === id ? { ...todo, completed: !todo.completed } : todo
    );

    this.setState({ todos: updatedTodos });
  }
  editTodos(id, task) {
    const todos = this.state.todos.map((todo) =>
      todo._id === id ? { ...todo, task } : todo
    );
    this.setState({ todos });
  }
  deleteTodos(id) {
    console.log(id);
    const updatedTodos = this.state.todos.filter((todo) => todo._id !== id);
    this.setState({ todos: updatedTodos });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Navbar />
        <div className={classes.spacing} />
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={10} md={6} lg={4}>
            <TodoForm onAddTask={this.addTask} />
          </Grid>
          <Grid item xs={10} md={6} lg={4}>
            <Todos
              todos={this.state.todos}
              onEditTodos={this.editTodos}
              onToggleTodos={this.toggleTodos}
              onDeleteTodos={this.deleteTodos}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(TodoApp);
