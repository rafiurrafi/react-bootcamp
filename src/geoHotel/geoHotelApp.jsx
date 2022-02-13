// //material-ui/core icons lab
// //@react-google-maps/api
// //axios
// //google-map-react

// const GeoHotelApp = () => {
//   return (

//   );
// };

// export default GeoHotelApp;
import React from "react";
import Header from "./components/header/header";
import List from "./components/list/list";
import { CssBaseline, Grid } from "@material-ui/core";
import Map from "./components/map/map";

const GeoHotelApp = () => {
  return (
    <CssBaseline>
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />{" "}
        </Grid>
        <Grid item xs={12} md={4}>
          <Map />
        </Grid>
      </Grid>
    </CssBaseline>
  );
};

export default GeoHotelApp;
