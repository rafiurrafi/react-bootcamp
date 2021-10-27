import axios from "axios";
import React from "react";

class GithubUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgSrc: "", loading: true };
  }
  componentDidMount() {
    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${this.props.name}`)
        .then((response) =>
          this.setState({ imgSrc: response.data.avatar_url, loading: false })
        );
    }, 1000);
  }
  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <div>
            {" "}
            <h1>{this.props.name}</h1>
            <img src={this.state.imgSrc} alt="" />
          </div>
        )}
      </div>
    );
  }
}

export default GithubUser;
