import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDaxrOnymwQfcodKg4j0-IFQQuHKU8AcHc",
  authDomain: "crown-db-2ea05.firebaseapp.com",
  projectId: "crown-db-2ea05",
  storageBucket: "crown-db-2ea05.appspot.com",
  messagingSenderId: "702395908866",
  appId: "1:702395908866:web:d66b2bea790551dce6f81b",
};

initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
