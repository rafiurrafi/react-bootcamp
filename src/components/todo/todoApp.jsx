import { Grid } from "@material-ui/core";
import React from "react";
import Navbar from "./navbar";
import TodoForm from "./todoForm";
import { withStyles } from "@material-ui/styles";
import uuid from "uuid/v4";

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
  }
  componentDidMount() {
    this.setState({ todos: [...this.props.initialTodos] });
  }
  addTask(task) {
    this.setState({
      todos: [...this.state.todos, { _id: uuid(), task, completed: false }],
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Navbar />
        <div className={classes.spacing} />
        <Grid container justifyContent="center">
          <Grid item xs={10} md={6} lg={4}>
            <TodoForm onAddTask={this.addTask} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(TodoApp);
