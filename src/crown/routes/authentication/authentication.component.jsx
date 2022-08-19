import { useContext } from "react";
import SignUpForm from "../../components/sign-up/sign-up.component";
import { UserContext } from "../../context/user.context";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";

const Authentication = () => {
  const { setCurrentUser } = useContext(UserContext);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    setCurrentUser(user);
  };
  return (
    <div>
      sign in
      <button onClick={logGoogleUser}>Sign in with google</button>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
