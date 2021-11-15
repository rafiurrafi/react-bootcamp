import React from "react";

const CollectionItems = (props) => {
  const { offer, name, img, price } = props.product;
  return (
    <div className="collection__items">
      <span className="collection__offer">{offer}</span>
      <img className="collection__img" src={img} alt={name} />
      <p className="collection__price">{price}</p>
      <button>Add</button>
    </div>
  );
};

export default CollectionItems;
