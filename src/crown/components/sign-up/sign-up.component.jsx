import { useContext, useState } from "react";
import { UserContext } from "../../context/user.context";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase.utils";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { setCurrentUser } = useContext(UserContext);
  const { displayName, email, password, confirmPassword } = formFields;
  function handleChange(e) {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      throw new Error("password doesn't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocFromAuth(user, { displayName });
      setCurrentUser(user);
      setFormFields(defaultFormField);
    } catch (error) {}
  }
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">displayName</label>
          <input
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">confirmPassword</label>
          <input
            type="text"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
