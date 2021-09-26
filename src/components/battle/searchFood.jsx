import React from "react";
import { Link } from "react-router-dom";
import Food from "./food";

class SearchFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>Search for a food</h1>
        <form>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Search food"
          />
          <Link to={`/food/${this.state.query}`}>Search</Link>
        </form>
      </div>
    );
  }
}

export default SearchFood;
