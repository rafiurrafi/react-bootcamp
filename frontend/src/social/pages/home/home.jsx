import React from "react";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Topbar />
      <div className="home__container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
