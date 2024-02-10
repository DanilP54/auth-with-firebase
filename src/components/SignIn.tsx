import { Link } from "react-router-dom"
import Form from "./Form";
import axios from "axios";
import { useAppDispatch } from "../hooks/redux-hooks";
import { setUser } from "../store/slices/userSlice";

const API_KEY = 'AIzaSyBdbItP8k8mmgJ42C_NiEaOvMrfpReaaC0'


const SignIn = () => {

    const dispatch = useAppDispatch()
    let error = ''

    const handleClick = async (email: string, password: string) => {
        try {
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
                email,
                password,
                returnSecureToken: true
            })
            dispatch(setUser({
                email: response.data.email,
                localId: response.data.localId,
                idToken: response.data.idToken,
                refreshToken: response.data.refreshToken,
                expiresIn: response.data.expiresIn
            }))

        } catch (err) {
            switch (err.response.data.error.message) {
                case 'INVALID_EMAIL':
                    error = err.response.data.error.message
                case 'EMAIL_NOT_FOUND':
                    error = err.response.data.error.message
                    break;
                case 'INVALID_PASSWORD':
                    error = err.response.data.error.message
                    break;
                case 'USER_DISABLED':
                    error = err.response.data.error.message
                    break;
                default:
                    error = 'Unknow error'
            }
        }
    }

    return (
        <div>
            <Form mode='Sign In' handleClick={handleClick} />
        </div>
    )
}

export default SignIn;