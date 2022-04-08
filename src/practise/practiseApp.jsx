import React from "react";
import Demo from "./demo";
import Game from "./game";

const PractiseApp = () => {
  return (
    <div>
      <Game />
      <Demo animal="Cow" food="rice" />
    </div>
  );
};

export default PractiseApp;
