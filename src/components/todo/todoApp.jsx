import { Grid } from "@material-ui/core";
import React from "react";
import Navbar from "./navbar";
import TodoForm from "./todoForm";
import { withStyles } from "@material-ui/styles";
import Todos from "./todos";
import TodosProvider from "./contexts/todos.context";

const styles = {
  spacing: {
    margin: 30,
  },
};
// const TodoApp = (props) => {
//   const { classes } = props;

//   return (
//     <div>
//       <Navbar />
//       <div className={classes.spacing} />
//       <Grid container justifyContent="center" spacing={2}>
//         <Grid item xs={10} md={6} lg={4}>
//           <TodoForm />
//         </Grid>
//         <Grid item xs={10} md={6} lg={4}>
//           <Todos />
//         </Grid>
//       </Grid>
//     </div>
//   );
// };
class TodoApp extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Navbar />
        <div className={classes.spacing} />
        <TodosProvider>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={10} md={6} lg={4}>
              <TodoForm />
            </Grid>
            <Grid item xs={10} md={6} lg={4}>
              <Todos />
            </Grid>
          </Grid>
        </TodosProvider>
      </div>
    );
  }
}

export default withStyles(styles)(TodoApp);
