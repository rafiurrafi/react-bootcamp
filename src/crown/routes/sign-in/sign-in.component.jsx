import {useEffect} from "react"
import { auth, createUserDocFromAuth, signInWithgGoogleRedirect, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import {getRedirectResult} from "firebase/auth"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {
    const logGoogleUser =async  () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
        console.log(userDocRef);
        
    }
    const logWithGoogleRedirect = async() => {
        const {user} = await signInWithgGoogleRedirect();
        console.log(user);
    }
    useEffect(async () => {
       const {user} =  await getRedirectResult(auth);
       if(user){
          const userDocRef =  await createUserDocFromAuth(user)
       }
    }, [])
    return ( 
        <div>
            <h3>Sign in</h3>
            <SignUpForm />
            <button onClick={logGoogleUser}>Sign</button>
            <button onClick={logWithGoogleRedirect}>Sign in with redirect</button>
        </div>
     );
}
 
export default SignIn;