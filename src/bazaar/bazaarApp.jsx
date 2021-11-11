import React from "react";
// import SimpleSlider from "./components/bannerContainer";
import BannerContainer from "./components/bannerContainer";
import Header from "./components/header";
import Hero from "./components/hero";
import MenuSidebar from "./components/menuSidebar";
import "./styles/bazaarApp.scss";
class BazaarApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <BannerContainer />
        {/* <SimpleSlider /> */}
        <main className="home-main">
          <MenuSidebar />
        </main>
      </div>
    );
  }
}

export default BazaarApp;
