import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDqBH3jekr5CPqxCfORRWR-R3hYAT_4x3c",
  authDomain: "crawn-db-49b34.firebaseapp.com",
  projectId: "crawn-db-49b34",
  storageBucket: "crawn-db-49b34.appspot.com",
  messagingSenderId: "826561732140",
  appId: "1:826561732140:web:08037c106571bbee6e3b89",
  measurementId: "G-K0DT885M3Q",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapshot = await userRef.get();
  console.log(snapshot);
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      throw new Error(err);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
