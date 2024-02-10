import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { Mode } from "../components/LoginPage";
import { DEFAULT_MODE, REGISTER_MODE } from "../components/LoginPage";




export const useAuthFirebase = (email: string, password: string, mode: Mode) => {
    const auth = getAuth();
    switch (mode) {
        case DEFAULT_MODE:
            return signInWithEmailAndPassword(auth, email, password)
        case REGISTER_MODE:
            return createUserWithEmailAndPassword(auth, email, password)
    }
}





