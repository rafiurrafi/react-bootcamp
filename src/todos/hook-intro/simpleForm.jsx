import React from 'react';
import useInput from './hooks/useInput';
const SimpleForm = (props) => {
    const [name, setName] = useInput("");
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");
   
    return ( <form>
        <input value = {name} onChange = {setName} />
        <input value = {email} onChange = {setEmail} />
        <input value = {password} onChange = {setPassword} />
        <span> <br />Name : {name} <br />
        Email : {email} <br />
        Password : {password} <br /></span>
    </form> );
}
 
export default SimpleForm;