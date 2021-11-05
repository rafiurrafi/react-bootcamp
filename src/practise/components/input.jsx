import React from "react";
const Input = ({ type, text }, ref) => {
  return <input ref={ref} type={type} placeholder={text} />;
};

const forwardedRef = React.forwardRef(Input);
export default forwardedRef;
