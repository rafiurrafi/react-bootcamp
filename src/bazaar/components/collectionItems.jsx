import React from "react";

const CollectionItems = (props) => {
  const { offer, name, img, price } = props.product;
  return (
    <div className="collections__item">
      {offer && <small className="collections__offer">{offer}%</small>}
      <img className="collections__img" src={img} alt={name} />
      <p className="collections__price">$ {price}</p>
      <button>Add</button>
    </div>
  );
};

export default CollectionItems;
