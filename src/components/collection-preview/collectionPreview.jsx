import React from "react";
import "./collectionPreview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <div className="title">{title.toUpperCase()}</div>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <div>{item.name}</div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
