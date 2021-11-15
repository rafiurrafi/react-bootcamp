import React from "react";

class Colleactions extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className="collections">
        {products.map((product) => (
          <h1>{product.name}</h1>
        ))}
      </div>
    );
  }
}

export default Colleactions;
