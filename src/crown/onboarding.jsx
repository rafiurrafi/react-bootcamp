import React, { useState } from "react";

const Onboarding = ({ children }) => {
  const [index, setIndex] = useState(0);
  const currentChild = children[index];
  const gotoNext = () => setIndex(index + 1);
  //   console.log(React.Children.toArray(children));
  if (React.isValidElement(currentChild))
    return React.cloneElement(currentChild, { gotoNext });
};

export default Onboarding;
