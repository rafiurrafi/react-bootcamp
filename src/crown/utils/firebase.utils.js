import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqBH3jekr5CPqxCfORRWR-R3hYAT_4x3c",
  authDomain: "crawn-db-49b34.firebaseapp.com",
  projectId: "crawn-db-49b34",
  storageBucket: "crawn-db-49b34.appspot.com",
  messagingSenderId: "826561732140",
  appId: "1:826561732140:web:08037c106571bbee6e3b89",
  measurementId: "G-K0DT885M3Q",
};
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = async () =>
  await signInWithRedirect(auth, provider);

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { email, createdAt, displayName });
    } catch (error) {
      console.log(error);
    }
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signUserInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(email, password);
};
