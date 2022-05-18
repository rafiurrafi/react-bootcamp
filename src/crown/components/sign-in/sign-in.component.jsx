import { getRedirectResult } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  auth,
  createUserDocFromAuth,
  signInWithEmailAndPassword,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const handleChannge = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {}
  };
  const logUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
    console.log(userDocRef);
  };
  const logWithRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
  };
  useEffect(() => {
    const run = async () => {
      const { user } = await getRedirectResult(auth);
      console.log(user);
    };
    run();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <Button type="submit" text="sign in" />
        <Button onClick={logUser} text="Sign in with google" />
        <Button onClick={logWithRedirect} text="Sign in with redirect" />
      </form>
    </div>
  );
};

export default SignIn;
