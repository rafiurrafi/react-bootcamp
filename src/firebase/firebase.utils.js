import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const config = {
  apiKey: "AIzaSyBlcBjCm3OZ6XA9hkd8syApTneO3bZIoAc",
  authDomain: "crawn-88da5.firebaseapp.com",
  projectId: "crawn-88da5",
  storageBucket: "crawn-88da5.appspot.com",
  messagingSenderId: "758600713192",
  appId: "1:758600713192:web:0b4cda9bc2046465b6da5d",
  measurementId: "G-RFK60LXW0V",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
