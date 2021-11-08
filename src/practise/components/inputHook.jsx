import React from "react";
import useInput from "./hooks/useInput";

const InputHooks = (props) => {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  return (
    <form>
      <input
        type="text"
        placeholder="Enter your Name"
        value={name}
        onChange={setName}
      />
      <br />
      <input
        type="text"
        placeholder="Enter your Email"
        value={email}
        onChange={setEmail}
      />
      <br />
      <input
        type="password"
        placeholder="Enter your Password"
        value={password}
        onChange={setPassword}
      />
      <br />
    </form>
  );
};

export default InputHooks;
