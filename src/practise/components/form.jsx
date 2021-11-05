import React, { useEffect, useRef } from "react";

const Form = (props) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return <input ref={inputRef} type="text" placeholder="Your name" />;
};

export default Form;
