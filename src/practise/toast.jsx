import React from "react";
import "./scss/toast.scss";

class Toast extends React.Component {
  render() {
    return <div className="toast">Value cannot be less than zero</div>;
  }
}

export default Toast;
