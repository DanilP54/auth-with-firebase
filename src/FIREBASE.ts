import { initializeApp } from "firebase/app";
import { browserLocalPersistence, createUserWithEmailAndPassword, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();




setPersistence(auth, browserLocalPersistence);

export const registerUser = async (email: string, password: string) => {
  let response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
}

export const loginUser = async (email: string, password: string) => {
  let response = await signInWithEmailAndPassword(auth, email, password);
  return response;
}
