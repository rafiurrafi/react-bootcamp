import Home from "./routes/home/home";
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <h1>Navigation</h1>
      <Outlet />
    </div>
  );
};
const Shop = () => (
  <div>
    <h1>Shop</h1>
  </div>
);
const CrownApp = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default CrownApp;
