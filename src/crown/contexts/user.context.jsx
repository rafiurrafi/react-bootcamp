import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChagelistener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() =>{
    const unsubscribe = onAuthStateChagelistener(user => 
      {
        if(user) createUserDocumentFromAuth(user)
      }
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
