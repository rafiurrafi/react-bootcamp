import React from "react";
import SimpleSlider from "./components/bannerContainer";
import BannerContainer from "./components/bannerContainer";
import Header from "./components/header";
import Hero from "./components/hero";
import "./styles/bazaarApp.scss";
class BazaarApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        {/* <BannerContainer /> */}
        <SimpleSlider />
      </div>
    );
  }
}

export default BazaarApp;
