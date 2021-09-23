import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
const EditForm = (props) => {
  const [task, setTask] = useState("");
  useEffect(() => {
    setTask(props.todo.task);
    console.log(task);
  }, []);
  function handleChange(e) {
    setTask(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onEditTodos(props.todo._id, task);
    props.onToggleEdit();
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField fullWidth value={task} onChange={handleChange} />
    </form>
  );
};

export default EditForm;
// class EditForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       task: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   componentDidMount() {
//     this.setState({ task: this.props.todo.task });
//   }
//   handleChange(e) {
//     this.setState({ task: e.target.value });
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.onEditTodos(this.props.todo._id, this.state.task);
//     this.props.onToggleEdit();
//   }
//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }

// export default EditForm;
