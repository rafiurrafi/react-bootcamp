import React from "react";
import "../styles/cartDetails.scss";
import { FaOpencart } from "react-icons/fa";
import CartIcon from "./svg/cartIcon";
class CartDetails extends React.Component {
  render() {
    const { carts, showDetails, onShowDetails } = this.props;
    return (
      <div className={`cart-details ${showDetails && "show"}`}>
        <div className="cart-details__header">
          <span>
            <FaOpencart className="cart-details__icon" /> 0 item
          </span>
          <button
            onClick={onShowDetails}
            className="cart-details__header-close"
          >
            X
          </button>
        </div>
        {!carts.length && (
          <div className="cart-details__body">
            <CartIcon />
            <h4>No product found</h4>
          </div>
        )}
        {carts.length && <div className="cart-details__items">item added</div>}
        <button className="cart-details__btn">
          <span className="cart-details__btn-text">Checkout</span>
          <span className="cart-details__btn-amount">$0.00</span>
        </button>
      </div>
    );
  }
}

export default CartDetails;
