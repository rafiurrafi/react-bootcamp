import React, { useState } from 'react';
const SimpleForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    return ( <form>
        <input value = {name} onChange = {handleName} />
        <input value = {email} onChange = {handleEmail} />
        <input value = {password} onChange = {handlePassword} />
        <span> <br />Name : {name} <br />
        Email : {email} <br />
        Password : {password} <br /></span>
    </form> );
}
 
export default SimpleForm;