import React from "react";
import CardButton from "./cardButton";

const CollectionItems = (props) => {
  const { offer, name, img, price } = props.product;
  return (
    <div className="collections__item">
      {offer && <small className="collections__offer">{offer}%</small>}
      <img className="collections__img" src={img} alt={name} />
      <p className="collections__price">$ {price}</p>
      <CardButton />
    </div>
  );
};

export default CollectionItems;
