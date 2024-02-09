import { initializeApp } from "firebase/app";
import { browserLocalPersistence, createUserWithEmailAndPassword, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBdbItP8k8mmgJ42C_NiEaOvMrfpReaaC0",
  authDomain: "auth-test-e4a35.firebaseapp.com",
  projectId: "auth-test-e4a35",
  storageBucket: "auth-test-e4a35.appspot.com",
  messagingSenderId: "89356646525",
  appId: "1:689356646525:web:daedc08763b694ce23a914",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()

setPersistence(auth, browserLocalPersistence)

export const registerUser = async (email: string, password: string) => {
  let response = await createUserWithEmailAndPassword(auth, email, password)
  return response
}

export const loginUser = async (email: string, password: string) => {
  let response = await signInWithEmailAndPassword(auth, email, password)
  return response
}
