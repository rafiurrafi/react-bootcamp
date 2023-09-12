import { signInWithGooglePopup } from "../../utils/firebase.utils";

const SignIn = () => {
  async function logUser() {
    const response = await signInWithGooglePopup();
    console.log(response);
  }
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logUser}>Google sign in</button>
    </div>
  );
};

export default SignIn;
