import { createContext, useReducer, useEffect } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const USER_ACTION_TYPE = {
  SET_CURRENT_USER : "SET_CURRENT_USER"
}

const userReducer = (state, action) => {
  const {type, payload} = action;
  switch(type){
    case USER_ACTION_TYPE.SET_CURRENT_USER : 
      return {currentUser : payload};
    default : 
    throw new Error(`Unhandled error ${type}`)
  }
}
const INITIAL_VALUE ={currentUser : null}
export const UserProvider = ({ children }) => {
  const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_VALUE);
  const setCurrentUser  =(user) => dispatch({type : USER_ACTION_TYPE.SET_CURRENT_USER, payload: user})
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};