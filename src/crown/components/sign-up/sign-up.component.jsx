import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase.utils";
import Button from "../button/button.component";
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
  const handleChannge = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("password doesn't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
    } catch (error) {}
  };
  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          placeholder="Username"
          name="displayName"
          value={displayName}
          onChange={handleChannge}
        />
        <FormInput
          label="Email"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChannge}
        />
        <FormInput
          label="Password"
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChannge}
        />
        <FormInput
          label="Confrim Password"
          type="text"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChannge}
        />
        <Button type="submit" text="Sign up" buttonType="google" />
      </form>
    </div>
  );
};

export default SignUp;
