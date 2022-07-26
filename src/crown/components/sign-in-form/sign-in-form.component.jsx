import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  signUserInWithEmailAndPassword,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormField = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signUserInWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {}
  };
  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="password"
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignInForm;
