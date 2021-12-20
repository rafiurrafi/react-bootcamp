import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Rating from "../rating";
const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    }
    fetchProducts();
  }, []);
  console.log(match);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go back simon
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price : {product.price}</ListGroup.Item>
            <ListGroup.Item>Description : {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Price :</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status :</Col>
                <Col>
                  <strong>
                    {product.countInStock > 0 ? "In stock" : "Out of stock"}
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className="btn-block">Add to cart</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;