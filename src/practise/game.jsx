import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameOver: false,
    };
  }
  handleScore = () => {
    if (this.state.score > 5) this.setState({ gameOver: true });
    else this.setState({ score: this.state.score + 1 });
  };
  render() {
    return (
      <div>
        <button disabled={this.state.gameOver} onClick={this.handleScore}>
          {this.state.score}
        </button>
      </div>
    );
  }
}

export default Game;
