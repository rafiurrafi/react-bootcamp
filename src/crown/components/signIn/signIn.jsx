import React, { Component } from "react";
import FormInput from "../form-input/formInput";
import "./signIn.scss";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="Email"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
          />
          <FormInput
            type="text"
            name="Password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SignIn;
