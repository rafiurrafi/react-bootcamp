import { useState } from "react";
import {
  createAuthUserWithEmailAndPass,
  signInAuth,
} from "../../utils/firebase.utils";
import FormInput from "../formInput/formInput.component";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const respnse = await signInAuth(email, password);
  };
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
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
      </form>
      <button onClick={logGoogleUser}>Sign in google</button>
    </div>
  );
};

export default SignInForm;
