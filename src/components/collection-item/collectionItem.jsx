import React from "react";
import "./collectionItem.scss";
const CollectionItem = ({ price, name, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="collection-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
    </div>
  );
};

export default CollectionItem;
