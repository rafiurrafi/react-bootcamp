import React from "react";
import CollectionItems from "./collectionItems";
import "../styles/collections.scss";

class Colleactions extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className="collections">
        {products.map((product) => (
          <CollectionItems key={product._id} product={product} />
        ))}
      </div>
    );
  }
}

export default Colleactions;
