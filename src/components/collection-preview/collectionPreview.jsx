import React from "react";
import CollectionItem from "../collection-item/collectionItem";
import "./collectionPreview.scss";
const CollectionPreview = (props) => {
  const { title, items } = props.item;
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item._id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
