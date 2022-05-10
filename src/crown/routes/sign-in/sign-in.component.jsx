import { auth, createUserDocFromAuth, signInWithGooglePopUp, signInWithGoogleRedirect } from "../../utils/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import "./sign-in.style.scss"
import { useEffect } from "react";
const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        const userDocRef = await createUserDocFromAuth(user)
        console.log(userDocRef);
    }
    const logGoogleRedirect = async () => {
        await signInWithGoogleRedirect();
    }
    useEffect(async () => {
        const response = await getRedirectResult(auth)
        console.log(response);
    }, [])
    return ( 
        <div>
            <h2>Sign in</h2>
            <button onClick={logGoogleUser}>Sign in</button>
            <button onClick={logGoogleRedirect}>Sign in</button>
        </div>
     );
}
 
export default SignIn;