import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return;
    try {
      const res = await createAuthUserWithEmailAndPassword(email, password);
      console.log(res);
    } catch (error) {}
  };
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="display name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
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
        <FormInput
          label="confirm password"
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

export default SignUpForm;
