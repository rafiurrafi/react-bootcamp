import { useState } from "react";
import { createAuthUserFromEmailAndPassword } from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return;
    try {
      const response = await createAuthUserFromEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {}
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          value={displayName}
          name="displayName"
          onChange={handleChange}
        />
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
        <FormInput
          label="Confirm Password"
          type="text"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
