import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CryptoverseApp from "./cryptoverse/cryptoverseApp";
// import GeoHotelApp from "./geoHotel/geoHotelApp";
ReactDOM.render(
  <BrowserRouter>
    <CryptoverseApp />
  </BrowserRouter>,
  document.querySelector("#root")
);
