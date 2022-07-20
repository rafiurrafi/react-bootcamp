import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase.utils";

const Authentication = () => {
  return (
    <div>
      <h1>Sign in</h1>
    </div>
  );
};

export default Authentication;
