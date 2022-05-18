import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import {
  auth,
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase.utils";

const SignIn = () => {
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
      <h2>Sign in</h2>
      <button onClick={logUser}>Sign in</button>
      <button onClick={logWithRedirect}>Sign in with redirect</button>
    </div>
  );
};

export default SignIn;
