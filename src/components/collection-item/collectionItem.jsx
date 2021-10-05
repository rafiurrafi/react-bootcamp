import React from "react";
import "./collectionItem.scss";
const CollectionItem = (props) => {
  const { imgUrl, name, price } = props.item;
  return (
    <div className="collection-item">
      <div
        className="collection-img"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="collection-footer">
        <span className="collection-name">{name}</span>
        <span className="collection-price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
