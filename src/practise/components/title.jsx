import React from "react";

const Title = (props) => {
  console.log("Title rendering...");
  return <h1>This is our practise app field</h1>;
};

export default React.memo(Title);
