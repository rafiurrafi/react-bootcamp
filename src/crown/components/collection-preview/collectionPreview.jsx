import React from "react";
import CollectionItem from "../collection-item/collectionItem";
import "./collectionPreview.scss";
const CollectionPreview = (props) => {
  console.log(props);
  const { title, items } = props;
  return (
    <div className="collection-preview">
      <h3 className="title">{title}</h3>
      <div className="preview">
        {items
          .filter((item, id) => id < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
