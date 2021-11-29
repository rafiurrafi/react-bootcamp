import React from "react";
import CardButton from "./cardButton";

const CollectionItems = (props) => {
  const { id, offer, name, img, price } = props.product;
  return (
    <div className="collections__item">
      {offer && <small className="collections__offer">{offer}%</small>}
      <img className="collections__img" src={img} alt={name} />
      <p className="collections__price">$ {price}</p>
      <p className="collections__name">{name}</p>
      <CardButton id={id} onAddItemToCart={props.onAddItemToCart} />
    </div>
  );
};

export default CollectionItems;
