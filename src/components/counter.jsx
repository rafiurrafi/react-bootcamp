import React from "react";
import useToggle from "./hooks/useToggle";
const classes = {
  form: {},
  input: {
    marginBottom: "20px",
    width: "100%",
    display: "inline-block",
  },
};
const Counter = (props) => {
  console.log(classes);
  return (
    <div>
      <form>
        <input className={classes.input} placeholder="Name" /> <br />
        <input className={classes.input} placeholder="Password" />
        <br />
        <input className={classes.input} placeholder="Email" />
        <br />
      </form>
    </div>
  );
};

export default Counter;
