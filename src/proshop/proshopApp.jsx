import React from "react";
import "./bootstrap.min.css";
import "./proshopApp.scss";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/footer";
import Header from "./components/header";

const ProshopApp = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Row>
            <Col>
              <h1>Main</h1>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ProshopApp;
