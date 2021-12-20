import React from "react";

const Input = ({ text, value, onChange, placeholder }) => {
  return (
    <div className="form-group">
      <label>{text}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

export default Input;
