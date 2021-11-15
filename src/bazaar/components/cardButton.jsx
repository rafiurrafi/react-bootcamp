import React from "react";
import "../styles/cardButton.scss";
class CardButton extends React.Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    const { count } = this.state;
    return (
      <button className="card-button">
        {count > 0 && (
          <span className="card-button__dec" onClick={this.handleDecrement}>
            -
          </span>
        )}{" "}
        <span className="card-button__text" onClick={this.handleIncrement}>
          {count ? count : "Add"}
        </span>
        <span className="card-button__inc" onClick={this.handleIncrement}>
          +
        </span>
      </button>
    );
  }
}

export default CardButton;
