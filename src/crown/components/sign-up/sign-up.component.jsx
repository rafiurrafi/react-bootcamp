import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormField = () => {
    setFormFields(defaultFormField);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) console.log("error");
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        console.log("Email already in use");
    }
  };
  return (
    <div>
      <h2>Sign up with email and password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Diplay Name</label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <label htmlFor="">Email</label>
        <input type="text" name="email" value={email} onChange={handleChange} />

        <label htmlFor="">Password</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <label htmlFor="">Confirm Password</label>
        <input
          type="text"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
