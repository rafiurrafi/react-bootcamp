import { signInWithGooglePopup } from "../../utils/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const log = await signInWithGooglePopup();
    console.log(log);
  };
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign in </button>
    </div>
  );
};

export default SignIn;
