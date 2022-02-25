import React from "react";
import "../styles/banner.scss";
const Banner = ({ imgSrc, height = "auto", width = "100%" }) => {
  const style = {
    height,
    width,
  };
  return (
    <div className="banner" style={style}>
      <img src={imgSrc} alt="" />
    </div>
  );
};

export default Banner;
