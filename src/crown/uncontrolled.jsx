import React from "react";
const Uncontrolled = () => {
  const emailInput = React.createRef();
  const passInput = React.createRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailInput.current.value);
    console.log(passInput.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Eamil" ref={emailInput} />
      <input type="text" placeholder="password" ref={passInput} />
      <button>Submit</button>
    </form>
  );
};

export default Uncontrolled;
