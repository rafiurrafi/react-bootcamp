import React from "react";
import "../../styles/button.scss";
const Button = ({ type = "button", label, size, full }) => {
  return (
    <button
      type={type}
      className={`btn btn--${size} ${full ? "btn--full" : ""}`}
    >
      {label}
    </button>
  );
};

export default Button;
