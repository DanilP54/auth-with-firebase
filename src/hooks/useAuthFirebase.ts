import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { Mode } from "../components/FormContainer";
import { DEFAULT_MODE, REGISTER_MODE } from "../components/FormContainer";




export const useAuthFirebase = (email: string, password: string, mode: Mode) => {
    const auth = getAuth();
    switch (mode) {
        case DEFAULT_MODE:
            return signInWithEmailAndPassword(auth, email, password)
        case REGISTER_MODE:
            return createUserWithEmailAndPassword(auth, email, password)
    }
}





