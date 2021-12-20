import React from "react";
import Button from "./common/button";

const HeroContent = (props) => {
  return (
    <div className="hero__content">
      <h1 className="heading__primary">
        Simple &amp; fast <br />
        money transfer
      </h1>
      <div className="hero__text">
        <p>
          Pay family and friends at home &amp; abroad, our transfer fees are
        </p>
        <p>10x cheapers than other providers are</p>
        <p>Join over 1 million users who trusts us</p>
      </div>
      <Button label="Log in" full={true} size="sm" />
      <div className="hero__features">
        <div>
          Trusted by More than <br /> <span>1 million</span> users
        </div>
        <div>
          <p>4.8 on</p>
          <small>Apple Store</small>
        </div>
        <div>
          <p>4.7 on</p>
          <small>Play Store</small>
        </div>
        <div>
          <p>4.7 on</p>
          <small>Trustpilot</small>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
