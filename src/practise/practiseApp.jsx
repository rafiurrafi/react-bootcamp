import React, { useState } from "react";
import Food from "./components/food";
import { Switch, Route, Link } from "react-router-dom";
const PractiseApp = (props) => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <Link to={`/food/${search}`}>Go</Link>
      </form>
      <Switch>
        <Route path="/food/:name" render={(props) => <Food {...props} />} />
        <Route path="/" component={() => <h1>Home</h1>} />
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </div>
  );
};

export default PractiseApp;
