import React from "react";
import "./bootstrap.min.css";
import "./proshopApp.scss";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeScreen from "./components/screens/homeScreen";

const ProshopApp = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ProshopApp;
