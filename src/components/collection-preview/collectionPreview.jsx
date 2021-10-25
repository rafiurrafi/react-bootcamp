import React from "react";
import CollectionItem from "../collection-item/collectionItem";
import "./collectionPreview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <div className="title">{title.toUpperCase()}</div>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...collectionItems }) => (
            <CollectionItem key={id} {...collectionItems} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
