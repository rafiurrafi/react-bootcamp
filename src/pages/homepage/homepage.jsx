import React from "react";
import "./homepage.scss";
const Homepage = (props) => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <div className="title">Jacket</div>
            <div className="subtitle">Shop now</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Sneaker</div>
            <div className="subtitle">Shop now</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Hats</div>
            <div className="subtitle">Shop now</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Men</div>
            <div className="subtitle">Shop now</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Women</div>
            <div className="subtitle">Shop now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
