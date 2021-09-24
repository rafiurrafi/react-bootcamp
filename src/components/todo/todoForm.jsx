import { TextField, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { TodosContext } from "./contexts/todos.context";
// const TodoForm = (props) => {
//   const [task, setTask] = useState("");
//   function handleSubmit(e) {
//     e.preventDefault();
//     props.onAddTask(task);
//     setTask("");
//   }
//   function handleChange(e) {
//     setTask(e.target.value);
//   }
//   return (
//     <Paper>
//       <form onSubmit={handleSubmit}>
//         <TextField value={task} onChange={handleChange} fullWidth />
//       </form>
//     </Paper>
//   );
// };

class TodoForm extends React.Component {
  static contextType = TodosContext;
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.context.addTask(this.state.task);
    this.setState({ task: "" });
  }
  handleChange(e) {
    this.setState({ task: e.target.value });
  }
  render() {
    return (
      <Paper>
        <form onSubmit={this.handleSubmit}>
          <TextField
            value={this.state.task}
            onChange={this.handleChange}
            fullWidth
          />
        </form>
      </Paper>
    );
  }
}

export default TodoForm;
