import React from "react";
import Input from "../input/input";

import { signInWithGoogle } from "../../firebase/firebase.utils";

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
  handleSubmit = (e) => {
    e.preventDefault();
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
          <input type="submit" value="Sign in" />
          <button onClick={signInWithGoogle}> Sign in with google</button>
        </form>
      </div>
    );
  }
}

export default Signin;
