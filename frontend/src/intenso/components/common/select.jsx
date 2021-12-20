import React from "react";

const Select = ({ text, icon, value, onChange, options }) => {
  // const background = `url(${icon}) no-repeat right #f1f1f1`;
  const backgroundImage = `url(${icon})`;
  return (
    <div className="form-group">
      <label>{text}</label>
      <select
        value={value}
        onChange={onChange}
        style={{ backgroundImage }}
        className="form-control"
      >
        {options.map((option) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  );
};
export const SelectInput = ({ icon, value, onChange, options }) => {
  // const background = `url(${icon}) no-repeat right #f1f1f1`;
  // const backgroundPositionX = "95%;";
  const backgroundImage = `url(${icon})`;
  return (
    <select style={{ backgroundImage }} value={value} onChange={onChange}>
      {options.map((option) => (
        <option value={option.value}>{option.text}</option>
      ))}
    </select>
  );
};

export default Select;
