import React from "react";

const Select = ({ text, value, onChange, options }) => {
  return (
    <div className="form-group">
      <label>{text}</label>
      <select value={value} onChange={onChange} className="form-control">
        {options.map((option) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
