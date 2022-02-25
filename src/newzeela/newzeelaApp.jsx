import React from "react";
import HeaderMiddle from "./components/headerMiddle";
import HeaderTop from "./components/headerTop";
import "./components/styles/newzeelaApp.scss";

// react icons

// link inspiration
// https://bytesed.com/tf/katerio/index-04.html
const NewzeelaApp = () => {
  return (
    <div className="newzeela-app">
      <HeaderTop />
      <HeaderMiddle />
    </div>
  );
};

export default NewzeelaApp;
