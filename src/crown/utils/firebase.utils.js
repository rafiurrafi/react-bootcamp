import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {};
initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
const provider = new GoogleAuthProvider();
provider.setCustomParameters("prompt", "select_account");

export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = async () =>
  await signInWithRedirect(auth, provider);

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc();
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {}
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPass = async (email, pass) => {
  if (!email || !pass) return;
  return await createUserWithEmailAndPassword(auth, email, pass);
};

export const signInAuth = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
