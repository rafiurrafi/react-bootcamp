import React, { useState } from "react";
// import AmazonApp from "./amazon/amazonApp";
import Counter from "./practise/counter";
const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {/* <AmazonApp /> */}
      {show && <Counter />}
      <br />
      <button onClick={() => setShow(!show)}>toggle</button>
    </div>
  );
};

export default App;
