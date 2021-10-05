import React from "react";
import CollectionPreview from "../../components/collection-preview/collectionPreview";
import collections from "./shopData";
const ShopPage = (props) => {
  return (
    <div className="shop-page">
      {collections.map((item) => (
        <CollectionPreview key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ShopPage;
