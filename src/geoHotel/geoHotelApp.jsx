//material-ui/core icons lab
//@react-google-maps/api
//axios
//google-map-react
import React from "react";
import Header from "./components/header/header";
import List from "./components/list/list";
import { Grid } from "@material-ui/core";
import Map from "./components/map/map";
const GeoHotelApp = () => {
  return (
    <div>
      ok
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />{" "}
        </Grid>
        <Grid item xs={12} md={4}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
};

export default GeoHotelApp;
