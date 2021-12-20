import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <p className="text-center py-3">&copy; Copywrite Proshop</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
