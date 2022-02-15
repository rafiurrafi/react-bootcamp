import React from "react";
import "./cryptoverseApp.scss";
import { Switch, Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar } from "./components";
import HomePage from "./components/homepage";
import Cryptocureencies from "./components/cryptocurrencies";
import CryptoDetails from "./components/cryptoDetails";
import Exchange from "./components/exchange";
import News from "./components/news";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./app/store";
const CryptoverseApp = () => {
  return (
    <Provider value={store}>
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/crypto/:id" element={CryptoDetails} />
                <Route path="/cryptocurrencies" element={Cryptocureencies} />
                <Route path="/exchange" element={Exchange} />
                <Route path="/news" element={News} />
                <Route path="/" element={HomePage} />
              </Routes>
            </div>
          </Layout>
        </div>
        <div className="footer"></div>
      </div>
    </Provider>
  );
};

export default CryptoverseApp;
