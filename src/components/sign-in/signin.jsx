import React from "react";
import Input from "../input/input";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <h1>I have an account</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            label="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Input
            label="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Signin;
