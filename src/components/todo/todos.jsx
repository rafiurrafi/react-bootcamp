import { List, Paper } from "@material-ui/core";
import React, { useContext } from "react";
import { TodosContext } from "./contexts/todos.context";
import TodoList from "./todoList";

const Todos = (props) => {
  const todosContext = useContext(TodosContext);
  const { todos } = todosContext;
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <TodoList key={todo.key} todo={todo} />
        ))}
      </List>{" "}
    </Paper>
  );
};

export default Todos;
