import SignUpForm from "../../components/sign-up/sign-up.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
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
