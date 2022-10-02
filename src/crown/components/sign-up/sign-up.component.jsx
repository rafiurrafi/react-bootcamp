import { useState } from "react";
import {
  createAuthUserUsingEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { user } = await createAuthUserUsingEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        throw new Error("Email is already registered");
    }
  }
  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
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
        <FormInput
          label="Confirm Password"
          type="text"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
