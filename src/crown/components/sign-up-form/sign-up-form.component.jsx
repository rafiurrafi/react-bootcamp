import { useState } from "react"
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName :"",
    email : "",
    password : "",
    confirmPassword : ""
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const handleSubmit = async e => {
        e.preventDefault()
        if(password !== confirmPassword) {
            console.log("Password doesn't match");
            return;
        }
        try {
           const {user} =  await createAuthUserWithEmailAndPassword(email, password)
          await createAuthUserWithEmailAndPassword(user, {displayName})
        } catch (error) {
            console.log(error.message);
        }
    }
    const handleChange = e =>  {
        setFormFields({...formFields, [e.target.name] : e.target.value})
    }
    const {displayName, email, password, confirmPassword} = formFields;
    return ( 
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Diaplay name</label>
                <input type="text" name="displayName" value={displayName} onChange = {handleChange} />
                <label htmlFor="">Email</label>
                <input type="text" name="email" value={email} onChange = {handleChange} />
                <label htmlFor="">Password</label>
                <input type="text" name="password" value={password} onChange = {handleChange} />
                <label htmlFor="">Confirm Password</label>
                <input type="text" name="confirmPassword" value={confirmPassword} onChange = {handleChange} />
                <button type="submit">Sign up</button>
            </form>
        </div>
     );
}
 
export default SignUpForm;