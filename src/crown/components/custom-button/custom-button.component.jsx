import React from "react";

import "./custom-buttom.styles.scss";

const CustomButton = ({ children, isgoogleSignIn, ...otherProps }) => (
  <button
    className={`${isgoogleSignIn ? "google-btn" : ""} 'custom-button'`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
