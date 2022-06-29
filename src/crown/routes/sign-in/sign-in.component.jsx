import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  // useEffect(async () => {
  //   await getRedirectResult(auth);
  // }, []);
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in</button>
      <button onClick={signInWithGoogleRedirect}>Sign in Redirect</button>
    </div>
  );
};

export default SignIn;
