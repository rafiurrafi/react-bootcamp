import React from "react";
import "../styles/cartDetails.scss";
class CartDetails extends React.Component {
  render() {
    const { carts, showDetails } = this.props;
    return (
      <div className={`cart-details ${showDetails && "show"}`}>CartDetails</div>
    );
  }
}

export default CartDetails;
