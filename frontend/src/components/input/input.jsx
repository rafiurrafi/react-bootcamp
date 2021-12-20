import React from "react";
import "./input.scss";
const Input = ({ label, value, onChange }) => {
  return (
    <input
      className="form-input"
      type={label}
      name={label}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
