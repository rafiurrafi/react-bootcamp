import React from "react";
import Palette from "./components/palette";
import seedColors from "./seedColors";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./components/utils/colorHelpers";
const App = (props) => {
  const findPalette = (id) => {
    return seedColors.find((color) => color.id === id);
  };
  return (
    <Switch>
      <Route
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route path="/" render={() => <h1>Home</h1>} />
    </Switch>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
};

export default App;
