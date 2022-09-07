import React from "react";
const Uncontrolled = () => {
  const emailInput = React.useRef();
  const passInput = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailInput.current.value, passInput.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="email" ref={emailInput} />
      <input type="text" placeholder="password" ref={passInput} />
      <button>Submit</button>
    </form>
  );
};

export default Uncontrolled;
