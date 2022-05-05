import { createUserDocFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser =async  () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocFromAuth(user);
        
    }
    return ( 
        <div>
            <h3>Sign in</h3>
            <button onClick={logGoogleUser}>Sign</button>
        </div>
     );
}
 
export default SignIn;