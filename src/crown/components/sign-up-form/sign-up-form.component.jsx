import { useState } from "react";
import { createAuthUserWithEmailAndPass } from "../../utils/firebase.utils";
import FormInput from "../formInput/formInput.component";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Password doesn't match");
      return;
    }
    const response = createAuthUserWithEmailAndPass(email, password);
  };
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          type="text"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SignUpForm;
