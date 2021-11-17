import React from "react";
import CollectionItems from "./collectionItems";
import "../styles/collections.scss";

class Colleactions extends React.Component {
  render() {
    const { products, onAddItemToCart } = this.props;
    return (
      <div className="collections">
        {products.map((product) => (
          <CollectionItems
            key={product.id}
            product={product}
            onAddItemToCart={onAddItemToCart}
          />
        ))}
      </div>
    );
  }
}

export default Colleactions;
