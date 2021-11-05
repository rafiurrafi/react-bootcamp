import React, { useEffect, useRef } from "react";
import Input from "./input";

const Form = (props) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return <Input ref={inputRef} type="text" text="Your name" />;
};

export default Form;
