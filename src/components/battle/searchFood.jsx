import React from "react";

class SearchFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleChange(e) {
    this.setState({ query: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>Search for a food</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Search food"
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchFood;
