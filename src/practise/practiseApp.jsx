import React from "react";
import GithubUser from "./components/githubUser";
import Quote from "./components/quote";
import Timer from "./components/timer";
const PractiseApp = (props) => {
  const [showClock, setShowClock] = React.useState(false);
  return (
    <div>
      <GithubUser name="colt" />
    </div>
  );
};

export default PractiseApp;
