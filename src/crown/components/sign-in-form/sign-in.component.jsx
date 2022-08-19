import { useState } from "react";
import {
  createAuthUserFromEmailAndPassword,
  signUserWithEmailAndPassword,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signUserWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {}
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="text"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignUpForm;
