import React, { useState } from "react";
import useInput from "./hooks/useInput";

const Form = (props) => {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  return (
    <form>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={setName}
      />{" "}
      <span>{name}</span> <br />
      <input
        type="text"
        placeholder="Your email"
        value={email}
        onChange={setEmail}
      />{" "}
      <span>{email}</span> <br />
      <input
        type="text"
        placeholder="Your password"
        value={password}
        onChange={setPassword}
      />{" "}
      <span>{password}</span>
      <br />
      <button>Submit</button>
    </form>
  );
};

export default Form;
