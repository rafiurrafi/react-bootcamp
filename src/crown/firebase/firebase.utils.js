import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDqBH3jekr5CPqxCfORRWR-R3hYAT_4x3c",
  authDomain: "crawn-db-49b34.firebaseapp.com",
  projectId: "crawn-db-49b34",
  storageBucket: "crawn-db-49b34.appspot.com",
  messagingSenderId: "826561732140",
  appId: "1:826561732140:web:08037c106571bbee6e3b89",
  measurementId: "G-K0DT885M3Q",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
