import { useAppDispatch } from "../hooks/redux-hooks"
import { setUser } from "../store/slices/userSlice"


const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY

const dispatch = useAppDispatch()

export const signUpRequest = async (email: string, password: string) => {
    try {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            })
        })

        const data = await response.json()

        if (!response.ok) {
            throw data
        }

        dispatch(setUser({
            email: data.email,
            localId: data.localId,
            idToken: data.idToken,
            refreshToken: data.refreshToken,
            expiresIn: data.expiresIn
        }))

    } catch (responseError) {
        switch (responseError.message) {
            case 'EMAIL_EXIST':
                alert(responseError.message)
                break;
            case 'INVALID_EMAIL':
                alert(responseError.message)
                break;
            case 'OPERATION_NOT_ALLOWED':
                alert(responseError.message)
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                alert(responseError.message)
                break;
            default:
                alert(responseError.message)
        }
    }
}