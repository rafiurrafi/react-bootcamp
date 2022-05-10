import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBekL7auCiFD1OYWdHHSzNdtJlxkPKVFEQ",
  authDomain: "crown-6c4c9.firebaseapp.com",
  projectId: "crown-6c4c9",
  storageBucket: "crown-6c4c9.appspot.com",
  messagingSenderId: "131571515658",
  appId: "1:131571515658:web:1993b93f123ce63c4afaf3",
};
initializeApp(firebaseConfig);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userAuth, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};
