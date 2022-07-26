import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in</button>
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
