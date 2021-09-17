import React from "react";
import Palette from "./components/palette";
import seedColors from "./seedColors";

const App = (props) => {
  return (
    <div>
      <Palette palette={seedColors[4]} />
    </div>
  );
};

export default App;
