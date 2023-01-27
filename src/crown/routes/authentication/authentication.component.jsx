import { async } from "@firebase/util";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignUp from "../../components/sign-up/sign-up.component";
import {
  auth,
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase.utils";

const Authentication = () => {
  async function logGoogleUser() {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  }
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>sign in</button>
      <SignUp />
    </div>
  );
};

export default Authentication;
