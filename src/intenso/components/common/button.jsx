import React from "react";
import "../../styles/button.scss";
const Button = ({ label, size, full }) => {
  return (
    <button className={`btn btn--${size} ${full ? "btn--full" : ""}`}>
      {label}
    </button>
  );
};

export default Button;
