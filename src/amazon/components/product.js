import React from "react";
import "../styles/product.scss";
const Product = (props) => {
  return (
    <div className="product">
      <h2 className="product__title">{props.title}</h2>
      <small>${props.price}</small>
      <p className="product__rating">
        {Array(props.rating)
          .fill()
          .map((_) => (
            <i className="fa fa-star"></i>
          ))}
      </p>
      <img className="product__img" src={props.imgSrc} alt={props.alt} />
      <button className="product__btn">Add to cart</button>
    </div>
  );
};

export default Product;
