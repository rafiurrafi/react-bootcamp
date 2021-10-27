import { Switch } from "@material-ui/core";
import React from "react";
import { Route } from "react-router";
import Home from "./components/home";
import Post from "./components/post";
import SignlePost from "./components/singlePost";
const PractiseApp = (props) => {
  return (
    <Switch>
      <Route path="/post/:id" component={SignlePost} />
      <Route path="/post" component={Post} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default PractiseApp;
