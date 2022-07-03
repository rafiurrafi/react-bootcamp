import { useContext, useState } from "react";

export const UserContext = useContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CURRENT_USER":
      return { user: payload };

    default:
      throw new Error(`unhandled action type ${type}`);
  }
};
const INITIAL_VALUE = { currentUser: null };

const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = userReducer(userReducer, INITIAL_VALUE);
  const setCurrentUser = (user) => dispatch(user);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
