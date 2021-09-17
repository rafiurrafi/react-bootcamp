import React from "react";
import Palette from "./components/palette";
import seedColors from "./seedColors";
import { generatePalette } from "./components/utils/colorHelpers";
const App = (props) => {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
};

export default App;
