import { useContext, useState } from "react";

export const UserContext = useContext({
  currentUser: null,
  setCurrentUser: () => null,
});
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
