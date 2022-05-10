import { useState } from "react";
import { createUserAuthWithUserAndPassword, createUserDocFromAuth } from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
    displayName : "",
    email : "",
    password : "",
    confirmPassword : ""
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const handleChange = e => {
        const {name, value} = e.target
        setFormFields({...formFields, [name] : value})
    }
    const handleSubmit = async e => {
        e.preventDefault();
        if(password !== confirmPassword){
            console.log("Password doesn't match");
            return
        }
        const {user} = await createUserAuthWithUserAndPassword(email, password);
       
        const userDocRef = await createUserDocFromAuth(user.uid, {displayName});
        console.log(userDocRef);
    }
    const {displayName, email, password, confirmPassword} = formFields;
    return ( 
        <div>
            <h3>Sign up with your email and password</h3>
            <form  onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" name="displayName" value={displayName} onChange = {handleChange} />
                <FormInput label="Email" type="text" name="email" value={email} onChange = {handleChange} />
                <FormInput label="Password" type="text" name="password" value={password} onChange = {handleChange} /> 
                <FormInput label="Confirm Password" type="text" name="confirmPassword" value={confirmPassword} onChange = {handleChange} />
                 <button type="submit">Sign up</button>
            </form>
        </div>
     );
}
 
export default SignUpForm;