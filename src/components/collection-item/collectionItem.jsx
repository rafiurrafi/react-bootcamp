import React from "react";
import "./collectionItem.scss";
const CollectionItem = ({ price, name, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="collection-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="collection-name">{name}</span>
        <span className="collection-price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
