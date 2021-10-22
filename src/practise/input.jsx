import React from "react";
import useInput from "./hooks/useInput";

const Input = (props) => {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  return (
    <div>
      <input type="text" onChange={setName} value={name} />
      <br />
      <input type="email" onChange={setEmail} value={email} />
      <br />

      <input type="password" onChange={setPassword} value={password} />
    </div>
  );
};

export default Input;
